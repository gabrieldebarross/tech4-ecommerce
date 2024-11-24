# E-commerce - Projeto Full Stack

Este é um projeto de e-commerce simples com funcionalidades de catálogo de produtos, carrinho de compras, e autenticação de usuários, desenvolvido com Node.js, TypeScript, Express, MySQL, JWT, HTML, CSS e React. O sistema não possui integração com um gateway de pagamento, mas oferece as principais funcionalidades de um e-commerce.

## Tecnologias Utilizadas

- **Backend:**
  - Node.js
  - TypeScript
  - Express
  - MySQL
  - JWT (JSON Web Tokens)
  - dotenv (para variáveis de ambiente)

- **Frontend:**
  - React
  - HTML
  - CSS

## Funcionalidades

### Backend:
- **Autenticação de Usuários:**
  - Registro de novos usuários
  - Login de usuários existentes
  - Armazenamento seguro de senhas com bcrypt
  - Geração e verificação de JWT para autenticação
- **Catálogo de Produtos:**
  - Listagem de produtos (com dados como nome, preço, descrição, imagem)
  - Adicionar novos produtos ao catálogo
  - Editar produtos existentes
  - Remover produtos
- **Carrinho de Compras:**
  - Adicionar produtos ao carrinho
  - Editar quantidade de itens no carrinho
  - Remover itens do carrinho
  - Visualizar conteúdo do carrinho

### Frontend:
- **Interface de Catálogo de Produtos**
  - Exibição de lista de produtos
  - Opções de adicionar, editar e remover produtos (somente para administradores)
- **Carrinho de Compras:**
  - Adicionar e remover produtos
  - Mostrar total do carrinho
- **Login e Registro de Usuários**
  - Tela de login
  - Tela de registro