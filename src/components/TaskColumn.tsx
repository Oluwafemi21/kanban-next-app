type props = {
    title: string,
    tasks:Task[]
}
interface Task  {
    title: string,
    subtasks: SubTask[]
}

interface SubTask  {
    title: string,
    status: 'todo'|'doing'|'done'
}

export default function TaskColumn(task:props) {
    const completedTaskCount = (tasks: SubTask[]) => {
        let count = 0
        tasks.forEach((task) => {
            if(task.status === 'done') count++
        })
        return count
    }
    return <>
        <section className="space-y-6">
            <div className="flex items-center gap-3">
                <div className={`h-[15px] w-[15px] rounded-full bg-[#49C4E5]`}></div>
                <h4 className="text-mediumGrey dark:text-white heading-s uppercase">{task.title} ({task.tasks.length})</h4>
            </div>
            <div className="space-y-5">
                {task.tasks.map(({title,subtasks},index) => {
                    return (
                        <div key={index}>
                            <article className="task-card group flex flex-col gap-2 bg-white dark:bg-darkGrey px-4 py-6 rounded-lg cursor-pointer shadow-task max-w-[280px]">
                                <p className="heading-m text-black">{title}</p>
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
