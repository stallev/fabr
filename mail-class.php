<?php
  if (isset($_POST["phone"]) && isset($_POST["flag"])) { 

    // Формируем массив для JSON ответа
      $result = array(
        'phone' => $_POST["phone"],
        'flag' => $_POST["flag"]
      ); 
      $number  = $result['phone'];
      $to      = 'stallev@example.com';
      $subject = 'Заявка с сайта';
      $message = 'Перезвоните по номеру ' . $number;
      mail($to, $subject, $message);
     
  }
?>