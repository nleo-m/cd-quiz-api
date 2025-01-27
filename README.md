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

    Defina as variáveis referente ao seu banco de dados:  
    DB_USER=root  
    DB_PASSWD=qwe123  
    DB_DATABASE=codi_quiz  
    DB_HOST=localhost  
    DB_DIALECT=mysql

    OBS: A aplicação criará todas as tabelas necessárias, mas o banco de dados precisa existir de antemão.

    Defina as variáveis referente aos projetos:  
    SERVER_PORT=4000 # porta alocada para essa API  
    FRONT_END_URL=http://localhost:3000 # url do front-end, utilizada para configurar CORS

3.  Rode o seeder para evitar a fadiga e popular o banco:  
    `yarn db:seed`

4.  Rode a aplicação:  
    Para desenvolvimento com hot reload:
    `yarn dev`

    Para simplesmente rodar:
    `yarn start`

    Para rodar em produção:
    `yarn build` e `yarn prd`

## Como utilizar a API

Para mais informações sobre as rotas, seus parâmetros e exemplo de respostas: rode o projeto, e acesse http://localhost:4000/api-docs (lembre-se de utilizar o host e porta corretos) no seu browser.

## Estrutura do banco (modelo de classes)

<div align="center">
  <img src="/assets/class_diagram.png" width="75%" />
</div>

## Tecnologias utilizadas

node@v20.18.0: Runtime.  
typescript@^5.7.3: Tipagem.  
ts-node@^10.9.2: Engine de execução de Typescript.
tsx@^4.19.2: Execução persistente de TypeScript e hot-reload.
express@^4.21.2: Utilizado para servir a API.  
sequelize@^6.37.5: ORM utilizado para interação com o banco de dados.  
mysql2@^3.12.0: Driver escolhido e utilizado pelo sequelize. Sendo possível instalar e utilizar outros.
swagger-jsdoc@^6.2.8 e swagger-ui-express@^5.0.1: Documentação swagger.
