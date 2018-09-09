<!doctype html>
<html lang="en">
    <head itemscope>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="canonical" href="<?= $this->head['url']; ?>">
        <!-- Robots -->
        <meta name="robots" content="<?= $this->head['robots']; ?>">
        <!-- Device -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=no">
        <meta name="format-detection" content="telephone=no">
        <!-- SEO -->
        <title><?= $this->head['title']; ?></title>
        <meta name="description" content="<?= $this->head['description']; ?>">
        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="<?= $this->head['twitter']['pseudo']; ?>">
        <meta name="twitter:title" content="<?= $this->head['title']; ?>">
        <meta name="twitter:description" content="<?= $this->head['description']; ?>">
        <meta name="twitter:image" content="<?= $this->head['urlBase'] . $this->head['opengraph']; ?>">
        <meta name="twitter:creator" content="<?= $this->head['twitter']['creator']; ?>">
        <!-- Google+ -->
        <meta itemprop="name" content="<?= $this->head['title']; ?>">
        <meta itemprop="description" content="<?= $this->head['description']; ?>">
        <meta itemprop="image" content="<?= $this->head['urlBase'] . $this->head['opengraph']; ?>">
        <!-- Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="<?= $this->head['url']; ?>">
        <meta property="og:title" content="<?= $this->head['title']; ?>">
        <meta property="og:description" content="<?= $this->head['description']; ?>">
        <meta property="og:image" content="<?= $this->head['urlBase'] . $this->head['opengraph']; ?>">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <!-- Favicon -->
        <!-- Link mask icon no compatible W3C → safari svg -->
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png">
        <link rel="manifest" href="/fav/site.webmanifest">
        <meta name="msapplication-TileColor" content="#000">
        <meta name="theme-color" content="#fff">
        <link rel="shortcut icon" href="/fav/favicon.ico">
        <!-- Style -->
        <!-- CSS after Typekit is better -->
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <main id="app">
            <div id="xhr">
                <?= $this->content; ?>
            </div>
            <?php include ROOT . 'app/View/common/sail.php'; ?>
            <?php include ROOT . 'app/View/common/loader.php'; ?>
        </main>
        <?php include ROOT . 'app/View/issue/updateBrowser.php'; ?>
        <?php include ROOT . 'app/View/issue/enableJavascript.php'; ?>
        <?php include ROOT . 'app/View/common/svg.php'; ?>
        <!-- Script -->
        <script src="/js/app.js"></script>
    </body>
</html>
