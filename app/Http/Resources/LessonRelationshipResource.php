<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LessonRelationshipResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'author'   => [
                'links' => [
                    'self'    => route('lessons.relationships.author', ['lesson' => $this->id]),
                    'related' => route('lessons.author', ['lesson' => $this->id]),
                ],
                'data'  => new AuthorIdentifierResource($this->author),
            ],
        ];
    }
    public function with($request)
    {
        return [
            'links' => [
                'self' => route('lessons.index'),
            ],
        ];
    }
}
