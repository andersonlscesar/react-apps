
export default function Task({ data }) {

    return (   
         
            <li>
                <input type="checkbox" />
                <label className={ "is-done" }>{ data.title }</label>
                <div className="actions">
                    <button type="button" title="Editar tarefa" className="edit-button" ></button>
                    <button type="button" title="Deletar tarefa" className="delete-button" ></button>
                </div>
            </li>
    );

}