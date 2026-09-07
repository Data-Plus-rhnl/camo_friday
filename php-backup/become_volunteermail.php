<?php
 
function sanitize_my_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}
if(isset($_POST))
{
    $to_email = 'camofridays@gmail.com';
    $subject = 'Become Volunteer Information';
    $message = 'Here is the following details: <br/>';
    $message .= 'Full Name: '.$_POST['full_name']."<br/>";
    $message .= 'Phone Number: '.$_POST['phone_number']."<br/>";
    $message .= 'Email: '.$_POST['email']."<br/>";
    $message .= 'Address: '.$_POST['address']."<br/>";
    $message .= 'Message: '.$_POST['message']."<br/>";
    $headers = "From: Camofridays Contact <sender@camofridays.com>\r\n";
    $headers .= "Reply-To: sender@camofridays.com\r\n";
    $headers .= "Return-Path: sender@camofridays.com\r\n";
     
     $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

     
    //check if the email address is invalid $secure_check
    $secure_check = sanitize_my_email($to_email);
    if ($secure_check == false) {
        echo json_encode(array('success'=>false,'message'=>'Sorry some problem occurs please try again !')); die;
    } else { //send email 
        mail($to_email, $subject, $message, $headers);
        echo json_encode(array('success'=>true,'message'=>'We will contact you soon !')); die;
    }
}
 
?>