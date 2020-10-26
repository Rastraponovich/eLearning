<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LessonResource extends JsonResource
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
            'type' => 'lessons',
            'id'   => (string)$this->id,
            'attributes' => [
                'title' => $this->title,
                'content' => $this->content,
                'image' => $this->image,
                'description' => $this->description,
                'price' => $this->price,
            ],
            // 'relationships' => new LessonRelationshipResource($this),
            // 'links'         => [
            //     'self' => route('lessons.show', ['lesson' => $this->id]),
            // ],
        ];
    }
}
