// src/pages/ListaContatosPag.tsx
import React, { useEffect, useState } from 'react';
import ListaContatos from '../components/ListaContato';
import { ContatoProps } from '../components/interfaces/IContato';

const ListaContatosPag: React.FC = () => {
  const [contatos, setContatos] = useState<ContatoProps[]>([]);

  useEffect(() => {
    const contatosSalvos = localStorage.getItem('contatos');
    if (contatosSalvos) {
      try {
        const parsedContatos = JSON.parse(contatosSalvos);
        setContatos(parsedContatos);
      } catch (error) {
        console.error("Erro ao carregar contatos do localStorage:", error);
      }
    }
  }, []);

  const removerContato = (id: string) => {
    const novosContatos = contatos.filter(c => c.id !== id);
    setContatos(novosContatos);
    localStorage.setItem('contatos', JSON.stringify(novosContatos)); // Atualiza o localStorage
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ListaContatos contatos={contatos} onEditar={() => {}} onRemover={removerContato} />
    </div>
  );
};

export default ListaContatosPag;
