// src/pages/ListaContatosPag.tsx
import React from 'react';
import ListaContatos from '../components/ListaContato';
import { ContatoProps } from '../components/interfaces/IContato';

interface Props {
  contatos: ContatoProps[];
  onEditar: (contato: ContatoProps) => void;
  onRemover: (id: string) => void;
}

const ListaContatosPag: React.FC<Props> = ({ contatos, onEditar, onRemover }) => {
  return (
    <div>
      <h1>Contatos Salvos</h1>
      <ListaContatos contatos={contatos} onEditar={onEditar} onRemover={onRemover} />
    </div>
  );
};

export default ListaContatosPag;
