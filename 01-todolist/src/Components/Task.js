import { useState } from "react";

/**
 * 
 * @param { Array } data - Array com todas as tarefas
 * @param { Function } onToggleTask - Função do componente App que altera o status da tarefa
 * @param { Function } onDeleteTask - Funçção do  componente App que deleta uma tarefa
 * @returns 
 */

export default function Task({ data, onToggleTask, onDeleteTask }) {

    const [ isTaskDone, setIsTaskDone ] = useState( false ); // Estado da tarefa: concluída / não concluída

    return (   
         
        <li>
            <input type="checkbox" id={ data.id } onChange={ _ => setIsTaskDone( !isTaskDone ) } onClick={ _ => onToggleTask( data.id ) }/>
            <label className={ data.isDone ? "is-done" : "" } for={ data.id }>{ data.title }</label>
            <div className="actions">
                <button type="button" title="Editar tarefa" className="edit-button" ></button>
                <button type="button" title="Deletar tarefa" className="delete-button" onClick={ _ => onDeleteTask( data.id ) }></button>
            </div>
        </li>
    );

}