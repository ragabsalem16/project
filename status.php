<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $status = $_POST['led'];
    file_put_contents("status.json", json_encode(["led" => $status]));
    echo "تم الحفظ";
} else {
    echo file_get_contents("status.json");
}
?>
