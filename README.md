# Codi quiz API

REST API que expõe rotas para listar quizzes, obter as perguntas de determinado quiz e verificar as respostas do usuário.

## Para subir o projeto localmente

1.  Instale as dependências utilizando seu gerenciador de pacotes favoritos:  
    `npm install`  
    ou  
    `yarn install` (a partir daqui vou usar como exemplo o yarn)

2.  Defina as variáveis de ambiente:  
     Copie o arquivo de exemplo.  
     `cp src/.env.example src/.env`

    Então defina as variáveis referente ao seu banco de dados.
    SERVER_PORT=4000  
    DB_USER=root  
    DB_PASSWD=qwe123  
    DB_DATABASE=codi_quiz  
    DB_HOST=localhost  
    DB_DIALECT=mysql

    OBS: A aplicação criará todas as tabelas necessárias, mas o banco de dados precisa já existir.

3.  Rode o seeder para evitar a fadiga e popular o banco:  
    `yarn db:seed`

4.  Rode a aplicação:  
    Para desenvolvimento com hot reload:
    `yarn dev`

    Para simplesmente rodar:
    `yarn start`

    Para rodar em produção:
    `yarn build` e `yarn prd`

## Estrutura do banco (modelo de classes)

<div align="center">
  <img src="/assets/class_diagram.png" width="100%" />
</div>

## Tecnologias utilizadas

typescript@^5.7.3: Tipagem.  
express@^4.21.2: Utilizado para servir a API.  
sequelize@^6.37.5: ORM utilizado para interação com o banco de dados.  
mysql2@^3.12.0: Driver escolhido e utilizado pelo sequelize. Sendo possível instalar e utilizar outros.
