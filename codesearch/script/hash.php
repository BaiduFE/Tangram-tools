<?php

$hash = $_REQUEST["hash"];
$isAdd = $_REQUEST["type"] == "add" ? true : false;
$data = $_REQUEST["data"];

$filePath = dirname( __FILE__) . "/hash/" . $hash;
if ($isAdd && !file_exists($filePath)) {
	$file_pointer = fopen($filePath, "w");
	fwrite($file_pointer,$data);
	fclose($file_pointer);
}

if (!$isAdd) {
	echo file_get_contents($filePath);
}



?>
