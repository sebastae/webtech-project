<?php
  if(!isset($_GET['pg']))  //Check if $_GET['pg'] don´t contain a value
    $pg = 'page_front';           //If false: give var $pg value 'page'
  else
    $pg = $_GET['pg'];      //If $_GET['pg'] contains a value --> Give var $get the ontent of $_GET['pg']

  if($pg == 'page_front') include('pages/page_front.php');
  if($pg == 'page_gallery') include('pages/page_gallery.php');
  if($pg == 'page_about') include('pages/page_about.php');
  if($pg == 'page_contact') include('pages/page_contact.php');

?>