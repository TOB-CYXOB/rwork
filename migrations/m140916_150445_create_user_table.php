<?php

use yii\db\Schema;
use yii\db\Migration;

class m140916_150445_create_user_table extends Migration
{
    public function up()
    {
        $tableOptions = null;

        $this->execute("CREATE TABLE {{user}} (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `company_id` bigint(20) NOT NULL DEFAULT '0',
  `role` enum('user','company','manager','admin') NOT NULL DEFAULT 'user',
  `auth_key` varchar(32) DEFAULT NULL,
  `email_confirm_token` varchar(64) DEFAULT NULL,
  `password_hash` varchar(64) NOT NULL,
  `password_reset_token` varchar(64) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `lastvisit_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `idx_user_username` (`username`),
  KEY `idx_user_email` (`email`),
  KEY `idx_user_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8");

    }

    public function down()
    {
       $this->dropTable('{{user}}');
    }
}
