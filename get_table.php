<?php
$q=$_POST["table"];

$mysqli = new mysqli("localhost","game_admin","zhuyst","game");
if (mysqli_connect_errno())
{
    die('Could not connect: ' . mysqli_connect_error());
}

$sql = "SHOW FIELDS FROM " . $q . "";
$field = $mysqli->query($sql);

echo "<table border='1' align='center' cellpadding='5'>";
echo "<tr>";
$length = 0;
while($row = $field->fetch_assoc())
{
    $field_array[$length] = $row['Field'];
    echo "<th>" . $field_array[$length] . "</th>";
    $length++;
}
echo "</tr>";
mysqli_free_result($field);

$sql = "SELECT * FROM " . $q . "";
$result = $mysqli->query($sql);

while($row = $result->fetch_assoc())
{
    echo "<tr>";
    for($i = 0;$i < $length; $i++)
    {
        echo "<td>" . $row[$field_array[$i]] . "</td>";
    }
    echo "</tr>";
}
echo "</table>";
mysqli_free_result($result);

$mysqli->close();
?>