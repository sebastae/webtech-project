<!DOCTYPE html>
<html lang="en-US">

<?php include 'head.php' ?>

<body>

    <header class="head">
        <?php include 'navbar.php'; ?>
    </header>
    <main class="main_section">
        <header>
            <h1>Gallery</h1>
        </header>
                    <nav class="gallerySort">
                        <p><b>Sort by&nbsp;&nbsp;&nbsp;&nbsp;:</b></p>
                        <button onclick="sortByName()">Name</button>
                        <button onclick="sortByPrice()">Price</button>
                    </nav>
        <div class="articles" id="galart" data-fr-list="articles" data-fr-template="card"></div>
    </main>
    <footer class="main_footer">
        <p>&copy; SØTAA - Group 37, 2017</p>
    </footer>
    <script src="JS/jsonload.js"></script>
    <script src="JS/sort.js"></script>
</body>
</html>