// src/App.tsx
import Main from './Main';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minha Lista de Contatos</h1> {/* Título da aplicação */}
        <Main /> {/* Renderiza o componente Main */}
      </header>
    </div>
  );
}

export default App;
