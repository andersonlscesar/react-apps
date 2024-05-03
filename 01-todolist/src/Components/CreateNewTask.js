import { useState } from "react";

export default function CreateNewTask() {

    const [ isUp, setIsUp ] = useState( false );

    const bgIcon = { 
        backgroundImage: `url("./img/${ !isUp ? 'plus.png' : 'minus.png' }")`
    }

    return (

        <div className="add-new-task">
            { isUp && <Form />}
            <button style={ bgIcon } type="button" className="primary-button" onClick={ _ => setIsUp( up => !up ) }>Criar nova tarefa</button>
        </div>

    );

}


function Form() {

    return (
        <form className="add-new-task-content" >
            <label>Título da nova tarefa</label>
            <input type="text" id="new-task"/>
            <button type="submit" className="secondary-button">Add</button>
        </form>
    );
}