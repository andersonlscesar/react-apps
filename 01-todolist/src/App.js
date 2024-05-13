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




    return (

        <div className="container">
            <Header />

            <div className="status-container">
                <Status>
                    Tarefas Concluídas
                </Status>

                <Status >
                    Tarefas Não Concluídas
                </Status>

                
            </div>
      

            <TaskList  
            />

            <CreateNewTask                          
            />
        </div>
    
    );
    
}