<?php
include "FindFile.class.php";

class Csdeps{
    public $dataDir;
	public $path;
	private $tangramDoc;
	private $tangramBaseFunctions;
    public $filePath;
    function __construct($path){
        $this->dataDir="../static/data/";
		$this->path = $path;
        $this->srcPath=realpath("../src/");
        $this->source = $this->srcPath."/".$path;
		$this->tangramDoc  = realpath("../../../sandbox/doc/tangram/");
    }
	
	private function get_base_functions() {
		if ($this->tangramBaseFunctions) {
			return $this->ttangramBaseFunctions;
		}
		$findFile = new FindFile();
		$allFiles =  $findFile->Find($this->source, array("except" => "/.*\.svn.*/", "removePrefix" => $this->source));
		preg_match_all("/.*(baidu.*)\.js/", join("\n", $allFiles), $matches);
		$result = str_replace("/", ".", $matches[1]);
		return $result;
	}
	
	private function get_func($fn, $src) {
		$o = array(
			"status" => "0",
			"doc" => str_replace(".", "_", $fn) . ".html",
			"description" => $this->get_desc($fn),
			"dependencies" => array(),
			"ui_dependencies" => array()
		);
		$path = $src . "/" . str_replace(".", "/", $fn) . ".js";
		$base_fns = $this->get_base_functions();
		if (!file_exists($path)) {
			return $o;
		}
		
		$ctn = file_get_contents($path);
		preg_match_all('/\/\/\/import\ (.*);/', $ctn, $matches);
		foreach($matches[1] as $deps_func) {
			array_push($o["dependencies"], $deps_func);
			if (!in_array($deps_func, $base_fns)) {
				array_push($o["ui_dependencies"], $deps_func);
			}
		}
		return $o;
	}
	private function get_desc($fn) {
		$xmlFileName = substr($fn, 0, strrpos($fn, ".")) . ".api.xml";
		$path = $this->tangramDoc . "/" . $xmlFileName;
		$methodName = substr($fn, strrpos($fn, ".") + 1, strlen($fn));
		
		if ($xmlFileName == "baidu.api.xml") {
			$path = $this->tangramDoc . "/" . $fn . ".api.xml";
			if (file_exists($path)) {
				$xml = simplexml_load_file($path);
				return $xml->desc . "";
			} else {
				return null;
			}
		}
		
		if (!file_exists($path)) {
			return null;
		}
		
		$xml = simplexml_load_file($path);
		foreach($xml as $method) {
			if ($method->getName() == "method") {
				foreach ($method as $desc) {
					if ($desc->getName() == "desc") {
						if ($methodName == $method['name']) {
							return $desc . "";
						}
					}
				}
			}
		}
		return null;
	}
	
	public function walk_src($src) {
	
		$findFile = new FindFile();
		$allFiles =  $findFile->Find($src);
		#var_dump($allFiles);
		$packages = array();
		$functions = array();
		
		preg_match_all("/.*\.svn.*/", join("\n", $allFiles), $matches);
		$allFiles = join("\n", array_diff($allFiles, $matches[0]));
		preg_match_all("/.*(baidu\/.*)/", $allFiles, $allMatch);
		
		foreach($allMatch[1] as $singleFile) {
			preg_match("/.*(baidu.*)\/$/", $singleFile, $pkgMatch);
			if (isset($pkgMatch[1])) {
				$package = str_replace("/", ".", $pkgMatch[1]);
				$funcs = $findFile->Find(realpath($src."/".$singleFile), array(
					"noLoop" => true, 
					"except" => "/.*\.svn.*/", 
					"noDir" => true, 
					"removePrefix" => $src . "/"
				));
				$funcs = str_replace("/", ".", str_replace(".js", "", $funcs));
				array_push($packages,  array(
					"packageName" => $package,
					"functions" => $funcs
				));
			}
		}
		
		foreach($allMatch[1] as $singleFile) {
			preg_match("/.*(baidu.*).js$/", $singleFile, $funcMatch);
			if (isset($funcMatch[1])) {
				$functionName = str_replace("/", ".", $funcMatch[1]);
				$functions[$functionName] = $this->get_func($functionName, $src);
			}
		}
		
		return array(
			"packages" => $packages,
			"functions" => $functions
		);
	}
	
	public function createDeps() {
		$data = "var data = " . json_encode($this->walk_src($this->source)). ";";
		try {
			$this->filePath = $this->dataDir.$this->path.".js";
			$file_pointer = fopen($this->filePath, "w");
			fwrite($file_pointer,$data);
			fclose($file_pointer);
			return true;
		} catch(Exception $e) {
			return false;
		}
	}
}

$path=array();
$srcPath=realpath("../src/");
if (isset($_REQUEST["version"])) {
	$version = array($_REQUEST["version"]);
    $path=array("tangram_$version","tangram-component_$version");
}else{
    $files=scandir($srcPath);
    $len=sizeof($files);
    for ($i=0;$i<$len;$i++){
        if ($files[$i]!="."  &&  $files[$i]!=".." && is_dir($srcPath."/".$files[$i])){
        $path[]=$files[$i];
        }
    }
}
if (!empty($path)){
    $len=sizeof($path);
    for ($i=0;$i<$len;$i++){
        $csdeps = new Csdeps($path[$i]);
        if ($csdeps->createDeps()) {
            echo "handle>>> ".$csdeps->source." success!\n";
            echo "create>>> ".$csdeps->filePath." success!\n";
        }
    }
}else{
    echo "请将要处理的源代码放$srcPath下";
}
?>
