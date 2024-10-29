# Funcionalidades
Adicionar Contato: Adiciona um novo contato com nome e telefone.
Editar Contato: Permite atualizar informações de um contato existente.
Remover Contato: Remove um contato da lista.
Persistência de Dados: Os dados são salvos no localStorage, garantindo que permaneçam após recarregar a página.

# Estrutura do Projeto
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── FormularioContato.tsx       # Componente de formulário de contato
│   │   ├── ListaContato.tsx            # Componente de listagem de contatos
│   │   └── interfaces
│   │       ├── IContato.ts             # Interface de contato
│   │       └── IFormularioContato.ts   # Interface do formulário de contato
│   ├── App.tsx                         # Componente principal da aplicação
│   └── styles
│       └── App.css                     # Estilos da aplicação
└── package.json

# Como Rodar o Projeto

git clone https://github.com/seu-usuario/lista-contatos.git
cd lista-contatos
npm install
npm start
