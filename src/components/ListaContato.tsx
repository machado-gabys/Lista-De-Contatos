// src/components/ListaContato.tsx
import React from 'react';
import { Contato } from '../Teste Guarida/Contato';

interface Props {
  contatos: Contato[];
  onEditar: (contato: Contato) => void;
  onRemover: (id: number) => void;
}

const ListaContatos: React.FC<Props> = ({ contatos, onEditar, onRemover }) => {
  return (
    <ul>
      {contatos.map((contato) => (
        <li key={contato.id}>
          <span>{contato.nome} - {contato.telefone}</span>
          <button onClick={() => onEditar(contato)}>Editar</button>
          <button onClick={() => onRemover(contato.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaContatos;
