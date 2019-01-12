<?php require './calc.php' ?>
<!DOCTYPE html>
<html>
<head>
	<title>Калькулятор Ajax</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="./style.css">
	<script src="jquery-3.3.1.min.js"></script>
	<script src="script.js"></script>
</head>
<body>
  <div id="calc">
      <label>Введите Первое число(x): </label><br>
      <input type="text" name="x" id="x" class="enter"  value=""><br>

      <label>Введите Второе число(y): </label><br>
      <input type="text" name="y" id="y" class="enter"  value=""><br>

      <label>Введите формулу: </label><br>
      <input type="text" name="exp" id="exp" value=""><br>

      <input type="submit" name="ok" id="ok"><br>
      <h2 class="hide">ОТВЕТ:</h2>
    <input type="text" id="result" class="hide">
  </div>
</body>
</html>