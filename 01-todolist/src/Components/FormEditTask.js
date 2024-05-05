export default function FormEditTask({ onShowEditForm, currentTask, onEditTaskValue }) {

    function handleSubmit( e ) {
        e.preventDefault();
        console.log(currentTask)
    } 

    return (

        <form className="form-task" onSubmit={ handleSubmit }>
            
            <div className="input-container">
                <input type="text" placeholder="Nova descrição para a tarefa..." value={ currentTask.title } onChange={ e => onEditTaskValue( e.target.value ) }/>
                <button type="button" title="Cancelar" className="cancel-task" onClick={ _ => onShowEditForm( false ) }></button>
            </div>

            <button className="edit-new-task-button submit" type="submit" title="Editar tarefa"></button>
        </form>

    );

}