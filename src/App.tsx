// src/App.tsx
import { useEffect, useState } from 'react';
import FormularioContato from './components/FormularioContato';
import ListaContatos from './components/ListaContato';
import { ContatoProps } from './components/interfaces/IContato';
import './styles/App.css';

function App() {
  const [contatos, setContatos] = useState<ContatoProps[]>([]);
  const [contatoAtual, setContatoAtual] = useState<ContatoProps | null>(null);

  useEffect(() => {
    const contatosSalvos = localStorage.getItem('contatos');
    if (contatosSalvos) {
      setContatos(JSON.parse(contatosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contatos', JSON.stringify(contatos));
  }, [contatos]);

  const adicionarContato = (contato: ContatoProps) => {
    setContatos(prevContatos => [...prevContatos, contato]);
  };

  const editarContato = (contatoAtualizado: ContatoProps) => {
    setContatos(prevContatos =>
      prevContatos.map(c => (c.id === contatoAtualizado.id ? contatoAtualizado : c))
    );
    setContatoAtual(null);
  };

  const removerContato = (id: string) => {
    setContatos(prevContatos => prevContatos.filter(c => c.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Minha Lista de Contatos</h1>
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
      </header>
    </div>
  );
}

export default App;
