<?php

	$jarPath = dirname( __FILE__) . DIRECTORY_SEPARATOR . "yuicompressor-2.4.2.jar";
	
	$tempFile = dirname( __FILE__) . DIRECTORY_SEPARATOR . time();
	$file_pointer = fopen($tempFile, "a");
	fwrite($file_pointer,$_POST["code"]);
	fclose($file_pointer);
	
	$cmd = "java -jar $jarPath $tempFile --charset UTF-8 --type js";
	exec($cmd . ' 2>&1', $raw_output);
	$code = implode("\n", $raw_output);
	unlink($tempFile);
	
	echo $code;

?>
