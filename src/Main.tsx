// src/Main.tsx
import React, { useEffect, useState } from 'react';
import FormularioContato from './components/FormularioContato';
import ListaContatos from './components/ListaContato';
import { Contato } from './Teste Guarida/Contato';

const App: React.FC = () => {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [contatoAtual, setContatoAtual] = useState<Contato | null>(null);

  useEffect(() => {
    const contatosSalvos = localStorage.getItem('contatos');
    if (contatosSalvos) {
      setContatos(JSON.parse(contatosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contatos', JSON.stringify(contatos));
  }, [contatos]);

  const adicionarContato = (contato: Contato) => {
    setContatos([...contatos, contato]);
  };

  const editarContato = (contatoAtualizado: Contato) => {
    setContatos(contatos.map(c => (c.id === contatoAtualizado.id ? contatoAtualizado : c)));
    setContatoAtual(null); // Limpa o contato atual após a edição
  };

  const removerContato = (id: number) => {
    setContatos(contatos.filter(c => c.id !== id));
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <FormularioContato 
        contatoAtual={contatoAtual} 
        onAdicionar={adicionarContato} 
        onEditar={editarContato}
      />
      <ListaContatos 
        contatos={contatos} 
        onEditar={setContatoAtual} 
        onRemover={removerContato} 
      />
    </div>
  );
};

export default App;
