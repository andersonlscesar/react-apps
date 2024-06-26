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

    const [ search, setSearch ] = useState( "" ); // Gerenciando o estado do input de pesquisa

    const [ sortBy, setSortBy ] = useState( "" );

    let sortedBy;

    if ( sortBy === "" || sortBy === "padrao") sortedBy = tasks;

    if ( sortBy === "alfa" ) sortedBy = tasks.slice().sort( (a ,b) => a.title.localeCompare( b.title ) );

    if ( sortBy === "concluido" ) sortedBy = tasks.slice().sort( (a, b) => Number(b.isDone) - Number(a.isDone) );

    if ( sortBy === "naoconcluido" ) sortedBy = tasks.slice().sort( (a, b) => Number(a.isDone) - Number(b.isDone) );

    /*
    Função responsável por marcar uma tarefa como concluída / não concluída
    */

    function handleToggleTask( id ) {
        setTasks( tasks.map( task => task.id === id ? { ...task, isDone: !task.isDone } : task ) )
    }

    /**
     * Retorna a quantidade de tarefas concluídas
     * @returns { Number }
     */

    function completedTask() {
        return tasks.filter( task => task.isDone ).length;
    }

    /**
     * Retorna a quantidade de tarefas incompletas
     * @returns { Number }
     */

    function uncompletedTask() {
        return tasks.filter( task => !task.isDone ).length;
    }

    /**
     * Função responsável por add nova tarefa
     * @param { Object } newTask
     *  
     */

    function handleAddTask( newTask ) {
        setTasks( tasks => [ ...tasks, newTask ] );
    }

    /**
     * Funçção responsável por excluir uma tarefa
     * @param { String | Number } id
     *  
     */

    function handleDeleteTask( id ) {
        setTasks( tasks.filter( task => task.id !== id ) );
    }

    /**
     * Função responsável por autializar os itens da lista de tarefa
     * @param { String | Number } id 
     * @param { String } newValue 
     */

    function handleEditTask( id, newValue ) {
        setTasks( tasks.map( task => task.id === id ? { ...task, title: newValue } : task ) );
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

           { sortedBy.length > 0 && <Filter search={ search } 
                    onSearch={ setSearch }
                    sortBy={ sortBy }
                    onSortBy={ setSortBy }
            />}

            <TaskList>

                {
                    sortedBy.map( task => <Task data={ task }
                                             onToggleTask={ handleToggleTask } 
                                             onDeleteTask={ handleDeleteTask }
                                             onEditTask={ handleEditTask }
                                             search={ search }
                                             key={ task.id }/> )
                }

            </TaskList>

            { !sortedBy.length && <span className="warning"> Ainda não há tarefas a serem cumpridas</span>}

            <CreateNewTask onAddTask={ handleAddTask }/>

        </div>
    
    );
    
}