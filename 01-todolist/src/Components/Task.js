import { useState } from "react";
import FormEditTask from "./FormEditTask";

/**
 * 
 * @param { Array } data - Array com todas as tarefas
 * @param { Function } onToggleTask - Função do componente App que altera o status da tarefa
 * @param { Function } onDeleteTask - Funçção do  componente App que deleta uma tarefa
 * @param { Function } onEditTask - Função responsável por editar o valor de uma tarefa
 * @param { Function } search - Variável que gerencia o estado do input de busca que está no componente App
 * @returns 
 */

export default function Task({ data, onToggleTask, onDeleteTask, onEditTask, search }) {

    const [ isTaskDone, setIsTaskDone ] = useState( false ); // Estado da tarefa: concluída / não concluída
    const [ showEditForm, setShowEditForm ] = useState( false ); // Verifica se o form de edição deve ou não aparecer
    

    return (   
        <>
            {
                showEditForm 

                ?

                <FormEditTask onShowEditForm={ setShowEditForm } data={ data } onEditTask={ onEditTask }/>

                :

               <ItemTask data={ data }
                         isTaskDone={ isTaskDone }
                         onIsTaskDone={ setIsTaskDone }
                         onToggleTask={ onToggleTask } 
                         onDeleteTask={ onDeleteTask }
                         onShowEditForm={ setShowEditForm }
                         search={ search }/>

            }
        </>
    );

}


function ItemTask({ data, isTaskDone,  onIsTaskDone, onToggleTask, onShowEditForm, onDeleteTask, search }) {

    let searchLowerCase = search.toLowerCase(); // Valor do input de busca em minúsculo
    

    return (

        // Caso o valor coincida com o que está na lista de tarefas, o componente Task será renderixado
        <>
          {  
          
            data.title.toLowerCase().includes( searchLowerCase )
            
            ?

            <li>
                <input type="checkbox" id={ data.id } onChange={ _ => onIsTaskDone( !isTaskDone ) } onClick={ _ => onToggleTask( data.id ) }/>
                <label className={ data.isDone ? "is-done" : "" } for={ data.id }>{ data.title }</label>
                <div className="actions">
                    <button type="button" title="Editar tarefa" className="edit-button" onClick={ _ => onShowEditForm( true ) }></button>
                    <button type="button" title="Deletar tarefa" className="delete-button" onClick={ _ => onDeleteTask( data.id ) }></button>
                </div>
            </li>

            :

            null

            }
        </>
        
    );
}