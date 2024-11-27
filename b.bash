ecommerce-project/
│
├── backend/               # Código do servidor (Node.js / Express)
│   ├── node_modules/      # Dependências do back-end
│   ├── src/
│   │   ├── controllers/   # Funções de controle das rotas
│   │   ├── models/        # Modelos do banco de dados
│   │   ├── routes/        # Definições de rotas da API
│   │   ├── middlewares/   # Middlewares (como autenticação JWT)
│   │   ├── config/        # Configurações do banco de dados e JWT
│   │   └── app.ts         # Inicialização do servidor
│   ├── .env               # Variáveis de ambiente
│   ├── package.json       # Dependências e scripts do back-end
│   └── tsconfig.json      # Configurações do TypeScript para o back-end
│
├── frontend/              # Código do cliente (React)
│   ├── node_modules/      # Dependências do front-end
│   ├── public/            # Arquivos públicos (index.html, favicon, etc)
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis (ex: Header, Footer, ProductCard)
│   │   ├── pages/         # Páginas (ex: Home, Login, Checkout)
│   │   ├── services/      # Funções para interagir com a API
│   │   ├── App.tsx        # Componente principal
│   │   ├── index.tsx      # Ponto de entrada da aplicação
│   │   └── styles/        # Estilos CSS
│   ├── .env               # Variáveis de ambiente para o front-end
│   ├── package.json       # Dependências e scripts do front-end
│   └── tsconfig.json      # Configurações do TypeScript para o front-end
│
└── .gitignore             # Arquivos a serem ignorados pelo Git
