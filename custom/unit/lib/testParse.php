<?php
require_once("../../lib/parse.php");
define("TANGRAM_PATH","../../src/tangram/");
define("CODE_PATH","../../src/obj/");
define("TANGRAM_PREFIX","baidu");
$obj=new Parse(array(
    "params"=>array(
    )));
$obj->run();
