<?php
/**
 * tangram 源代码自动打包工具
 */
require_once('lib/handleParams.php');
require_once('lib/ui.php');
require_once('lib/parse.php');
require_once('lib/index.php');
require_once('lib/pack.php');

//默认配置
/** @constant 要被处理的源代码路径 */
define("CODE_PATH","./src/obj/");
/** @constant tangram 代码路径 */
define("TANGRAM_PATH","./src/");
/** @constant Tangram-base 所在目录 */
define("TANGRAM_BASE_DIR","tangram/");
/** @constant Tangram命名空间 */
define("TANGRAM_NAMESPACE","baidu");
/** @constant 处理的文件类型 */
define("FILETYPES",".html,.htm,.js,.tpl");
//处理传进来的参数
$param=isset($argv)?$argv:$_REQUEST;
$paramsHandler=new HandleParams($param);
$config=$paramsHandler->run();

//如果用户是通过浏览器访问，则显示web界面。否则为命令行模式
if ($config['type']=="web"){
    $uiHandler=new Ui($config);
    $uiHandler->run();
}
if (!empty($config["params"]) || $config['type']=="commandline"){
    //解析用户的源代码，提取其中调用Tangram的代码
    $parseHandler=new Parse($config);
    $parseRes=$parseHandler->run();

    //分析用户调用的tangram源代码，得到用户需要的tangram模块
    $indexHandler=new Index($parseRes,$config);
    $indexRes=$indexHandler->run();

    //将用户用到的tangram模块打包返回给用户
    $packHandler=new Pack($indexRes,$config);
    $packHandler->run();
}
