<?php

namespace App\Http\Resources;
use App\Models\User;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Collection;

class LessonsResource extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => LessonResource::collection($this->collection),
        ];
    }
    // public function with($request)
    // {
    //     $authors  = $this->collection->map(
    //         function ($lesson) {
    //             return $lesson->author;
    //         }
    //     );
    //     return [
    //         'links'    => [
    //             'self' => route('lessons.index'),
    //         ],
    //         'included' => $this->withIncluded($authors),
    //     ];
    // }
    // private function withIncluded(Collection $included)
    // {
    //     return $included->map(
    //         function ($include) {
    //             if ($include instanceof User) {
    //                 return new UserResource($include);
    //             }
    //         }
    //     );
    // }
}
