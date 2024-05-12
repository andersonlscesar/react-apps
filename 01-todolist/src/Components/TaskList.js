import { Select, Input } from "@chakra-ui/react";
import Task from "./Task";
import { useState } from "react";

export default function TaskList({ data, onDeleteTask, onShowFormAddTask, onToggleList }) {

    const [filter, setFilter] = useState('');

    function handleFilter(value) {
        setFilter(value.toLowerCase());
    }

    function filterTasks(tasks) {
        if (filter.trim() === '') {
            return tasks;
        } else {
            return tasks.filter(task => task.title.toLowerCase().includes(filter));
        }
    }

    return (
        <main className="main">
            <Input placeholder='Buscar tarefa ... ' size='lg' mb={2} variant='filled' onChange={e => handleFilter(e.target.value)} />

            <Select placeholder="Ordenar tarefas por ..." size='lg' variant='filled'>
                <option value='option1'>Padrão</option>
                <option value='option2'>Decrescente</option>
                <option value='option3'>Concluído</option>
                <option value='option3'>Não Concluído</option>
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
