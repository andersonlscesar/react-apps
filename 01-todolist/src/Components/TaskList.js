import Task from "./Task";

export default function TaskList({ data }) {

    return (

        <main className="main">

            <ul className="task-list">

                { data.map( task => <Task task={ task } key={ task.id }/> ) }

            </ul>

        </main>

    );

}