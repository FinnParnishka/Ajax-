<?php
$post=$_POST;
$x=$post['x'];
$y=$post['y'];
$exp=$post['exp'];


if ($post['exp']) {
$exp=str_replace(",", '.', $exp);
$exp=trim($exp);
$exp=str_replace(" ", "", $exp);
$exp=str_replace("x", $x, $exp);
$exp=str_replace("y", $y, $exp);
$exp=str_replace("^", '**', $exp);

	if (preg_match('#([A-Za-z\!\@\#\$\'\"\:\;\?])+#', $exp)){
		echo "somethingWrong";
		$exp=NULL;
	}

	if (preg_match('#[(]([0-9\*\^\-\+\%\.])+#', $exp)) {
		if (!preg_match('#([0-9\*\^\-\+\%\.])+[)]#', $exp)){
			echo "Не закрыты скобки";
			$exp=NULL;
		}
}

	if (mb_substr_count($exp, '(') != mb_substr_count($exp, ')') ) {
		echo "Не закрыты скобки";
			$exp=NULL;
}

if (!$exp == NULL) {
	eval('$ans =' .$exp .';');
	echo $ans;
}

}