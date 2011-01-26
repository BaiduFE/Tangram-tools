<?php
include "FindFile.class.php";

class Csdeps{
	public $version;
	private $currPath;
	private $tangramSource;
	private $tangramUISource;
	private $tangramDoc;
	private $tangramBaseFunctions;
	
    function __construct($version){
		$this->currPath = dirname( __FILE__);
		$this->version = $version;
		$this->tangramSource = realpath("../source/$version/tangram/");
		$this->tangramUISource = realpath("../source/$version/tangram-component/");
		$this->tangramDoc  = realpath("../../../sandbox/doc/tangram/");
    }
	
	private function get_base_functions() {
		if ($this->tangramBaseFunctions) {
			return $this->ttangramBaseFunctions;
		}
		$findFile = new FindFile();
		$allFiles =  $findFile->Find($this->tangramSource, array("except" => "/.*\.svn.*/", "removePrefix" => $this->tangramSource));
		preg_match_all("/.*(baidu.*)\.js/", join("\n", $allFiles), $matches);
		$result = str_replace("/", ".", $matches[1]);
		return $result;
	}
	
	private function get_func($fn, $src, $is_base) {
		$o = array(
			"status" => "0",
			"doc" => str_replace(".", "_", $fn) . ".html",
			"description" => $this->get_desc($fn),
			"dependencies" => array(),
			"is_base" => $is_base ? 1 :0,
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
	
	public function walk_src($src, $is_base) {
	
		$findFile = new FindFile();
		$allFiles =  $findFile->Find($src);
		
		$packages = array();
		$functions = array();
		
		preg_match_all("/.*\.svn.*/", join("\n", $allFiles), $matches);
		$allFiles = join("\n", array_diff($allFiles, $matches[0]));
		preg_match_all("/.*(baidu\/.*)/", $allFiles, $allMatch);
		
		foreach($allMatch[1] as $singleFile) {
			preg_match("/.*(baidu.*)\/$/", $singleFile, $pkgMatch);
			if ($pkgMatch[1]) {
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
			if ($funcMatch[1]) {
				$functionName = str_replace("/", ".", $funcMatch[1]);
				$functions[$functionName] = $this->get_func($functionName, $src, $is_base);
			}
		}
		
		return array(
			"packages" => $packages,
			"functions" => $functions
		);
	}
	
	public function createDeps() {
		$data = "var data = " . json_encode($this->walk_src($this->tangramSource, true)). ";";
		$data .= "var dataUI = " . json_encode($this->walk_src($this->tangramUISource, true)) . ";";
		try {
			$filePath = "csdeps_{$this->version}.js";
			$file_pointer = fopen($filePath, "w");
			fwrite($file_pointer,$data);
			fclose($file_pointer);
			return true;
		} catch(Exception $e) {
			return false;
		}
	}
}

if (isset($_REQUEST["version"])) {
	$version = $_REQUEST["version"];
	$csdeps = new Csdeps($version);
	if ($csdeps->createDeps()) {
		echo "create csdeps_$version.js success!";
	}
} else {
	$stable = new Csdeps("stable");
	$nightly = new Csdeps("nightly");
	if ($stable->createDeps() && $nightly->createDeps()) {
		echo "create csdeps_nightly.js & csdeps_stable.js success!";
	}
}
?>
