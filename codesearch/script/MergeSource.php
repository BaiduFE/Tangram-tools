<?php

define("MY_DIR", realpath("../src/"));

class MergeSource {
	private $patten = "/\/\/\/\s*import\s+([^;]+);*/";
	private $mergedCode = array();
	
	public $version;
	public $src;
	public $project;
	public $nobase;
	
    public function __construct(){
    }
	
	public function merge($version, $src, $project, $nobase) {
		$this->version = $version;
		$this->src = $src;
		$this->project = $project;
		$this->nobase = $nobase;
		return preg_replace_callback($this->patten, array($this, 'mergeCallback'), $src);
	}
	
	public function mergeCallback($match) {
		$module = trim($match[1]);
		
		if (!$this->mergedCode[$module]) {
			$this->mergedCode[$module] = true;
			$module = str_replace(".", "/", $module) . ".js";
			
			$filePath = $this->filePathJoin(MY_DIR, $this->version, $this->project, $module);
			$subfolder = file_exists($filePath) ? $this->project : 'tangram';
			if ($this->nobase && $subfolder == 'tangram') {
				return "/* BASE: $module */";
			}
			
			$realpath = $this->filePathJoin(MY_DIR, $this->version, $subfolder, $module);
			if (!file_exists($realpath)) {
				return "//NOT found $module \n";
			}
			
			return $this->mergeFile($realpath);			
		}
	}
	
	public function mergeFile($file) {
		return preg_replace_callback($this->patten, array($this, "mergeCallback"), file_get_contents($file));
	}
	
	public function filePathJoin() {
		$arr = func_get_args();
		return implode(DIRECTORY_SEPARATOR, $arr);
	}

}	
?>
