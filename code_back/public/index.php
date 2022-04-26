<?php
/* echo '<pre>';
var_dump($_SERVER);
echo '</pre>'; */
//headers
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");
//error
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
//Demarrage de la sesion
if(session_status()==PHP_SESSION_NONE)
{
session_start();
}
//inclusion des constantes
require_once dirname(dirname(__FILE__))."/config/constantes.php";
// inclusion de l'orm
require_once dirname(dirname(__FILE__))."/config/orm.php";
//Chargement du router
require_once dirname(dirname(__FILE__))."/config/router.php";