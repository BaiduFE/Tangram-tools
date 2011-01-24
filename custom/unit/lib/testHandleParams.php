<?php
require_once("../../lib/handleParams.php");
$param=isset($argv)?$argv:$_REQUEST;
$h=new HandleParams($param);
var_dump($h->run());
