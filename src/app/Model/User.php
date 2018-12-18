<?php

namespace App\Model;

use \Engine\Model\Db;

class User {

    public static function new ($data) {
        Db::getInstance()
            ->prepare(
                'INSERT INTO users (username, password, create_at) VALUES (:username, :pw, now())')
            ->bind(':username', $data->username)
            ->bind(':pw', $data->pw)
            ->execute();
    }

    public static function update ($data) {

        Db::getInstance()
            ->prepare(
                'UPDATE users SET username = :username, password = :pw WHERE id = :id')
            ->bind(':id', $data->id)
            ->bind(':username', $data->username)
            ->bind(':pw', $data->pw)
            ->execute();
    }

    public static function delete ($id) {

        Db::getInstance()
            ->prepare('DELETE FROM users WHERE id = :id')
            ->bind(':id', $id)
            ->execute();

        // Reset id incrementation
        $lastId = self::getLastId();
        if (is_null($lastId)) {
            Db::getInstance()
                ->query('ALTER TABLE users AUTO_INCREMENT = 1')
                ->execute();
        }
    }

    public static function get ($id) {

        $data = Db::getInstance()
            ->prepare('SELECT * FROM users WHERE id = :id')
            ->bind(':id', $id)
            ->execute('fetch');

        return $data;
    }
}
