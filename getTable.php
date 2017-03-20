<?php
$q = $_POST["database"];

$mysqli = new mysqli("localhost","game_admin","zhuyst","game");
if (mysqli_connect_errno())
{
    die('Could not connect: ' . mysqli_connect_error());
}

$sql = "SHOW TABLES FROM " . $q . "";
$tables = $mysqli->query($sql);

echo "<select name=\"tables\" onchange=\"showTableMsg(this.value)\">";
echo "<option value=\"\" selected=\"selected\">未选择</option>";
while($row = $tables->fetch_assoc())
{
    echo "<option value=\"" . $row["Tables_in_game"] . "\">" . $row["Tables_in_game"] . "</option>";
}
echo "</select>";
mysqli_free_result($tables);

$mysqli->close();
?>