<?php
// Check for empty fields
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message'])||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
echo "No arguments Provided!";
return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// Create the email and send the message
$to = '1150434@isep.ipp.pt';
$email_subject = "Fall Stack Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.nn"."Here are the details:nnName: $namennEmail: $email_addressnnMessage:n$message";
$headers = "From: info@nei-isep.org\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>