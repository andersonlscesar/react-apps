
import Task from "./Task";

export default function TaskList({ data, onDeleteTask, onShowFormAddTask, onToggleList }) {


    return (

        <main className="main">

            <ul className="task-list">

                { 
                    data.map( task => <Task task={ task }
                                            key={ task.id }
                                            onDeleteTask={ onDeleteTask }
                                            onShowFormAddTask={ onShowFormAddTask }
                                            onToggleList={ onToggleList }
                                      /> )
                }

            </ul>

        </main>


    );

}