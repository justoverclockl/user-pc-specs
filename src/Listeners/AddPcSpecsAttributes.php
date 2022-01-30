<?php

namespace Justoverclock\UserPcSpecs\Listeners;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

class AddPcSpecsAttributes
{
    public function __invoke(UserSerializer $serializer, User $user, array $attributes): array
    {
        $actor = $serializer->getActor();

        $attributes['cpu'] = $user->cpu;
        $attributes['motherboard'] = $user->motherboard;
        $attributes['ram'] = $user->ram;
        $attributes['gpu'] = $user->gpu;
        $attributes['storage'] = $user->storage;
        $attributes['cabinet'] = $user->cabinet;
        $attributes['operating_system'] = $user->operating_system;

        return $attributes;
    }
}
