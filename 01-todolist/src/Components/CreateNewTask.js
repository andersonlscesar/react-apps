import FormTask from "./FormTask";
import { useState } from "react";

export default function CreateNewTask() {

    const [ showForm, setShowForm ] = useState( false ); // Gerenciando o estado de quando o form deve ou não aparecer

    return (

        <>
            { showForm ? <FormTask onShowForm={ setShowForm }/> : <button className="add-new-task-button" type="button" onClick={ _ => setShowForm( true ) }></button> }
        </>

    );
}


