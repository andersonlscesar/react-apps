
/**
 * 
 * @param { onShowForm } Função set para a condição de visualização do formulário que adiciona novas tarefas 
 * @returns 
 */

export default function FormTask({ onShowForm } ) {

    return (

        <form className="form-task">
            
            <div className="input-container">
                <input type="text" placeholder="Descrição da tarefa..." />
                <button type="button" title="Cancelar" className="cancel-task" onClick={ _ => onShowForm( false ) }></button>
            </div>

            <button className="add-new-task-button submit" type="submit" title="enviar tarefa"></button>
        </form>

    );

}