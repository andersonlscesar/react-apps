
import Task from "./Task";

export default function TaskList({ data, onDeleteTask, onShowFormAddTask, onEditTask, editTaskValue }) {


    return (

        <main className="main">

            <ul className="task-list">

                { 
                    data.map( task => <Task task={ task }
                                            key={ task.id }
                                            onDeleteTask={ onDeleteTask }
                                            onShowFormAddTask={ onShowFormAddTask }
                                      /> )
                }

            </ul>

        </main>


    );

}