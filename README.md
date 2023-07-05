# Modelo Person.js

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/seu-usuario/seu-repositorio.svg)](https://github.com/seu-usuario/seu-repositorio/issues)
[![GitHub stars](https://img.shields.io/github/stars/seu-usuario/seu-repositorio.svg)](https://github.com/seu-usuario/seu-repositorio/stargazers)

Este é um projeto de API que utiliza o Node.js, o framework Express.js e o banco de dados MongoDB para criar, ler, atualizar e excluir informações de pessoas (person). O projeto possui um modelo chamado Person e uma rota para manipular os dados.

## Pré-requisitos
- Node.js instalado
- Banco de dados MongoDB

## Configuração
1. Clone o repositório ou faça o download dos arquivos do projeto.
2. Instale as dependências do projeto executando o seguinte comando no diretório raiz do projeto:

## npm install

3. Abra o arquivo `index.js` e localize a linha onde ocorre a conexão com o banco de dados MongoDB. No exemplo fornecido, a conexão está sendo feita através do seguinte URI:


## Lembre-se de trocar pelo seu username e sua password 
mongodb+srv://<username>:<password>@apicluster.ujpux3p.mongodb.net/bancodaapi?retryWrites=true&w=majority

Você precisará substituir essa URI pelo endereço do seu banco de dados MongoDB. Certifique-se de ter as permissões adequadas e que o banco de dados esteja online.

## Executando o projeto
Após realizar as configurações necessárias, você pode iniciar o servidor executando o seguinte comando no diretório raiz do projeto:

## npm start

Isso iniciará o servidor na porta 3000. Você poderá acessar a API através do endpoint `http://localhost:3000/person`.

## Endpoints
A API possui os seguintes endpoints para manipulação dos dados:

### Inserção de dados
- URL: `/person`
- Método: `POST`
- Parâmetros do corpo da requisição:
  - `name` (String, obrigatório): Nome da pessoa.
  - `salary` (Number): Salário da pessoa.
  - `approved` (Boolean): Indica se a pessoa está aprovada.
- Exemplo de requisição:
  ```json
  {
    "name": "John Doe",
    "salary": 2500,
    "approved": true
  }

 ## Resposta de sucesso:
Código: 201 (Created)
Corpo da resposta:

`{
  "message": "Pessoa inserida com sucesso"
}`

Resposta de erro:
Código: 422 (Unprocessable Entity)
Corpo da resposta:

`{
  "error": "nome"
}`

## Leitura de dados 

- URL: `/person`
- Método: `GET`
- Resposta de sucesso:
- Código: 200 (OK)
- Corpo da resposta:
- Exemplo de requisição:
  ```json
  [
  {
    "_id": "60e2bafcc7e3a8a89e78a6b7",
    "name": "John Doe",
    "salary": 2500,
    "approved": true
  },
  {
    "_id": "60e2bb12c7e3a8a89e78a6b8",
    "name": "Jane Smith",
    "salary": 3000,
    "approved": false
  }
]
 
