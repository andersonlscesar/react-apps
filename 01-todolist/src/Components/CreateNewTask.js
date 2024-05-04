import { useState } from "react";

import FormTask from "./FormTask";

export default function CreateNewTask({ newTask, onTask, onAddTask }) {

    const [ show, setShow ] = useState( false );

    return (
        <>
            { show && <FormTask onShow={ setShow } newTask={ newTask } onTask={ onTask } onAddTask={ onAddTask }/> }
            { !show && <button className="add-new-task-button" type="button" onClick={ _ => setShow( show => !show ) }></button> }    
        </>

    );
}


