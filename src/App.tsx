// src/App.tsx
import { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FormularioContato from './components/FormularioContato';
import { ContatoProps } from './components/interfaces/IContato';
import ListaContatosPage from './paginas/ListaContatosPag';
import './styles/App.css';

function App() {
  const [contatos, setContatos] = useState<ContatoProps[]>([]);
  const [contatoAtual, setContatoAtual] = useState<ContatoProps | null>(null);

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

  const adicionarContato = (contato: ContatoProps) => {
    const novosContatos = [...contatos, contato];
    setContatos(novosContatos);
    localStorage.setItem('contatos', JSON.stringify(novosContatos)); // Atualiza o localStorage
  };

  const editarContato = (contatoAtualizado: ContatoProps) => {
    const novosContatos = contatos.map(c => (c.id === contatoAtualizado.id ? contatoAtualizado : c));
    setContatos(novosContatos);
    localStorage.setItem('contatos', JSON.stringify(novosContatos)); // Atualiza o localStorage
    setContatoAtual(null);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Minha Lista de Contatos</h1>
          <FormularioContato
            contatoAtual={contatoAtual}
            onAdicionar={adicionarContato}
            onEditar={editarContato}
          />
          {/* Contêiner para centralizar o botão de listar */}
          <div className="lista-button-container">
            <Link to="/lista">
              <button>Listar Contatos</button>
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/lista" element={<ListaContatosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
