<?php
$pictures = scandir('../img/myWorks', 1);
$picture = array();
foreach ($pictures as $value) {
    array_push($picture, $value);
}
foreach ($picture as $value) {
   echo $value;
}
?>
