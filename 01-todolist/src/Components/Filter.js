import { Select, Input } from "@chakra-ui/react";

export default function Filter({ search, onSearch }) {

    return (
        <>
            <Input placeholder='Buscar tarefa ... ' size='lg' mb={2} variant='filled' value={ search } onChange={ e => onSearch( e.target.value ) }/>
            <Select placeholder="Ordenar tarefas por ..." size='lg' variant='filled'  mb={4}>
                <option value='padrao'>Padrão</option>
                <option value='alfa'>Ordem Alfabetica</option>
                <option value='concluido'>Concluído</option>
                <option value='naoconcluido'>Não Concluído</option>
            </Select>
        </>

    );
}