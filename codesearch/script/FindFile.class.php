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
            $fullname = $path . $entry;
			if ($this->options['except']) {
				$except = preg_match($this->options['except'], $entry);
			}
			if (!$except) {
				if (!$this->options['noDir'] && $entry != '.' && $entry != '..' && is_dir($fullname)) {
					self::GatherResult($fullname.DIRECTORY_SEPARATOR);
					
					if (!$this->options['noLoop']) {
						self::_Find($fullname);
					}
				} else if (is_file($fullname) && (!$this->options["pattern"] || preg_match($this->options["pattern"], $entry))) {
					if (!$this->options['noFile']) {
						self::GatherResult($fullname);
					}
				}
			}
        }
    }

    private function GatherResult($name){
        $this->findResult[] = substr($name, strlen($this->options["removePrefix"]));
    }


};



?>
