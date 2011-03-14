<?php


class FindFile{

    function __construct(){
    }
	private $options;
    function Find($path, $options = array()){
        $this->findResult = array();
		$this->options = $options;
        self::_Find($path);
        return $this->findResult;
    }
	
    private function _Find($path) {
        $path = realpath($path) . DIRECTORY_SEPARATOR;
        $matches = Array();
        $entries = Array();
        $dir = dir($path);
        while (false !== ($entry = $dir->read())) {
            $entries[] = $entry;
        }
        $dir->close();
        foreach ($entries as $entry) {
            $except=null;
            $fullname = $path . $entry;
			if (isset($this->options['except']) && $this->options['except']) {
				$except = preg_match($this->options['except'], $entry);
			}
			if (!isset($except) || !$except) {
				if ((!isset($this->options['noDir']) || !$this->options['noDir'] )&& $entry != '.' && $entry != '..' && is_dir($fullname)) {
					self::GatherResult($fullname.DIRECTORY_SEPARATOR);
					
					if (!isset($this->options['noLoop']) || !$this->options['noLoop']) {
						self::_Find($fullname);
					}
				} else if (is_file($fullname) && (!isset($this->options['noFile']) ||!$this->options["pattern"] || preg_match($this->options["pattern"], $entry))) {
					if (!isset($this->options['noFile']) || !$this->options['noFile']) {
						self::GatherResult($fullname);
					}
				}
			}
        }
    }

    private function GatherResult($name){
        $len=isset($this->options["removePrefix"])?strlen($this->options["removePrefix"]):null;
        $this->findResult[] = substr($name,$len);
    }


};



?>
