import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from './App';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const Todolist = (props: TodolistPropsType) => {

    const [titleTask, setTitleTask] = useState<string>('')
    const tasksItems = props.tasks.map((task) => <li key={task.id}>{task.title}<input type="checkbox"
                                                                                      checked={task.isDone}/>
        <button onClick={() => props.removeTask(task.id)}>X</button>
    </li>)

    const onClickAddTask = () => {
        titleTask !== '' && // АНАЛОГ ОПЕРАТОРА IF
        props.addTask(titleTask)
        setTitleTask('')

    }
    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onClickAddTask()// && АНАЛОГ IF
    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTitleTask(event.currentTarget.value)
console.log(event)    }

    const onClickHandlerCreator = (filter:FilterValuesType) => {
       return () => props.changeFilter(filter)

    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input
                        value={titleTask}//Из-за этой переменной мы уверены что в локальном стэйте точно то же что и в инпуте!!!!!!
                        onChange={onChangeInputValue}
                        onKeyDown={onKeyDownAddTask}
                    />
                    <button onClick={onClickAddTask}>+</button>
                </div>
                <ul>
                    {tasksItems}
                </ul>
                <div>
                    <button
                        onClick={onClickHandlerCreator('All')}
                    >All
                    </button>
                    <button
                        onClick={onClickHandlerCreator('Active')}
                    >Active
                    </button>
                    <button
                        onClick={onClickHandlerCreator('Complited')}
                    >Completed
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Todolist;