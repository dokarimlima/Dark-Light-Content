<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class TaskResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'createdAt' => (new Carbon($this->created_at))->format('Y-m-d'),
            'dueDate' => (new Carbon($this->due_date))->format('Y-m-d'),
            'status' => $this->status,
            'priority' => $this->priority,
            'imagePath' => $this->image_path && !(str_starts_with($this->image_path, 'http')) ?
                Storage::url($this->image_path) : '',
            'projectId' => $this->project_id,
            'project' => new ProjectResource($this->project),
            'assignedUserId' => $this->assigned_user_id,
            'assignedUser' => $this->assignedUser ? new UserResource($this->assignedUser) : null,
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy),
        ];

        // return [
        //     'id' => $this->id,
        //     'name' => $this->name,
        //     'description' => $this->description,
        //     'imagePath' => $this->image_path,
        //     'status' => $this->status,
        //     'priority' => $this->priority,
        //     'dueDate' => (new Carbon($this->due_date))->format('d-m-Y'),
        //     'assignedUser' => $this->assignedUser ? new UserResource($this->assignedUser) : null,
        //     'createdBy' => $this->createdBy ? new UserResource($this->createdBy) : null,
        //     'updatedBy' => $this->updatedBy ? new UserResource($this->updatedBy) : null,
        //     'project' => new ProjectResource($this->project),
        //     'createdAt' => (new Carbon($this->created_at))->format('d-m-Y'),
        //     'updatedAt' => (new Carbon($this->updated_at))->format('d-m-Y')
        // ];
    }
}
