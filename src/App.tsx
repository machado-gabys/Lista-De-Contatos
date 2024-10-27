// src/App.tsx
import './App.css';
import Main from './Main'; // Importando o componente Main que contém a lógica da aplicação

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
