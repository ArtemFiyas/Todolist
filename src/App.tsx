import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

const App = () => {
    const tasks: Array<TaskType> = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 2, title: 'React', isDone: true}
    ]
    return (
        <div>
            <Todolist
                title='What to learn'
                tasks={tasks}
            />
        </div>
    )
}

export default App;
