<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phonenumber"];
    $email = $_POST["email"];
    $comments = $_POST["comments"];

    // Validate the data if needed

    // Define the path to the text file
    $file_path = "data/contact_data.txt";

    // Open the file for writing (use "a" to append instead of "w" to overwrite)
    $file = fopen($file_path, "a");

    // Write the data to the file
    fwrite($file, "Name: $name\n");
    fwrite($file, "Phone: $phone\n");
    fwrite($file, "Email: $email\n");
    fwrite($file, "Comments: $comments\n");
    fwrite($file, "------------------------\n");

    // Close the file
    fclose($file);

    // Redirect to the thank you page or any other page
    header("Location: thankyou.html");
    exit();
}
?>
