type props = {
    task: {
        name: string,
        tasks: Task[]
    }
}
interface Task  {
    title: string,
    status:string,
    subtasks: SubTask[]
}

interface SubTask  {
    title: string,
    isCompleted:boolean
}

export default function TaskColumn({task}:props) {
    const completedTaskCount = (tasks: SubTask[]) => {
        let count = 0
        tasks.forEach((task) => {
            if(task.isCompleted) count++
        })
        return count
    }
    return <>
        <section className="space-y-6 min-w-[280px] h-full">
            <div className="flex items-center gap-3">
                <div className={`h-[15px] w-[15px] rounded-full bg-[#49C4E5]`}></div>
                <h4 className="text-mediumGrey dark:text-white heading-s uppercase">{task.name} ({task.tasks.length})</h4>
            </div>
            <div className="space-y-5">
                {task.tasks.map(({title,subtasks},index) => {
                    return (
                        <div key={index}>
                            <article className="task-card group flex flex-col gap-2 bg-white dark:bg-darkGrey px-4 py-6 rounded-lg cursor-pointer max-w-[280px]">
                                <p className="heading-m text-black dark:text-white">{title}</p>
                                <span className="body-m text-mediumGrey">
                                {completedTaskCount(subtasks)} of {subtasks.length} subtasks 
                                </span>
                            </article>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
}
