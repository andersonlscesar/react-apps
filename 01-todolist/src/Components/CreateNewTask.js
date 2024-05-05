import { useState } from "react";

import FormTask from "./FormTask";

export default function CreateNewTask({ newTask, onTask, onAddTask, showFormAddTask, onShowFormAddTask }) {


    return (
        <>
            { showFormAddTask && <FormTask onShow={ onShowFormAddTask } newTask={ newTask } onTask={ onTask } onAddTask={ onAddTask }/> }
            { !showFormAddTask && <button className="add-new-task-button" type="button" onClick={ _ => onShowFormAddTask( show => !show ) }></button> }    
        </>

    );
}


