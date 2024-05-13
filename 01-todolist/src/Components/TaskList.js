import { Select, Input } from "@chakra-ui/react";
import Task from "./Task";
import { useState } from "react";

export default function TaskList() {


    return (
        <main className="main">
            <Input placeholder='Buscar tarefa ... ' size='lg' mb={2} variant='filled' />

            <Select placeholder="Ordenar tarefas por ..." size='lg' variant='filled'  mb={4}>
                <option value='padrao'>Padrão</option>
                <option value='alfa'>Alfabeticamente</option>
                <option value='concluido'>Concluído</option>
                <option value='naoconcluido'>Não Concluído</option>
            </Select>

            <ul className="task-list">
               
            </ul>
        </main>
    );
}
