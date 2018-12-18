# Penryn Starter

A starter kit for web development.

## Installation

    $ update docker-compose db environnement
    $ rename App/Config/Database_.php to App/Config/Database.php
    $ docker-compose up
    $ yarn

## Usage

    $ yarn run dev
    $ yarn run prod

## Features

* [Docker](https://www.docker.com)
* [Browsersync](https://browsersync.io)
* [PHP 7.3.0](https://hub.docker.com/_/php)
* [MySQL](https://hub.docker.com/_/mysql)
* [Adminer](https://hub.docker.com/_/adminer)
* [PostCSS](http://postcss.org)
* [Css Nano](https://github.com/ben-eb/cssnano)
* [ESLint](https://eslint.org)
* [Rollup](https://rollupjs.org)
* [Uglify JS 3](https://github.com/mishoo/UglifyJS2)
* [@ariiiman/s](https://github.com/ariiiman/s)

## BDD Fast startup with backend
Go to Adminer GUI, (localhost:8080, docker-compose.yml settings)

SQL :

```
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO users (username, password, created_at) VALUES ('admin', 'password', now())
```

Change App/Config/Database.php according to docker-compose.yml config
