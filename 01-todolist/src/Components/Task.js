import { useState } from "react";

import FormEditTask from "./FormEditTask";

export default function Task({ task, onDeleteTask,  onShowFormAddTask }) {

    const [ checkbox, setCheckbox ] = useState( false );
    const [ showEditForm, setShowEditForm ] = useState( false );

    function handleShowEditForm( idTask ) {
        
        setShowEditForm( editForm => !editForm );
        onShowFormAddTask( false );
    }

    return (

        <>
           {

           !showEditForm 

           ?
            <li>
                <input type="checkbox" id={ task.id } value={ checkbox } onChange={ _ => setCheckbox( check => !check ) }/>
                <label className={ checkbox && "is-done" } for={ task.id }>{ task.title }</label>
                <div className="actions">
                    <button type="button" title="Editar tarefa" className="edit-button" onClick={ _ => handleShowEditForm( task.id ) }></button>
                    <button type="button" title="Deletar tarefa" className="delete-button" onClick={ _ => onDeleteTask( task.id ) }></button>
                </div>
            </li>

            :

            <FormEditTask onShowEditForm={ setShowEditForm} currentTask={ task }  /> 

            }
        </>

    );

}