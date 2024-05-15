import { useState } from "react";
/**
 * 
 * @param { Function } onShowEditForm - Função do componente Task que altera o estado de visualização do form de edição 
 * @param { Object } data - Obj com a tarefa atual
 * @param { Function } onEditTask - Funçõa do componente App responsável por atualizar o valor da tarefa
 * @returns 
 */

export default function FormEditTask({ onShowEditForm, data, onEditTask }) {
    
    const [ taskValue, setTaskValue ] = useState( data.title ); // Valor do input

    function handleSubmit( e ) {
        e.preventDefault();
        if ( !taskValue || taskValue.trim() === "") return;
        onEditTask( data.id, taskValue );
        onShowEditForm( false );
    }

    return (

        <form className="form-task" onSubmit={ handleSubmit }>
            
            <div className="input-container">
                <input type="text" placeholder="Nova descrição para a tarefa..." value={ taskValue } onChange={ e => setTaskValue( e.target.value ) } autoFocus/>
                <button type="button" title="Cancelar" className="cancel-task" onClick={ _ => onShowEditForm( false ) }></button>
            </div>
            <button className="edit-new-task-button submit" type="submit" title="Editar tarefa"></button>

        </form>

    );

}