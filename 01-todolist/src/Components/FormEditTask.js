

export default function FormEditTask({}) {

  

    return (

        <form className="form-task">
            
            <div className="input-container">
                <input type="text" placeholder="Nova descrição para a tarefa..."/>
                <button type="button" title="Cancelar" className="cancel-task"></button>
            </div>
            <button className="edit-new-task-button submit" type="submit" title="Editar tarefa"></button>

        </form>

    );

}