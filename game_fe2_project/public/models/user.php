<?php
class User extends Db {
    //Lấy ra tất cả loại sản phẩm.
    static function getAllUsers() {
        $sql = self::$connection->prepare("SELECT * FROM users");
        $sql->execute();
        $items = array();
        $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
        return $items; //return an array.
    }

    /**____________________________________________________________________________________________________
     * THÊM User:
     */
    static function insertUser($username, $password) {
        $sql = self::$connection->prepare("INSERT INTO `users`( `username`, `password`)
        VALUES ( ?, ?)");
        $sql->bind_param("ss", $username, $password);
        return $sql->execute();
    }

    /**____________________________________________________________________________________________________
     * LOGIN
     */
    public static function login_checkUsername($username) {
        $sql = self::$connection->prepare("SELECT * FROM users WHERE username='$username'");
        $sql->execute();
        $items = array();
        $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
        return $items;
    }
    static function login_checkUsernamePassword($username, $password) {
        $sql = self::$connection->prepare("SELECT * FROM users WHERE username='$username' AND password='$password'");
        $sql->execute();
        $items = array();
        $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
        return $items;
    }
}