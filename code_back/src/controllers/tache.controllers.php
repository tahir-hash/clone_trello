<?php
require_once(PATH_SRC."models".DIRECTORY_SEPARATOR."tache.model.php");
/**
* Traitement des Requetes POST
*/
if($_SERVER['REQUEST_METHOD']=="POST")
{
        if($_REQUEST['action']=="send")
        {
            $date=$_POST['date'];
            $object=$_POST['object'];
            $nbr_col=$_POST['numb_col'];

            $json=json_decode($object, true);
            var_dump($json);

            add_task($date,$json,$nbr_col) ;
        }
}

/**
* Traitement des Requetes GET
*/
if($_SERVER['REQUEST_METHOD']=="GET")
{
        if($_REQUEST['action']=="lister")
        {
                $data=find_task();
                $data=end($data);
                $json = json_encode($data, JSON_PRETTY_PRINT);
                echo $json;
               // var_dump($json);
        }
        elseif($_REQUEST['action']=="restore")
        {
                $data=find_task();
                $json = json_encode($data, JSON_PRETTY_PRINT);
                echo $json;
        }
}

