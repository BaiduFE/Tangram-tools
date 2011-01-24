<?php
class Pack{
    function __construct($src,$config=array()){
        $this->src=$src;
        //未压缩源代码
        $this->srcPath="./out/tangram-custom-src.js";
        //yui压缩后的源代码
        $this->resultPath="./out/tangram-custom.js";
        //是否保留未压缩的源代码
        $this->saveSrc=True;
        $this->tangramPath=isset($config['tangramPath'])?$config['tangramPath']:TANGRAM_PATH;
        $this->tangramBaseDir=$this->tangramPath.TANGRAM_BASE_DIR;
    }
    function main(){
        $code=$this->merge($this->src);
        $res=$this->compress($code);
        return $this->save($res);
    }
    function merge($src){
        $code="";
        $message="";
        foreach ($src as $path){
            echo "Packing ".$path."\n";
            $fullPath=$this->tangramBaseDir.$path;
            $add=@file_get_contents($fullPath);
            if(empty($add)){
                $message.="//Not find ".$path."\n";
            }else{
                $code.=$add;
            }
        }
        return $message.$code;
    }
    function save($code){
        $fh=fopen($this->resultPath,"w");
        fwrite($fh,$code);
        fclose($fh);
        return True;
    }
    function compress($code){
        $jarPath = dirname( __FILE__) . DIRECTORY_SEPARATOR . "yuicompressor-2.4.2.jar";
        @unlink($this->srcPath);
        $file_pointer = fopen($this->srcPath, "a");
        fwrite($file_pointer,$code);
        fclose($file_pointer);
        $cmd = "java -jar $jarPath $this->srcPath --charset UTF-8 --type js";
        exec($cmd . ' 2>&1', $raw_output);
        $code = implode("\n", $raw_output);
        if ($this->saveSrc){
            echo "No compress source path:".$this->srcPath."\n";
        }else{
            unlink($this->srcPath);
        }
        return $code;
    }
    function run(){
        echo "start packing.\n";
        $res=$this->main();
        if($res){
            echo "Compress source path:".$this->resultPath;
            echo "  Size:".filesize($this->resultPath)." bytes\n";
        }else{
            echo "Pack code failed!";
        }
    }
}
