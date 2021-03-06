FROM php:7.3.0-apache

MAINTAINER Aristide Benoist

RUN docker-php-ext-install \
    mysqli \
    pdo \
    pdo_mysql

RUN a2enmod rewrite

ADD . /var/www/html
