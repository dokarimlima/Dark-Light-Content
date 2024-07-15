import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import TaskTable from "./TaskTable";
import Pagination from "@/Components/Pagination";

export default function Index({auth, tasks}){
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Task</h2>
                    <Link href={route('task.index')} className="bg-green-500 shadow shadow-green-500/100 p-2 rounded-lg text-gray-200 font-semibold">Add New Project</Link>
                </div>
            }
        >
            <Head title="Tasks"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">Image</th>
                                        <th className="px-3 py-2">Name</th>
                                        <th className="px-3 py-2">Description</th>
                                        <th className="px-3 py-2">Priority</th>
                                        <th className="px-3 py-2">Status</th>
                                        <th className="px-3 py-2">Created Date</th>
                                        <th className="px-3 py-2">Due Date</th>
                                        <th className="px-3 py-2">Created By</th>
                                        <th className="px-3 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TaskTable  tasks={tasks}/>
                                </tbody>
                            </table>
                            {/* <pre>{JSON.stringify(tasks, undefined, 2)}</pre> */}
                            <Pagination links={tasks.meta.links}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
