<?php
if(isset($_REQUEST['controller']) )
{
    switch ($_REQUEST['controller']) 
    {
    case "tache" :
    require_once(PATH_SRC."controllers".DIRECTORY_SEPARATOR."tache.controllers.php");
    break;
    }
}