import { Select, Input } from "@chakra-ui/react";

export default function Filter() {

    return (

        <>
            <Input placeholder='Buscar tarefa ... ' size='lg' mb={2} variant='filled' />
            <Select placeholder="Ordenar tarefas por ..." size='lg' variant='filled'  mb={4}>
                <option value='padrao'>Padrão</option>
                <option value='alfa'>Ordem Alfabetica</option>
                <option value='concluido'>Concluído</option>
                <option value='naoconcluido'>Não Concluído</option>
            </Select>
        </>

    );
}