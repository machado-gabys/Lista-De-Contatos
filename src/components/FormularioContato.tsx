// src/components/FormularioContato.tsx
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormularioContatoProps } from './interfaces/IFormularioContato';

const FormularioContato: React.FC<FormularioContatoProps> = ({ contatoAtual, onAdicionar, onEditar }) => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [erroNome, setErroNome] = useState('');
    const [erroTelefone, setErroTelefone] = useState('');

    useEffect(() => {
        if (contatoAtual) {
            setNome(contatoAtual.nome);
            setTelefone(contatoAtual.telefone);
        } else {
            setNome('');
            setTelefone('');
        }
    }, [contatoAtual]);

    const validarNome = (nome: string): boolean => {
        const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
        return nomeRegex.test(nome);
    };

    const validarTelefone = (telefone: string): boolean => {
        const telefoneRegex = /^[0-9\-\+\(\) ]+$/;
        return telefoneRegex.test(telefone);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;

        if (!validarNome(nome.trim())) {
            setErroNome('O nome deve conter apenas letras.');
            valid = false;
        } else {
            setErroNome('');
        }

        if (!validarTelefone(telefone.trim())) {
            setErroTelefone('O telefone deve conter apenas números e alguns símbolos.');
            valid = false;
        } else {
            setErroTelefone('');
        }

        if (valid) {
            const novoContato = contatoAtual
                ? { ...contatoAtual, nome, telefone }
                : { id: uuidv4(), nome, telefone };
            contatoAtual ? onEditar(novoContato) : onAdicionar(novoContato);
            setNome('');
            setTelefone('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                aria-label="Nome"
            />
            {erroNome && <div className="erro">{erroNome}</div>}
            <input
                type="tel"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                aria-label="Telefone"
            />
            {erroTelefone && <div className="erro">{erroTelefone}</div>}
            <button type="submit">{contatoAtual ? 'Editar' : 'Adicionar'}</button>
        </form>
    );
};

export default FormularioContato;
