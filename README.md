# API Rincão Sonoro

Esta API foi desenvolvida para fornecer acesso a dados de músicas e artistas da plataforma **Rincão Sonoro**, permitindo consultas e gerenciamento básico de informações musicais.

## Objetivo
O principal objetivo desta API é disponibilizar informações sobre músicas e artistas gaúchos, sem seguir um modelo CRUD tradicional. Como a adição de novas músicas é feita exclusivamente por mim, optei por implementar apenas rotas **GET** e **POST**, protegendo a adição de dados com uma senha para evitar alterações indesejadas.

## Funcionalidades
- **Retornar todas as músicas** cadastradas na plataforma.
- **Buscar um artista por ID** e listar suas informações.
- **Buscar uma música por ID** para acessar seus detalhes.
- **Listar todas as músicas de um artista**.
- **Adicionar novas músicas e artistas**, necessitando de uma senha para autenticação.

## Tecnologias Utilizadas
Para garantir eficiência, escalabilidade e facilidade de manutenção, utilizei as seguintes tecnologias:
- **Node.js** - Para o desenvolvimento do backend.
- **Express** - Framework minimalista para gerenciar as rotas e requisições.
- **Prisma** - ORM para interagir com o banco de dados de forma eficiente.
- **CORS** - Configurado para permitir acessos seguros à API.
- **Path** - Para manipulação de caminhos de arquivos no servidor.
- **Vercel** - Hospedagem rápida e confiável para disponibilizar a API publicamente.

## Estrutura da API
Tentei seguir uma estrutura organizada e modular para facilitar futuras manutenções e adição de novos conteúdos. O projeto está dividido em pastas, separando controladores, rotas e configurações do Prisma.

## Desafios Enfrentados
O maior desafio foi **implantar a API na Vercel**, pois enfrentei problemas com o **Prisma Client** ao conectar com o banco de dados. Foi necessário realizar ajustes para garantir compatibilidade e estabilidade no ambiente de produção.

## Como Usar a API
Esta API é **pública**, qualquer um pode utilizá-la para praticar requisições a uma API real. 
A documentação completa e exemplos de uso podem ser encontrados no seguinte link:
🔗 [API Rincão Sonoro](https://api-rincao-sonoro.vercel.app)

## Relacionado
Esta API foi criada para o projeto da plataforma **Rincão Sonoro**, que pode ser acessado aqui:
🔗 [Repositório do Rincão Sonoro](https://github.com/ViniciusDizatnikis/Rincao-Sonoro?tab=readme-ov-file)
