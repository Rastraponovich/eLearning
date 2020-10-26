<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lessons extends Model
{
    use HasFactory;

    protected $table = "Lessons";
    protected $primaryKey = "id";
    
    protected $fillable = [
        'title',
        'content',
        'image',
        'published',
        'description',
        'price',
    ];
}
