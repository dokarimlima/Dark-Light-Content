import { TASK_PRIORITY_CLASS_MAP, TASK_PRIORITY_TEXT_MAP, TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constant";
import { Link } from "@inertiajs/react";
export default function TaskTable({tasks}){
    return(
        <>
            {tasks.data.map((task)=>(
                <tr key={task.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-3 py-2">{task.id}</td>
                    <td className="px-3 py-2">
                        <img src={task.imagePath} className="w-6 h-6 object-cover rounded"/>
                        </td>
                    <td className="px-3 py-2">{task.name}</td>
                    <td className="px-3 py-2">{task.description}</td>
                    <td className={`px-3 py-2`}>
                        <span className={`p-1 ${TASK_PRIORITY_CLASS_MAP[task.priority]}`}>
                            {TASK_PRIORITY_TEXT_MAP[task.priority]}
                        </span>
                    </td>
                    <td className="px-3 py-2">
                        <span className={`py-1 px-2 rounded ${TASK_STATUS_CLASS_MAP[task.status]}`}>
                        {TASK_STATUS_TEXT_MAP[task.status]}
                        </span>
                    </td>
                    <td className="px-3 py-2">{task.createdAt}</td>
                    <td className="px-3 py-2 text-nowrap">{task.dueDate}</td>
                    <td className="px-3 py-2">{task.createdBy.name}</td>
                    <td className="px-3 py-2">
                        <Link href={route("task.edit", task.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                            Edit
                        </Link>
                        <button
                            onClick={(e)=>deletedTask(tasks)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">
                            Delete
                        </button>
                    </td>
                </tr>

            ))}
        </>
    )
}
