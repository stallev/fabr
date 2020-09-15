<?php
	function ReHashGoal($side) {
		if ($side == 1) return "Обратный звонок";
		elseif ($side == 2) return "Заказ товара месяца";
		elseif ($side == 3) return "Заказ из каталога";
		elseif ($side == 4) return "Акция";
		elseif ($side == 5) return "Сотрудничество";
		elseif ($side == 6) return "Обратный звонок";
		return "не установлена";
	}
	
	function SendMeCallBack($phone, $side) {
		global $domainname;
		date_default_timezone_set('Europe/Minsk');
		$date = date('d.m.Y H:i:s');
		$email = "marketing@alterweb.by";
		$from = "info@itd.by";
		$subject = "Заказ на сайте dezha.itd.by";
		$headers = "From: itd.by <$from>\r\nContent-type: text/html; chatset=utf-8\r\n";
		$message = '
		<span style="color:#4B3939;"><b>Поступила заявка с веб-сайта <span style="color:#AB2655;">dezha.itd.by</span></b><br><br>
		<span style="color:#555555;"><i>Дата заяки:</i></span> '.$date.'<br><br>
		<span style="color:#b98f9a;">———</span><br><br>
		<span style="color:#555555;"><i>Цель:</i></span> '.ReHashGoal($side).'<br>
		<span style="color:#555555;"><i>Номер телефона:</i></span> +'.$phone.'</span><br><br>
		<span style="color:#b98f9a;">———</span><br><br>
		<small style="color:#999999;">Powered by <a href="//alterweb.by" style="color:#cc1155;">AlterWEB</a></small>';
		mail($email, $subject, $message, $headers);
		return true;
	}
	
	
	// begin
	
	$phone = mb_substr(htmlspecialchars(strip_tags($_POST["p"]), ENT_QUOTES), 0, 30, 'UTF-8');
	$side = intval(mb_substr(htmlspecialchars(strip_tags($_POST["side"]), ENT_QUOTES), 0, 1, 'UTF-8'));
	
	if (mb_strlen($phone, 'UTF-8') > 0) {
		SendMeCallBack($phone, $side);
		echo 'ok';
	}
	else echo 'denied';
	exit;
?>