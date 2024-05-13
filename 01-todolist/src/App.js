import { useState } from "react";

import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import CreateNewTask from "./Components/CreateNewTask";
import Status from "./Components/Status";
import Task from "./Components/Task";
import Filter from "./Components/Filter";


const taskList = [

    {
        id: 123, 
        title: "Limpar o quarto",
        isDone: false
    },

    {
        id: 234, 
        title: "Estudar sobre datas em javascript",
        isDone: false
    },

    {
        id: 345, 
        title: "Começar a organizar as anotações no notion",
        isDone: false
    },


];

export default function App() {

    const [ tasks, setTasks ] = useState( taskList ); // Gerenciando estado das tarefas

    /*
    Função responsável por marcar uma tarefa como concluída / não concluída
    */

    function handleToggleTask( id ) {
        setTasks( tasks.map( task => task.id === id ? { ...task, isDone: !task.isDone } : task ) )
    }

    function completedTask() {
        return tasks.filter( task => task.isDone ).length;
    }

    function uncompletedTask() {
        return tasks.filter( task => !task.isDone ).length;
    }

    return (

        <div className="container">

            <Header />

            <div className="status-container">

                <Status amount={ completedTask }>
                    Tarefas Concluídas
                </Status>

                <Status amount={ uncompletedTask }>
                    Tarefas Não Concluídas
                </Status>  

            </div>

            <Filter />

            <TaskList>

                {
                    tasks.map( task => <Task data={ task }
                        o                    onToggleTask={ handleToggleTask } 
                                             key={ task.id }/> )
                }

            </TaskList>

            <CreateNewTask />
        </div>
    
    );
    
}