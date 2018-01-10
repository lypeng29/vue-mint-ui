<?php
header('content-type:application:json;charset=utf8');  
header('Access-Control-Allow-Origin:*');  
header('Access-Control-Allow-Methods:GET,POST');  
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
//options请求直接退出
if( strtoupper($_SERVER['REQUEST_METHOD']) == 'OPTIONS' ){
    exit();
}
//数据库配置
$dbarr=array(
    'host' => 'localhost',
    'user' => 'root',
    'pass' => 'root',
    'dbname' => '',

);
function logs($word, $file='data.txt') {
    $fp = fopen($file,"a");
    flock($fp, LOCK_EX) ;
    fwrite($fp, var_export($word, true));
    flock($fp, LOCK_UN);
    fclose($fp);
}
$act = !empty($_GET['act']) ? trim($_GET['act']) : '';
if(empty($act)){
    exit();
}
switch ($act) {
    case 'add':
        add();
        break;
    case 'get':
        get();
        break;
        
    default:
        
        break;
}
function add(){
    $d = file_get_contents('php://input');
    logs($d.',');
    echo 1;
}
function get(){
    echo 888;
}

?>