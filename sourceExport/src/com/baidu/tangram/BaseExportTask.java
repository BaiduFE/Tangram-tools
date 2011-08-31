package com.baidu.tangram;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.tools.ant.BuildException;
import org.apache.tools.ant.Project;
import org.apache.tools.ant.Task;

public class BaseExportTask extends Task {

	@Override
	public void execute() throws BuildException {
		// tangram-base
		try {
			String basePath = getProject().getBaseDir().getAbsolutePath();
			String baseSrcPath = basePath + "/" + srcPath;
			ArrayList<File> baseList = listSrcFile(baseSrcPath,
					new ArrayList<File>(), new File(baseSrcPath + "/baidu"),
					null, false);
			writeListToFile(baseList, outputPath + "/all_release_src.js");

			if (coreFile != null && !coreFile.isEmpty()) {
				ArrayList<File> coreList = listSrcFile(
						baseSrcPath,
						listDep(new File(basePath + "/" + coreFile),
								baseSrcPath), null, null, false);
				writeListToFile(coreList, outputPath + "/core_release_src.js");
			}

			if (uiSrcPath != null && !uiSrcPath.isEmpty()) {
				ArrayList<File> uiList = listSrcFile(uiSrcPath,
						new ArrayList<File>(), new File(uiSrcPath + "/baidu"),
						baseSrcPath, false);
				writeListToFile(uiList, outputPath + "/ui_release_src_only.js");

				uiList.addAll(baseList);
				writeListToFile(uiList, outputPath + "/ui_release_src.js");
			}
			
		} catch (Exception e) {
			if (debug)
				e.printStackTrace();
		}

		// tangram-ui

		// tangram-mobile
	}

	static HashMap<File, StringBuffer> map = new HashMap<File, StringBuffer>();

	static boolean debug = true;

	String srcPath = "src";
	String outputPath = "release";
	String coreFile = null;// "release/core.js";
	String uiSrcPath = null;
	String mobilePath = null;

	public void setSrcPath(String src) {
		this.srcPath = src;
	}

	public void setCoreFile(String core) {
		this.coreFile = core;
	}

	public void setOutputPath(String output) {
		this.outputPath = output;
		File outputFile = new File(output);
		if (!outputFile.exists())
			outputFile.mkdirs();
	}

	public void setUiSrcPath(String uiSrc) {
		if (new File(uiSrc).exists())
			this.uiSrcPath = uiSrc;
		else if (new File(getProject().getBaseDir() + "/" + uiSrc).exists())
			this.uiSrcPath = getProject().getBaseDir() + "/" + uiSrc;
		else
			System.err.println("fail set ui src path, path not exists : "
					+ uiSrc);
	}

	/**
	 * 提取项目中所有源码文件并按依赖顺序组织
	 * 
	 * @param sourcePath
	 * @param list
	 * @param file
	 * @param depSourcePath
	 * @return
	 * @throws IOException
	 */
	protected ArrayList<File> listSrcFile(String srcPath, ArrayList<File> list,
			File file, String depSourcePath, boolean includeDep)
			throws IOException {
		if (file == null)
			file = new File(srcPath);
		if (!file.exists()) {
			if (debug)
				System.err.println("src path not exists : "
						+ file.getAbsolutePath());
		} else if (file.isFile()) {
			if (file.getName().endsWith(".js") && !list.contains(file)) {
				list = listDepSrcFile(file, list, srcPath, depSourcePath,
						includeDep);
				list.add(file);
				return list;
			}
		} else
			for (File f : file.listFiles()) {
				list = listSrcFile(srcPath, list, f, depSourcePath, includeDep);
			}
		return list;
	}

	protected ArrayList<File> listDepSrcFile(File srcFile,
			ArrayList<File> list, String srcPath, String depSrcPath,
			boolean includeDep) throws IOException {
		Matcher m = Pattern.compile("///import ([^;]+);").matcher(
				readFile(srcFile));
		while (m.find()) {
			File f = d2f(m.group(1), srcPath);
			if (contains(list, f))
				continue;

			if (!f.exists()) {
				if (depSrcPath == null) {
					if (debug)
						System.err.println("depend miss : [src]"
								+ f2d(srcFile, srcPath) + " - [dep]"
								+ f2d(f, srcPath));
					// 如果指向依赖项目就直接忽略
					continue;
				} else {
					f = d2f(m.group(1), depSrcPath);
					if (!f.exists()) {
						if (debug)
							System.err.println("depend miss : [src]"
									+ f2d(srcFile, srcPath) + " - [dep]"
									+ f2d(f, srcPath));
					}
					continue;
				}
			}
			list = listDepSrcFile(f, list, srcPath, depSrcPath, includeDep);
			if (!contains(list, f))
				list.add(f);
		}
		return list;
	}

