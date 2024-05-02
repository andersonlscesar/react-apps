import { useState } from "react";

export default function Task({ task }) {

    const [ checkbox, setCheckbox ] = useState( false );

    return (

        <>
            <li>
                <input type="checkbox" id={ task.id } value={ checkbox } onChange={ _ => setCheckbox( check => !check ) }/>
                <label className={ checkbox && "is-done" } for={ task.id }>{ task.title }</label>
            </li>
        </>

    );

}