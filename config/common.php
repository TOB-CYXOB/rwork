<?php

use yii\helpers\ArrayHelper;

return [
    'name' => 'RichWork',
    'language'=>'ru-RU',
    'basePath' => dirname(__DIR__),
    'bootstrap' => [
        'log',
        'app\modules\admin\Bootstrap',
        'app\modules\user\Bootstrap',
    ],
    'modules' => [
        'admin' => [
            'class' => 'app\modules\admin\Module',
        ],
        'user' => [
            'class' => 'app\modules\user\Module',
        ],
    ],
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=u21360_rwork',
            'username' => 'u21360',
            'password' => 'bukor8'.'bevov',
            'charset' => 'utf8',
        ],

        'user' => [
            'class' => 'app\components\WebUser',
            'identityClass' => 'app\models\User',
        ],

        'urlManager' => [
            'class' => 'yii\web\UrlManager',
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                '' => 'site/index',
                '<_a:error>' => 'site/<_a>',
                '<_a:(login|logout|signup|email-confirm|password-reset-request|password-reset)>' => 'user/default/<_a>',

                '<_m:(admin|user)>/<_c:[\w\-]+>/<id:\d+>' => '<_m>/<_c>/view',
                '<_c:[\w\-]+>/<_a:[\w\-]+><id:\d+>/' => '<_c>/<_a>',
                '<_c:[\w\-]+>' => '<_c>/index',

            ],
        ],
        'authManager' => [
            'class' => 'yii\rbac\PhpManager',
            'defaultRoles' => ['user', 'admin'],
            'itemFile' => '@app/rbac/data/items.php',
            'assignmentFile' => '@app/rbac/data/assignments.php',
            'ruleFile' => '@app/rbac/data/rules.php'
        ],
        'i18n' => [
            'translations' => [
                'app' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'forceTranslation' => true,
                ],
            ],
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
        ],
        'cache' => [
            'class' => 'yii\caching\DummyCache',
        ],
        'log' => [
            'class' => 'yii\log\Dispatcher',
        ],
    ],

    'params' => [
        'adminEmail' => 'admin@rwork.ru',
        'supportEmail' => 'support@rwork.ru',
    ]
];