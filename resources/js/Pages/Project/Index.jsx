import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constant";
import { Listbox } from "@headlessui/react";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({auth, projects, queryParams = null}){
    queryParams = queryParams || {}

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value
        }else{
            delete queryParams[name]
        }

        router.get(route('project.index'),queryParams)
    }

    const onKeyPress = (name, e) =>{
        if (e.key !== 'Enter') return;

        searchFieldChanged(name, e.target.value)
    }

    const deletedProject = (project)=>{
        if (!window.confirm('Are you sure wont to deleted this project?')) {
            return;
        }

        router.delete(route('project.destroy',project.id))
    }

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects</h2>
                    <Link href={route('project.create')} className="bg-green-500 shadow shadow-green-500/100 p-2 rounded-lg text-gray-200 font-semibold">Add New Project</Link>
                </div>
            }
        >
            <Head title="Projects"/>

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
                                        <th className="px-3 py-2">Status</th>
                                        <th className="px-3 py-2">Create Date</th>
                                        <th className="px-3 py-2">Due Date</th>
                                        <th className="px-3 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2">
                                            <TextInput 
                                            className="w-full"
                                            placeholder="Project Name"
                                            defaultValue={queryParams.name}
                                            onBlur={e =>searchFieldChanged('name', e.target.value)}
                                            onKeyPress={(e) => onKeyPress('name', e)}
                                            />
                                        </th>
                                        <th className="px-3 py-2">
                                            <SelectInput className="w-full" defaultValue={queryParams.status} onChange={(e) => searchFieldChanged('status', e.target.value)}>
                                                <option value="">Select Status</option>
                                                <option value="pending">Pending</option>
                                                <option value="in_progress">In Progress</option>
                                                <option value="completed">Completed</option>
                                            </SelectInput>
                                        </th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.data.map((project) => (
                                        <tr key={project.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-3 py-2">{project.id}</td>
                                            <td className="px-3 py-2">
                                                <img src={project.image_path} alt="image" className="rounded-full w-6 h-6" />
                                            </td>
                                            <td className="px-3 py-2 hover:underline font-medium text-nowrap">
                                                <Link href={route('project.show',project.id)}>{project.name}</Link>
                                            </td>
                                            <td className="px-3 py-2">
                                                <span className={`py-1 px-2 rounded text-white ${PROJECT_STATUS_CLASS_MAP[project.status]}`}>
                                                    {PROJECT_STATUS_TEXT_MAP[project.status]}
                                                </span>
                                                </td>
                                            <td className="px-3 py-2">{project.createdBy.name}</td>
                                            <td className="px-3 py-2 text-nowrap">{project.dueDate}</td>
                                            <td className="px-3 py-2">
                                                <Link href={route('project.edit',project.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={(e)=>deletedProject(project)}
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Pagination links={projects.meta.links}/>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}