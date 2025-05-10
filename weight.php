<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    file_put_contents("weight.json", json_encode(["weight" => 1]));
    echo "تم التحديث";
} else {
    echo file_get_contents("weight.json");
}
