<?php
class Parse{
    function __construct($config=array()){
        $this->path=defined("CODE_PATH")?CODE_PATH:"./src/obj/";
        $this->fileType=isset($config['params']['fileType'])?explode(",",$config['params']['fileType']):explode(",",FILETYPES);
        $this->namespace=defined("TANGRAM_NAMESPACE")?TANGRAM_NAMESPACE:"baidu";
    }

    function run(){
        $filetypes=implode(", ",$this->fileType);
        echo <<<EOF
Start parsing.
Parsing path is {$this->path}
Parsing filetypes are {$filetypes}.

EOF;
        return $this->handle($this->path);
    }
    
    function handle($path){
        $files=$this->filter($this->scandir($path));
        $res=$this->parse($files);
        return $res;
    }   
    
    function parse($files){
        $items=array();
        foreach($files as $key => $path){
            $content=file_get_contents($path);
            $add=$this->getSymbol($content);
            if (is_array($add)){
                $items=array_merge($add,$items);
            }
        }
        return $items;
    }

    function getSymbol($content){
        $items=array();
        $re="/[^\"](".$this->namespace."\.[^(]*)\(?[^\"]/";
        preg_match_all($re,$content,$res);
        if (count($res)>1){
            $add=$res[1];
            if (is_array($add)){
                $items=array_merge($add,$items);
            }
        }
        return array_unique($items);
    }

    function filter($files){
        foreach ($files as $key=>$path){
            if (is_dir($path)){
                unset($files[$key]);
            }else if(is_array($this->fileType) and $this->fileType[0]!=='*'){
                $ext=".".pathinfo($path, PATHINFO_EXTENSION);
                if (!in_array($ext,$this->fileType)){
                    unset($files[$key]);
                }
            }
        }
        return $files;
    }

    function scandir($dir){
        $dir=rtrim($dir,"/");
        $items = glob($dir.'/*');
        for ($i = 0; $i < count($items); $i++) {
            if (is_dir($items[$i])) {
                $add = glob($items[$i] . '/*');
                $items = array_merge($items, $add);
            }
        }
        return $items;
    }
}
