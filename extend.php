<?php

/*
 * This file is part of justoverclock/user-pc-specs.
 *
 * Copyright (c) 2022 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\UserPcSpecs;

use Flarum\Settings\Event\Serializing;
use Justoverclock\UserPcSpecs\Listeners\SavePcSpecsToDb;
use Justoverclock\UserPcSpecs\Listeners\AddPcSpecsAttributes;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Flarum\User\Event\Saving;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Event())
        ->listen(Saving::class, SavePcSpecsToDb::class),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(AddPcSpecsAttributes::class),

];
