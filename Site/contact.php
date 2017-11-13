<!DOCTYPE html>
<html lang="en-US">

<?php include 'head.php' ?>

<body>

    <header class="head">
        <?php include 'navbar.php'; ?>
    </header>
    <main class="main_section">
        <header>
            <h1>Contact</h1>
        </header>
        <article>
            <form action="nyi.php" method="POST" class="contact-form" id="contact_form">
                <input type="email" name="email" placeholder="Your e-mail adress"id="contact_email">
                <div class="form-names">
                    <input type="text" name="firstname" placeholder="Firstname" id="contact_firstname">
                    <input type="text" name="lastname" placeholder="Surname" id="contact_lastname">
                </div>
                <textarea name="message"  cols="30" rows="10" placeholder="Your message" id="contact_message"></textarea>
                <div class="bottom">
                    <p id="errormsg"></p>
                    <input type="submit" value="SEND" id="btn">
                </div>
            </form>
        </article>
        <aside>
            <img src="img/annie-spratt-42459.jpg" alt="About us">
            <p>
                Other contact information:
                <br><br>
                Mail: support@froken.com
                <br><br>
                Tlf: (+47) 123 45 678
            </p>
        </aside>
    </main>
    <footer class="main_footer">
        <p>&copy; SØTAA - Group 37, 2017</p>
    </footer>
    <script src="JS/checkForm.js"></script>
</body>

</html>