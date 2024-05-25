import {Task,SubTask} from '@/types/Task'
type props = {
    task: {
        name: string,
        tasks: Task[]
    },
    openTask:(task:Task)=>void
}


export default function TaskColumn({task,openTask}:props) {
    const completedTaskCount = (tasks: SubTask[]) => {
        let count = 0
        tasks.forEach((task) => {
            if(task.isCompleted) count++
        })
        return count
    }
    return <>
        <section className="space-y-6 min-w-[280px] h-full snap-start scroll-ms-6">
            <div className="flex items-center gap-3">
                <div className={`h-[15px] w-[15px] rounded-full bg-[#49C4E5]`}></div>
                <h4 className="text-mediumGrey dark:text-white heading-s uppercase">{task.name} ({task.tasks.length})</h4>
            </div>
            <div className="space-y-5">
                {task.tasks.map((task,index) => {
                    return (
                        <div role="button" key={index} onClick={()=>openTask(task)}>
                            <article className="task-card group flex flex-col gap-2 bg-white dark:bg-darkGrey px-4 py-6 rounded-lg cursor-pointer">
                                <p className="heading-m text-black dark:text-white group-hover:text-primaryPurple">{task.title}</p>
                                <span className="body-m text-mediumGrey">
                                {completedTaskCount(task.subtasks)} of {task.subtasks.length} subtasks 
                                </span>
                            </article>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
}
