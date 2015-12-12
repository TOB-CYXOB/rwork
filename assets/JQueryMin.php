<?php

namespace app\assets;

use yii\web\AssetBundle;
use yii\web\View;

class JQueryMin extends AssetBundle
{
public $sourcePath = '@webroot/js';
public $js = [
'jquery.min.js',
];
public $jsOptions = [
'position' => View::POS_HEAD,
];
}
