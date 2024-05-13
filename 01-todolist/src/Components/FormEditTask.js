import { useState } from "react";
/**
 * 
 * @param { Function } onShowEditForm - Função do componente Task que altera o estado de visualização do form de edição 
 * @param { Object } data - Obj com a tarefa atual
 * @returns 
 */

export default function FormEditTask({ onShowEditForm, data }) {
    
    const [ taskValue, setTaskValue ] = useState( "" ); // Valor do input

    return (

        <form className="form-task">
            
            <div className="input-container">
                <input type="text" placeholder="Nova descrição para a tarefa..." value={ data.title }/>
                <button type="button" title="Cancelar" className="cancel-task" onClick={ _ => onShowEditForm( false ) }></button>
            </div>
            <button className="edit-new-task-button submit" type="submit" title="Editar tarefa"></button>

        </form>

    );

}