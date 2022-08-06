import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from './Todolist';
import {v1} from 'uuid';


export type FilterValuesType = 'All' | 'Active' | 'Complited'


const App = () => {
//BLL:
    const TodolistTitle = 'What to learn'

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'React', isDone: false}
    ])

    const [filter, setFilter] = useState<FilterValuesType>('All')

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const changeFilter = (filter:FilterValuesType) => {
        setFilter(filter)
    }

    const addTask = (taskTitle:string) => {
        /*const newTask: TaskType = {
            id: v1(),
            title: taskTitle, // можно было просто написать title, если ключ совпадает со значением
            isDone: false
        }*/
        setTasks([ {
            id: v1(),
            title: taskTitle, // можно было просто написать title, если ключ совпадает со значением
            isDone: false
        }, ...tasks ])
    }




//UI: Все что ниже больше относится к отрисовке, но сами данные не меняет.
    let tasksForRender;
    switch (filter) {
        case 'Complited':
            tasksForRender = tasks.filter((task) => task.isDone)
            break
        case 'Active':
            tasksForRender = tasks.filter((task) =>!task.isDone)
            break
        default:
            tasksForRender = tasks
    }



    return (
        <div>
            <Todolist
                title={TodolistTitle}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    )
}

export default App;
