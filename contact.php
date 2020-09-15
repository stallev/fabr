<?php
$post = (!empty($_POST)) ? true : false;

if ($post)
{
    $phone = htmlspecialchars($_POST["phone"]);
    $error = '';

    
    $subject = "Новая заявка с сайта domain.name";
    $subject1 = "=?utf-8?b?" . base64_encode($subject) . "?=";
    /*
    $message ="\n\nСообщение: ".$message."\n\nИмя: " .$name."\n\nТелефон: ".$tel."\n\n";
    */
    $message1 = "\n\nТелефон: " . $phone;

    $header = "Content-Type: text/plain; charset=utf-8\n";

    $header .= "From: Новая заявка <example@gmail.com>\n\n";
    $mail = mail("stallev@gmail.com", $subject1, iconv('utf-8', 'windows-1251', $message1) , iconv('utf-8', 'windows-1251', $header));

    if ($mail)
    {
        echo 'OK';
    }
    else{
      echo 'Error'
    }

}
?>