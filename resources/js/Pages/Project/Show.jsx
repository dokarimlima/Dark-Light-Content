import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constant";
import { Head } from "@inertiajs/react";

export default function Show({auth, project}){
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects: {project.name}</h2>}
        >
            <Head title={`Project: ${project.name}`}/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <pre>{JSON.stringify(project, undefined,2)}</pre> */}
                            <div>
                                <img src={project.image_path} alt="image" className="w-full h-64 object-cover" />
                            </div>
                            <div className="grid gap-1 grid-cols-2 mt-4">
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">Project ID</label>
                                        <p className="text-gray-400 font-light">{project.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Project Name</label>
                                        <p className="text-gray-400 font-light">{project.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Project Status</label>
                                        <p>
                                            <span className={`py-1 px-2 rounded text-white ${PROJECT_STATUS_CLASS_MAP[project.status]}`}>
                                                {PROJECT_STATUS_TEXT_MAP[project.status]}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Created By</label>
                                        <p className="text-gray-400 font-light">{project.createdBy.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">Due Date</label>
                                        <p className="text-gray-400 font-light">{project.dueDate}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Created Date</label>
                                        <p className="text-gray-400 font-light">{project.createdAt}</p>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <label className="font-bold text-lg mt-2">Updated By</label>
                                        <p className="text-gray-400 font-light">{project.updatedBy.name}</p>
                                    </div>
                                </div>    
                            </div>
                            <div className="mt-4">
                                <label className="font-bold text-lg">Project Description</label>
                                <p className="text-gray-400">{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    )
}