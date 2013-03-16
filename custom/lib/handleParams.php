<?php
class HandleParams{
    public $config;
    function __construct($param){
        $this->param=$param;
    }
    
    function main(){
        if (is_null($this->param)){
            $this->config=array(
                "type"=>'web'
            );

        }else if(is_array($this->param)){
            if(isset($_SERVER['REQUEST_METHOD'])){
                $this->config=array(
                    'type'=>'web',
                    'params'=>$this->param
                );
            }else{
                $this->config=array(
                    'type'=>'commandline',
                    'params'=>$this->parseArgs($this->param)
                );
            }
        }
    }
    function run(){
        $this->main();
        return $this->config;
    }
    /**
     * parseArgs Command Line Interface (CLI) utility function.
     * @usage               $args = parseArgs($_SERVER['argv']);
     * @author              Patrick Fisher <patrick@pwfisher.com>
     * @source              https://github.com/pwfisher/CommandLine.php
     */
    public static function parseArgs($argv){
        array_shift($argv);
        $out = array();
        foreach ($argv as $arg){
            // --foo --bar=baz
            if (substr($arg,0,2) == '--'){
                $eqPos = strpos($arg,'=');
                // --foo
                if ($eqPos === false){
                    $key = substr($arg,2);
                    $value = isset($out[$key]) ? $out[$key] : true;
                    $out[$key] = $value;
                }
                // --bar=baz
                else {
                    $key = substr($arg,2,$eqPos-2);
                    $value = substr($arg,$eqPos+1);
                    $out[$key] = $value;
                }
            }
            // -k=value -abc
            else if (substr($arg,0,1) == '-'){
                // -k=value
                if (substr($arg,2,1) == '='){
                    $key = substr($arg,1,1);
                    $value = substr($arg,3);
                    $out[$key] = $value;
                }
                // -abc
                else {
                    $chars = str_split(substr($arg,1));
                    foreach ($chars as $char){
                        $key = $char;
                        $value = isset($out[$key]) ? $out[$key] : true;
                        $out[$key] = $value;
                    }
                }
            }
            // plain-arg
            else {
                $value = $arg;
                $out[] = $value;
            }
        }
        return $out;
    }
}



