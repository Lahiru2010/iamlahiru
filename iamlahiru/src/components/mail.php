<?php
header('Access-Control-Allow-Headers: Content-Type');



$to_email = 'lahiru.cntr@gmail.com';

$name = "AAAA";
$subject = "AA Solutions";
$message = "testing a message";
$email = "lahiru.cntr@gmail.com";


$_POST = json_decode(file_get_contents("php://input"),true);
    echo $_POST['name'];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

  $headers .= "Reply-To: The Sender <".$email.">\r\n"; 
  $headers .= "Return-Path: The Sender ".$email."\r\n"; 
  $headers .= "From: \r".$name." ".$email;  
//   $headers .= "Organization: ".$name."\r\n";
  $headers .= "MIME-Version: \r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "X-Priority: 3\r\n";
  $headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;


mail("lahiru.cntr@gmail.com", $subject, $message, $headers); 

?>