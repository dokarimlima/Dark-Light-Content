import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({auth, task, projects, users}){
    const{data, setData, post, errors} = useForm({
        image:"",
        name: task.name||"",
        status:task.status||"",

    })
    const onSubmit =(e)=>{
        e.preventDefault()
    }
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit Task {task.name}</h2>
                </div>
            }
        >
            <Head title={`Edit Task ${task.name}`}/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                onSubmit={onSubmit}
                                className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-4 sm:p-8"
                            >
                                <div>
                                    <InputLabel htmlFor="task_project_id" value="Project"/>
                                    <SelectInput id="task_project_id" name="project_id" className="w-full block mt-1">
                                        {projects.data.map((project)=>(
                                            <option key={project.id} value={project.id}>{project.name}</option>
                                        ))}
                                    </SelectInput>
                                </div>
                                <div>
                                    <InputLabel htmlFor="task_name" value="Task Name"/>
                                    <TextInput id="task_name" name="name" className="w-full block mt-1"/>
                                </div>
                            </form>
                            <pre>{JSON.stringify(task, undefined,2)}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
