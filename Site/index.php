<!DOCTYPE html>
<html lang="en-US">

<?php include 'head.php' ?>

<body>

    <header class="head">
        <section class="head_bg">
            <img src="img/head_1920.jpg" class="head_bg_img" alt="">
            <img src="img/logo_wa.svg" class="head_bg_logo" href="?pg=page_front" alt="Frøken">
            <a class="scroll_to_menu_button" href="#main_navbar">
                <div class="arrow_left"></div>
                <div class="arrow_right"></div>
            </a>
        </section>
        <?php include 'navbar.php'; ?>
    </header>
    <main class="main_section">
        <header>
            <h1>Featured</h1>
        </header>
        <div class="articles" data-fr-list="featured" data-fr-template="card"></div>
    </main>
    <footer class="main_footer">
        <p>&copy; SØTAA - Group 37, 2017</p>
    </footer>
    <script src="JS/jsonload.js"></script>
</body>

</html>