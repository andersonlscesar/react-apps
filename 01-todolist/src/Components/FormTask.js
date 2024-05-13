import { useState } from "react";


/**
 * 
 * @param { Function } onShowForm Função set para a condição de visualização do formulário que adiciona novas tarefas 
 * @param { Function } onAddTask - Funçõa do componente App responsável por add novas tarefas
 * @returns 
 */

export default function FormTask({ onShowForm, onAddTask } ) {

    const [ insertTask, setNewInsertTask ] = useState(""); // Valor da nova tarefa

    function handleSubmit( e ) {
        e.preventDefault();
        const newTask = { id: crypto.randomUUID(), title: insertTask, isDone: false }; // novo obj para ser adicionado a lista de tarefas
        onAddTask( newTask );  
        setNewInsertTask( "" );      
    }

    return (

        <form className="form-task" onSubmit={ handleSubmit }>
            
            <div className="input-container">
                <input type="text" placeholder="Descrição da tarefa..." value={ insertTask } onChange={ e => setNewInsertTask( e.target.value ) } autoFocus/>
                <button type="button" title="Cancelar" className="cancel-task" onClick={ _ => onShowForm( false ) }></button>
            </div>

            <button className="add-new-task-button submit" type="submit" title="enviar tarefa"></button>
        </form>

    );

}