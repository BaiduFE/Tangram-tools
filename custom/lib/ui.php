<?php
class Ui{
    function __construct($config=array()){
        $this->path=isset($config['params']['path'])?$config['params']['path']:CODE_PATH;
        $this->source=isset($config['params']['source'])?$config['params']['source']:TANGRAM_PATH.TANGRAM_BASE_DIR;
        $this->fileType=isset($config['params']['fileType'])?$config['params']['fileType']:FILETYPES;
    }
    function run(){
        echo <<<EOT
<!doctype html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <title>Tangram  打包工具</title>
        <style>
            body{padding:20px;font-size:14px;}
            hr{margin:20px 0;}
        </style>
    </head>
    <body>
        <div id="main">
            <form name="custom" method="get">
                要处理的源代码相对路径：<input value="{$this->path}" name="path" size="28"><br>
                Tangram-base源代码相对路径：<input value="{$this->source}" name="source" size="28"><br>
                处理文件类型(*表示所有)：<input value="{$this->fileType}" name="fileType" size="28"><br>
                <input type="submit" value="运&nbsp;&nbsp;行">
            </form>
        </div> 
        <hr>
        <pre>
EOT;
    }
}
