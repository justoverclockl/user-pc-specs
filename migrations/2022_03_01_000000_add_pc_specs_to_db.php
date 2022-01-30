<?php

use Flarum\Database\Migration;

return Migration::addColumns('users', [
    'cpu' => ['type' => 'text'],
    'motherboard' => ['type' => 'text'],
    'ram' => ['type' => 'text'],
    'gpu' => ['type' => 'text'],
    'storage' => ['type' => 'text'],
    'cabinet' => ['type' => 'text'],
    'operating_system' => ['type' => 'text'],
]);
