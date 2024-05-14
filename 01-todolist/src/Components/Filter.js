import { Select, Input } from "@chakra-ui/react";
import { useState } from "react";

/**
 * Componente responsável pelo filtro e buscas
 * @param { String } search - Variável de controle no componete App (Recebe o valor do input de busca) 
 * @param { Function } onSearch - Função que altera o estado do parâmetro search
 * @returns 
 */

export default function Filter({ search, onSearch, sortBy, onSortBy }) {

    return (
        <>
            <Input placeholder='Buscar tarefa ... ' size='lg' mb={2} variant='filled' value={ search } onChange={ e => onSearch( e.target.value ) }/>
            <Select placeholder="Ordenar tarefas por ..." size='lg' variant='filled'  mb={4} value={ sortBy } onChange={ e => onSortBy( e.target.value )}>
                <option value='padrao'>Padrão</option>
                <option value='alfa'>Ordem Alfabetica</option>
                <option value='concluido'>Concluído</option>
                <option value='naoconcluido'>Não Concluído</option>
            </Select>
        </>

    );
} 