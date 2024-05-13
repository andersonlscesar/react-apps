
export default function FormTask( ) {

    return (

        <form className="form-task">
            
            <div className="input-container">
                <input type="text" placeholder="Descrição da tarefa..." />
                <button type="button" title="Cancelar" className="cancel-task"></button>
            </div>

            <button className="add-new-task-button submit" type="submit" title="enviar tarefa"></button>
        </form>

    );

}