
export default function FormTask( { onShow, newTask, onTask, onAddTask } ) {

    function handleSubmit( e ) {

        e.preventDefault();

        if ( !newTask ) return;

        const id = crypto.randomUUID();

        const newTaskObj = {
            id, 
            title: newTask, 
            isDone: false
        };

        onAddTask( newTaskObj );
        onTask("");
    }

    return (

        <form className="form-task" onSubmit={ handleSubmit }>
            
            <div className="input-container">
                <input type="text" placeholder="Descrição da tarefa..." value={ newTask } onChange={ e => onTask( e.target.value ) }/>
                <button type="button" title="Cancelar" className="cancel-task" onClick={ _ => onShow( false ) }></button>
            </div>

            <button className="add-new-task-button submit" type="submit" title="enviar tarefa"></button>
        </form>

    );

}