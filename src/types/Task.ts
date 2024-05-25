interface BoardType {
    name: string,
    columns:Task[] | []
}

interface Task  {
    title: string,
    description:string | "",
    status:string,
    subtasks: SubTask[]
}

interface SubTask  {
    title: string,
    isCompleted:boolean
}

export type { BoardType,Task,SubTask };