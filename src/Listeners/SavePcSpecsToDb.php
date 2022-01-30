<?php

namespace Justoverclock\UserPcSpecs\Listeners;

use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

class SavePcSpecsToDb
{
    public function handle(Saving $event)
    {
        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $isSelf = $actor->id === $user->id;
        $canEdit = $actor->can('edit', $user);
        $attributes = Arr::get($data, 'attributes', []);

        resolve('log')->debug(json_encode($attributes));

        if (isset($attributes['cpu'])) {
            if (!$isSelf) {
                $actor->assertPermission($canEdit);
            }
            $user->cpu = $attributes['cpu'];
        }
        if (isset($attributes['motherboard'])) {
            if (!$isSelf) {
                $actor->assertPermission($canEdit);
            }
            $user->motherboard = $attributes['motherboard'];

        }
        if (isset($attributes['ram'])) {
            if (!$isSelf) {
                $actor->assertPermission($canEdit);
            }
            $user->ram = $attributes['ram'];

        }
        if (isset($attributes['gpu'])) {
            if (!$isSelf) {
                $actor->assertPermission($canEdit);
            }
            $user->gpu = $attributes['gpu'];

        }
        if (isset($attributes['storage'])) {
            if (!$isSelf) {
                $actor->assertPermission($canEdit);
            }
            $user->storage = $attributes['storage'];

        }
        if (isset($attributes['cabinet'])) {
            if (!$isSelf) {
                $actor->assertPermission($canEdit);
            }
            $user->cabinet = $attributes['cabinet'];

        }
        if (isset($attributes['operating_system'])) {
            if (!$isSelf) {
                $actor->assertPermission($canEdit);
            }
            $user->operating_system = $attributes['operating_system'];

        }
    }
}
