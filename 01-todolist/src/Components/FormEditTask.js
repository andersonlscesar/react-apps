import { useState } from "react";

export default function FormEditTask({ onShowEditForm, currentTask }) {

    const [ editedTask, setEditedTask ] = useState( currentTask.title );

    function handleSubmit( e ) {
        e.preventDefault();
        if ( !editedTask ) return;        
        handleEditTask( currentTask );
        onShowEditForm( false );
    } 

    function handleEditTask( taskObj ) {
        taskObj.title = editedTask;
    }

    return (

        <form className="form-task" onSubmit={ handleSubmit }>
            
            <div className="input-container">
                <input type="text" placeholder="Nova descrição para a tarefa..." value={ editedTask } onChange={ e => setEditedTask( e.target.value ) } autoFocus/>
                <button type="button" title="Cancelar" className="cancel-task" onClick={ _ => onShowEditForm( false ) }></button>
            </div>
            <button className="edit-new-task-button submit" type="submit" title="Editar tarefa"></button>

        </form>

    );

}