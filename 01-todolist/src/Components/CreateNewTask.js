import { useState } from "react";

import FormTask from "./FormTask";

export default function CreateNewTask() {

    const [ show, setShow ] = useState( false );

    return (
        <>
            { show && <FormTask onShow={ setShow }/> }
            { !show && <button className="add-new-task-button" type="button" onClick={ _ => setShow( show => !show ) }></button> }    
        </>

    );
}


