<?php
class Index{
    function __construct($data=array(),$config=array()){
        $this->data=$data;
        $this->shortcut=array();
        $this->shortcutDataPath="etc/shortcut.txt";
        $this->tangramPath=isset($config['tangramPath'])?$config['tangramPath']:TANGRAM_PATH;
        $this->tangramBaseDir=$this->tangramPath.TANGRAM_BASE_DIR;
        $this->namespace=defined("TANGRAM_NAMESPACE")?TANGRAM_NAMESPACE:"baidu";
    }
    function run(){
        echo <<<EOF
start indexing.
Tangram-base path is {$this->tangramBaseDir}

EOF;
        return $this->index();
    }

    function index(){
        $modules=array("baidu.js");
        if (is_array($this->data)){
            foreach( $this->data as $item){
                $add=$this->getModules($item);
                if (!empty($add)){
                    $modules[]=$add;
                }
            }
        }
        //各模块中引用的其它模块也需要一起导入，getImports就是解析这些模块中引了哪些模块
        $imports=$this->getImports($modules);
        if (is_array($imports)){
            $modules=array_merge($imports,$modules);
        }
        return $this->sort(array_unique($modules));
    }

    //装入顺序
    function sort($files){
        $data=array();
        $res=array();
        $max=0;
        foreach ($files as $path){
            $num=count(explode("/",$path));
            $data[$num][]=$path;
            $max=$max<$num?$num:$max;
        }
        for ($i=0;$i<=$max;$i++){
            if (isset($data[$i]) && !empty($data[$i]) && is_array($data[$i])){
                $res=array_merge($res,$data[$i]);
            }
        }
        return $res;
    }

    function getImports($modules,$deep=True){
        $res=array();
        if(is_array($modules)){
            foreach($modules as $module){
                $path=$this->tangramBaseDir.$module;
                $content=@file_get_contents($path);
                if (!empty($content)){
                    $re="/\/\/\/import.*(".$this->namespace."\..*);/";
                    preg_match_all($re,$content,$matchRes);
                    if (count($matchRes)>1){
                        $add=$matchRes[1];
                        if (is_array($add)){
                            foreach($add as $item){
                                $res[]=str_replace(".","/",$item).".js";
                            }
                        }
                    }
                }
            }
        }
        
        //通过递归确保所有引入模块都已记录
        if($deep===True){
            $new=$res;
            $modules=array_unique($modules);
            $subModules=array_unique(array_merge($new,$modules));
            while(count($modules)<count($subModules)){
                $modules=$subModules;
                $new=$this->getImports($new,False);
                $res=array_merge($new,$res);
                $subModules=array_unique(array_merge($new,$subModules));
            }
        }
        return array_unique($res);
    }

    function getModules($item){
        $shortcut=$this->getShortcutSource();
        if(in_array($item,array_keys($shortcut))){
            $module=$shortcut[$item];
        }else{
            $module=str_replace(".","/",$item).".js";
        }
        return $module;
    }

    function getShortcutSource(){
        if (empty($this->shortcut)) {
            $this->shortcut=$this->getMap($this->shortcutDataPath);
            $this->specialShortcut=array(
                "baidu.g"=>"baidu/dom/g.js",
                "baidu.e"=>"baidu/element.js",
                "baidu.on"=>"baidu/event/on.js"
            );

            foreach ($this->specialShortcut as $key => $val){
                $this->shortcut[$key]=$val;
            }
        }
        return $this->shortcut;
    }
    function getMap($path){
        $res=array();
        $data=@explode("\n",file_get_contents($path));
        if (!empty($data)){
            foreach ($data as $val){
                $slice=explode(",",$val);
                for ($i=1;$i<count($slice);$i++){
                    $res[$slice[$i]]=$slice[0];
                }
            }
        }
        return $res;
    }
}