	protected ArrayList<File> listDep(File srcFile, String srcPath)
			throws IOException {
		ArrayList<File> list = new ArrayList<File>();
		Matcher m = Pattern.compile("///import ([^;]+);").matcher(
				readFile(srcFile));
		while (m.find()) {
			File f = d2f(m.group(1), srcPath);
			if (list.contains(f))
				continue;
			if (!f.exists()) {
				if (debug)
					System.err.println("dep file not exists : " + f);
				continue;
			}
		}

		for (File f : list) {
			list = listDepSrcFile(f, list, srcPath, null, false);
		}

		return list;
	}

	/**
	 * 检测文件是否存在
	 * <p>
	 * 如果存在a.b.c，则a.b.$c确认为存在
	 * <p>
	 * 如果存在a.b.$c，则a.b.c将替换a.b.$c
	 * 
	 * @param list
	 * @param file
	 * @return
	 * @throws IOException
	 */
	private boolean contains(ArrayList<File> list, File file)
			throws IOException {
		return list.contains(file);
		// String[] ss = f2d(file, sourcePath).split("\\.");
		// String name = file.getName();
		// if (name.startsWith("$")) {
		// ss[ss.length - 1] = ss[ss.length - 1].substring(1);
		// return list.contains(d2f(join(ss, "/"), sourcePath))
		// || list.contains(file);
		// } else {
		// ss[ss.length - 1] = "$" + ss[ss.length - 1];
		// int index = list.indexOf(d2f(join(ss, "/"), sourcePath));
		// if (index != -1) {
		// list.remove(index);
		// // 如果替换，必须追加替换文件的序列
		// list = listDepSrcFile(file, list);
		// list.add(index, file);
		// }
		// return list.contains(file);
		// }
	}

	private static void writeListToFile(ArrayList<File> list, String path)
			throws UnsupportedEncodingException, IOException {
		StringBuffer sb = new StringBuffer();
		for (File f : list) {
			if (map.get(f) == null)
				System.out.println("file cnt miss : " + f);
			sb.append(map.get(f));
		}
		if (debug)
			System.out.println(new File(path).getAbsolutePath());
		BufferedOutputStream bos = new BufferedOutputStream(
				new FileOutputStream(path));
		bos.write(sb.toString().getBytes("UTF-8"));
		bos.flush();
		bos.close();
	}

	public static String readFile(File file) throws IOException {
		if (map.containsKey(file))
			return map.get(file).toString();
		BufferedReader br = null;
		try {
			br = new BufferedReader(new InputStreamReader(new FileInputStream(
					file), "UTF-8"));
			StringBuffer sb = new StringBuffer();
			while (br.ready()) {
				sb.append(br.readLine());
				sb.append("\r\n");
			}
			map.put(file, sb);
			return sb.toString();
		} finally {
			if (br != null)
				try {
					br.close();
				} catch (Exception e) {
				}
		}
	}

	static String join(String[] data, String delim) {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < data.length; i++) {
			sb.append(data[i]);
			if (i >= data.length - 1) {
				break;
			}
			sb.append(delim);
		}
		return sb.toString();
	}

	private static String f2d(File f, String path) {
		String filepath = f.getAbsolutePath();
		return filepath.substring(path.length() + 1, filepath.length() - 3)
				.replaceAll("[\\\\/]", ".");
	}

	/**
	 * @param d
	 *            域名
	 * @return 文件名
	 */
	private static File d2f(String d, String path) {
		return new File(path + "/" + d.replaceAll("\\.", "/") + ".js");
	}

	public static void main(String[] args) {
		BaseExportTask task = new BaseExportTask();
		Project project = new Project();
		project.setBasedir("D:\\workspace\\git\\Tangram-base");
		task.setOutputPath("resource");
		task.setSrcPath("src");
		task.setCoreFile("release/core.js");
		task.setProject(project);
		task.setUiSrcPath("..\\Tangram-component\\src");

		task.execute();
	}
}
