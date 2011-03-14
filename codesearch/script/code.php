<?php
include "MergeSource.php";
include "JSPacker.php";
include "JSMin.php";

function do_merge($version, $src, $nobase, $compress, $viewSource) {

	$m = new MergeSource();
	$code = $m->merge($version, $src, $nobase);
	if (!$viewSource) {
		try {
			if ($compress == "yui") {
                if ($_SERVER['SERVER_NAME']=="localhost"){
                    $jarPath = dirname( __FILE__) . DIRECTORY_SEPARATOR . "yuicompressor-2.4.2.jar";
                    $tempFile = dirname( __FILE__) . DIRECTORY_SEPARATOR . time();
                    $file_pointer = fopen($tempFile, "a");
                    fwrite($file_pointer,$code);
                    fclose($file_pointer);
                    $cmd = "java -jar $jarPath $tempFile --charset UTF-8 --type js";
                    exec($cmd . ' 2>&1', $raw_output);
                    $code = implode("\n", $raw_output);
                    unlink($tempFile);
				}else{
                    $post_data = "code=" . urlencode($code);
                    $url = 'http://fe.baidu.com/~g/docbeta/source/script/yuimini.php';
                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_POST, 1);
                    curl_setopt($ch, CURLOPT_HEADER, 0);
                    curl_setopt($ch, CURLOPT_URL,$url);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                    $result = curl_exec($ch);
                    $code = $result;
				}
			} else if ($compress == "mini") {
				$code = JSMin::minify($code);
				
			} else if ($compress == "pack") {
				$packer = new JavaScriptPacker($code, 62, true);
				$code = $packer->pack();
			}
		} catch (Exception $e) {
		}
	}
	
    return $viewSource ? htmlspecialchars($code) : $code;
}

//版本
$version = $_REQUEST["version"];
//导入的 包
$src = $_REQUEST["src"];
//是否不包含base部分
$nobase = !isset($_REQUEST["nobase"]) || strtolower($_REQUEST["nobase"]) == "false" ? false : true;
//压缩类型  yui  mini  pack  其他值为不压缩
$compress = $_REQUEST["compress"];

$viewSource = !isset($_REQUEST["viewSource"]) || strtolower($_REQUEST["viewSource"]) == "false" || $_REQUEST["viewSource"] === 0 ? false : true;

header("Cache-Control: no-cache, no-store, max-age=0, must-revalidate");
header("Pragma: no-cache");
$code = do_merge($version, $src, $nobase, $compress, $viewSource);
if ($viewSource || $compress == "source") {
	$code = preg_replace("/\/\/ Copy.*?\/\/ limitations under the License\.?/msi", "", $code);
	$code = preg_replace("/\/\*\s*\*\s*Tangram.*?\*\/\n*/msi", "", $code);
	$copyright = 
<<<COPYRIGHT
// Copyright (c) 2009, Baidu Inc. All rights reserved.
// 
// Licensed under the BSD License
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http:// tangram.baidu.com/license.html
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

COPYRIGHT;
	$code = $copyright.$code;	
}
if ($viewSource){
	header('Content-Type: text/html; charset=UTF-8');
	echo '<html><head></head><body onload="sh_highlightDocument(\'assest/\', \'.js\');"><pre class="sh_javascript">';
	echo $code;
	echo '</pre><script src="assest/sh_main.min.js"></script><link rel="stylesheet" href="assest/sh_style.css"></body></html>';
} else {
	header('Content-Type: text/javascript; charset=UTF-8');
	header("Content-Disposition: attachment; filename=\"tangram.js\"");
	echo ($compress == "source" ? "" : "/* Copyright (c) 2010 Baidu  Licensed under the BSD License */\n") . $code;
}

?>
