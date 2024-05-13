import { useState } from "react";

export default function Task({ data, onToggleTask }) {

    const [ isTaskDone, setIsTaskDone ] = useState( false ); // Estado da tarefa: concluída / não concluída

    return (   
         
        <li>
            <input type="checkbox" id={ data.id } onChange={ _ => setIsTaskDone( !isTaskDone ) } onClick={ _ => onToggleTask( data.id ) }/>
            <label className={ data.isDone && "is-done" } for={ data.id }>{ data.title }</label>
            <div className="actions">
                <button type="button" title="Editar tarefa" className="edit-button" ></button>
                <button type="button" title="Deletar tarefa" className="delete-button" ></button>
            </div>
        </li>
    );

}