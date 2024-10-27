// src/components/FormularioContato.tsx
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormularioContatoProps } from './interfaces/IFormularioContato';

const FormularioContato: React.FC<FormularioContatoProps> = ({ contatoAtual, onAdicionar, onEditar }) => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() => {
        if (contatoAtual) {
            setNome(contatoAtual.nome);
            setTelefone(contatoAtual.telefone);
        } else {
            setNome('');
            setTelefone('');
        }
    }, [contatoAtual]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (nome.trim() && telefone.trim()) {
            const novoContato = contatoAtual
                ? { ...contatoAtual, nome, telefone }
                : { id: uuidv4(), nome, telefone };
            contatoAtual ? onEditar(novoContato) : onAdicionar(novoContato);
            setNome('');
            setTelefone('');
        }
    };

    return (
        <form onSubmit={handleSubmit}> {/* Corrigido para <form> */}
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                aria-label="Nome"
            />
            <input
                type="tel"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                aria-label="Telefone"
            />
            <button type="submit">{contatoAtual ? 'Editar' : 'Adicionar'}</button>
        </form>
    );
};

export default FormularioContato;
