import { useState } from "react";

import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import CreateNewTask from "./Components/CreateNewTask";


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

    const [ editTaskValue, setEditTaskValue ] = useState("");

    const [ taskListState, setTaskListState ] = useState( taskList );

    const [ showFormAddTask, setShowFormAddTask ] = useState( false );


    function handleAddTask( newTaskObj ) {
        setTaskListState( t => [...t, newTaskObj ] );
    }

    function handleDeleteTask( id ) {
        setTaskListState( taskObj => taskObj.filter( t => t.id !== id ) );
    }

    function handleEditTask( id, taskEdited = {} ) {
        console.log( id )
    }

    return (

        <div className="container">
            <Header />

            <TaskList   data={ taskListState }
                        onDeleteTask={ handleDeleteTask }
                        showFormAddTask={ showFormAddTask }
                        onShowFormAddTask={ setShowFormAddTask }
                        onEditTask={ handleEditTask }
                        editTaskValue={ editTaskValue }
                        onEditTaskValue={ setEditTaskValue }
            />

            <CreateNewTask   newTask={ newTask }
                             onTask={ setNewTask }
                             onAddTask={ handleAddTask }   
                             showFormAddTask={ showFormAddTask }
                             onShowFormAddTask={ setShowFormAddTask }                          
            />
        </div>
    
    );
    
}