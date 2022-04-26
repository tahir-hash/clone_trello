<?php
///Recuperation des donnees du fichier
function json_to_array(string $key):array
{
    $dataJson=file_get_contents(PATH_DB);
    $data=json_decode($dataJson,true);
    return $data[$key];
}
function json_to_array_all():array
{
    $dataJson=file_get_contents(PATH_DB);
    $data=json_decode($dataJson,true);
    return $data;
}
//Enregistrement et Mis a jour des donnees du fichier
function array_to_json(string $key, array $array_data)
{
    $array=json_to_array_all();
    $array[$key][]=$array_data;
    $json=json_encode($array,JSON_PRETTY_PRINT);
    file_put_contents(PATH_DB, $json);
}