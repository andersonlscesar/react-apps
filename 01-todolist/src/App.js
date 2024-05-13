import { useState } from "react";

import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import CreateNewTask from "./Components/CreateNewTask";
import Status from "./Components/Status";


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

    const [ newTask, setNewTask ] = useState("");

    const [ taskListState, setTaskListState ] = useState( taskList );

    const [ showFormAddTask, setShowFormAddTask ] = useState( false );    

    let completed = taskListState.filter( task => task.isDone ).length;

    let uncompleted = taskListState.filter( task => !task.isDone ).length;


    function handleAddTask( newTaskObj ) {
        setTaskListState( t => [ ...t, newTaskObj ] );
    }

    function handleDeleteTask( id ) {
        setTaskListState( taskObj => taskObj.filter( t => t.id !== id ) );
    }

    function handleToggleList( id ) {
        setTaskListState( tasks => tasks.map( t => t.id === id ? { ...t, isDone: !t.isDone } : t) );
    }





    return (

        <div className="container">
            <Header />

            <div className="status-container">
                <Status quantity={ completed }>
                    Tarefas Concluídas
                </Status>

                <Status quantity={ uncompleted }>
                    Tarefas Não Concluídas
                </Status>

                
            </div>
      

            <TaskList   data={ taskListState }
                        onDeleteTask={ handleDeleteTask }
                        showFormAddTask={ showFormAddTask }
                        onShowFormAddTask={ setShowFormAddTask }
                        onToggleList={ handleToggleList }      
            />

            <CreateNewTask   newTask={ newTask }
                             onTask={ setNewTask }
                             onAddTask={ handleAddTask }   
                             showFormAddTask={ showFormAddTask }
                             onShowFormAddTask={setShowFormAddTask }                          
            />
        </div>
    
    );
    
}