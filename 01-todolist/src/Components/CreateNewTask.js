import FormTask from "./FormTask";
import { useState } from "react";

/**
 * 
 * @param {Function} onAddTask - Função do componente App que adiciona novas tarefas 
 * @returns { ReactJSXElement }
 */

export default function CreateNewTask({ onAddTask }) {

    const [ showForm, setShowForm ] = useState( false ); // Gerenciando o estado de quando o form deve ou não aparecer

    return (

        <>
            { showForm ? <FormTask onShowForm={ setShowForm } onAddTask={ onAddTask }/> : <button className="add-new-task-button" type="button" onClick={ _ => setShowForm( true ) }></button> }
        </>

    );
}


