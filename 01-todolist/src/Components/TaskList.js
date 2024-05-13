import { Select, Input } from "@chakra-ui/react";
import Task from "./Task";
import { useState } from "react";

export default function TaskList({ data, onDeleteTask, onShowFormAddTask, onToggleList,  }) {

    const [filter, setFilter] = useState("");
    const [ sortBy, setSortBy ] = useState("padrao");

    function handleFilter(value) {
        setFilter(value.toLowerCase());
    }

    function filterTasks(tasks) {

        if (filter.trim() === '') {
            return  tasks ;
        } else {
            return tasks.filter(task => task.title.toLowerCase().includes(filter)); 
        }
    }

    function handleSort( sortValue ) {        
        let sorted;

        if ( sortBy === "alfa") sorted = data.slice().sort( (a, b ) => a.title.localeCompare( b.title ) );       

        setSortBy( sortValue );
        console.log( sortValue)
    }

    return (
        <main className="main">
            <Input placeholder='Buscar tarefa ... ' size='lg' mb={2} variant='filled' onChange={ e =>  handleFilter( e.target.value ) } />

            <Select placeholder="Ordenar tarefas por ..." size='lg' variant='filled'  mb={4} onChange={ e => handleSort( e.target.value ) }>
                <option value='padrao'>Padrão</option>
                <option value='alfa'>Alfabeticamente</option>
                <option value='concluido'>Concluído</option>
                <option value='naoconcluido'>Não Concluído</option>
            </Select>

            <ul className="task-list">
                {
                    filterTasks(data).map(task => (
                        <Task
                            task={task}
                            key={task.id}
                            onDeleteTask={onDeleteTask}
                            onShowFormAddTask={onShowFormAddTask}
                            onToggleList={onToggleList}
                        />
                    ))
                }
            </ul>
        </main>
    );
}
