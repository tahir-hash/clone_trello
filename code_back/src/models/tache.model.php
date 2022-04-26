<?php
function add_task($date, array $column, $nbr_col)
{
    $put=array(
            'date_save' => $date,
            'column' => $column,
            'nbr_col'=>$nbr_col
            );
                array_to_json("save_task",$put);
}
function find_task():array
{
    $tasks=json_to_array("save_task");
    $result =[];
    foreach ($tasks as $task) 
    {
            $result[]=$task;
    }
    return $result;
}