import * as dotenv from "dotenv";
import { startDatabase } from "..";
import { Quiz } from "../models/quiz";
import { Question } from "../models/question";
import { Answer } from "../models/answer";
dotenv.config();

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const seedDatabase = async () => {
  try {
    await startDatabase();

    const quizzes = [
      {
        name: "Conceitos e lógica de programação",
        cover_url:
          "https://miro.medium.com/v2/resize:fit:1400/0*0m1rX0H-N0QzUVDZ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie lacus egestas tincidunt lacinia. Vivamus feugiat velit ut feugiat gravida.",
        questions: [
          {
            label: "Qual é o principal objetivo de um algoritmo?",
            answers: [
              { label: "a) Armazenar dados em uma estrutura de dados." },
              {
                label:
                  "b) Resolver um problema através de uma sequência de passos lógicos.",
              },
              { label: "c) Executar tarefas repetitivas em um sistema." },
              { label: "d) Organizar informações em uma tabela." },
            ],
          },
          {
            label: "O que é uma variável em programação?",
            answers: [
              { label: "a) Um tipo de função que retorna dados." },
              { label: "b) Um espaço na memória que armazena um valor." },
              {
                label:
                  "c) Um tipo de estrutura de dados usada para armazenar listas.",
              },
              { label: "d) Um comando de controle de fluxo." },
            ],
          },
          {
            label:
              "O que significa a palavra-chave `if` em uma linguagem de programação?",
            answers: [
              { label: "a) Realizar uma operação de soma." },
              { label: "b) Criar uma função." },
              { label: "c) Condicionalmente executar um bloco de código." },
              { label: "d) Realizar uma iteração em uma lista." },
            ],
          },
          {
            label:
              "Qual é a estrutura de controle usada para executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
            answers: [
              { label: "a) `if`" },
              { label: "b) `for`" },
              { label: "c) `while`" },
              { label: "d) `switch`" },
            ],
          },
          {
            label: "Em programação, o que é um *loop infinito*?",
            answers: [
              { label: "a) Um loop que nunca executa." },
              { label: "b) Um loop que executa apenas uma vez." },
              {
                label:
                  "c) Um loop que se repete indefinidamente, geralmente devido a uma condição sempre verdadeira.",
              },
              {
                label:
                  "d) Um loop que termina após um número fixo de repetições.",
              },
            ],
          },
        ],
      },

      {
        name: "Teste seu nível de conhecimento com Javascript",
        cover_url:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*FXxXHe5eVfn1T4Rf.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie lacus egestas tincidunt lacinia.",
        questions: [
          {
            label:
              "Qual é o operador usado para comparação de igualdade em JavaScript?",
            answers: [
              { label: "a) `==`" },
              { label: "b) `=`" },
              { label: "c) `===`" },
              { label: "d) `!=`" },
            ],
          },
          {
            label: "O que significa a palavra-chave `const` em JavaScript?",
            answers: [
              {
                label:
                  "a) Define uma variável com valor constante que pode ser alterado.",
              },
              {
                label:
                  "b) Define uma variável cujo valor não pode ser alterado.",
              },
              { label: "c) Define uma função de constante." },
              { label: "d) Define um tipo de dado fixo." },
            ],
          },
          {
            label:
              "O que acontece se você tentar acessar uma variável não declarada em JavaScript?",
            answers: [
              { label: "a) O JavaScript gera um erro de execução." },
              { label: "b) O JavaScript retorna `undefined`." },
              { label: "c) O JavaScript automaticamente declara a variável." },
              { label: "d) O JavaScript retorna `null`." },
            ],
          },
          {
            label: "Qual é a diferença entre `let` e `var` em JavaScript?",
            answers: [
              {
                label:
                  "a) `var` tem escopo de bloco e `let` tem escopo de função.",
              },
              {
                label:
                  "b) `let` tem escopo de bloco e `var` tem escopo de função.",
              },
              { label: "c) Não há diferença entre `let` e `var`." },
              { label: "d) `let` é uma palavra-chave obsoleta em JavaScript." },
            ],
          },
          {
            label:
              "Qual dos seguintes métodos é utilizado para adicionar um item no final de um array em JavaScript?",
            answers: [
              { label: "a) `push()`" },
              { label: "b) `pop()`" },
              { label: "c) `shift()`" },
              { label: "d) `unshift()`" },
            ],
          },
        ],
      },

      {
        name: "Teste seu nível de conhecimento com Python",
        cover_url:
          "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie lacus egestas tincidunt lacinia.",
        questions: [
          {
            label:
              "Qual das alternativas abaixo é a forma correta de declarar uma variável em Python?",
            answers: [
              { label: "a) `int x = 10`" },
              { label: "b) `x = 10`" },
              { label: "c) `var x = 10`" },
              { label: "d) `let x = 10`" },
            ],
          },
          {
            label: "O que a função `len()` faz em Python?",
            answers: [
              { label: "a) Retorna o comprimento de uma string ou coleção." },
              {
                label:
                  "b) Cria uma nova lista com o mesmo tamanho da original.",
              },
              { label: "c) Converte uma lista em uma string." },
              { label: "d) Adiciona um item a uma lista." },
            ],
          },
          {
            label:
              "Qual é o operador utilizado para concatenar strings em Python?",
            answers: [
              { label: "a) `+`" },
              { label: "b) `*`" },
              { label: "c) `.`" },
              { label: "d) `&`" },
            ],
          },
          {
            label: "Em Python, o que é uma lista?",
            answers: [
              { label: "a) Uma sequência de valores imutáveis." },
              {
                label:
                  "b) Um tipo de estrutura de dados que armazena dados em uma ordem específica.",
              },
              { label: "c) Uma função que retorna um valor." },
              {
                label:
                  "d) Uma estrutura de dados que permite apenas valores numéricos.",
              },
            ],
          },
          {
            label:
              "Qual é o método correto para adicionar um item ao final de uma lista em Python?",
            answers: [
              { label: "a) `list.append(item)`" },
              { label: "b) `list.add(item)`" },
              { label: "c) `list.push(item)`" },
              { label: "d) `list.insert(item)`" },
            ],
          },
        ],
      },
      {
        name: "Conceitos de Cibersegurança",
        cover_url:
          "https://www.tecmobile.com.br/wp-content/uploads/2022/02/ciberseguranca-scaled-1.jpg",
        description:
          "Teste seus conhecimentos sobre os fundamentos de segurança cibernética e práticas de proteção de informações.",
        questions: [
          {
            label: "O que é phishing?",
            answers: [
              { label: "a) Uma técnica de ataque que tenta adivinhar senhas." },
              {
                label:
                  "b) Um método de engenharia social para enganar usuários e obter informações confidenciais.",
              },
              { label: "c) Um ataque que explora vulnerabilidades de rede." },
              { label: "d) Uma técnica para invadir sistemas operacionais." },
            ],
          },
          {
            label: "O que significa o princípio do menor privilégio?",
            answers: [
              {
                label:
                  "a) Garantir que todos os usuários tenham privilégios administrativos.",
              },
              {
                label:
                  "b) Conceder apenas as permissões necessárias para que um usuário ou sistema execute suas funções.",
              },
              {
                label:
                  "c) Impedir que os administradores modifiquem configurações do sistema.",
              },
              { label: "d) Fornecer acesso ilimitado para todos os usuários." },
            ],
          },
          {
            label: "O que é uma VPN?",
            answers: [
              { label: "a) Um tipo de firewall que protege contra malware." },
              {
                label:
                  "b) Uma rede privada virtual que cria um túnel seguro entre dispositivos e redes.",
              },
              { label: "c) Um software de proteção de antivírus." },
              { label: "d) Uma técnica para criptografar arquivos no disco." },
            ],
          },
          {
            label:
              "Qual dessas é uma prática de segurança cibernética eficiente?",
            answers: [
              { label: "a) Usar a mesma senha em todas as contas." },
              { label: "b) Atualizar regularmente os softwares e sistemas." },
              { label: "c) Desativar firewalls para melhorar o desempenho." },
              { label: "d) Compartilhar credenciais com colegas de trabalho." },
            ],
          },
          {
            label: "O que é um ataque de força bruta?",
            answers: [
              {
                label:
                  "a) Uma tentativa de adivinhar credenciais testando todas as combinações possíveis.",
              },
              {
                label:
                  "b) Um ataque que desativa servidores usando tráfego excessivo.",
              },
              {
                label: "c) Uma técnica para infectar computadores com malware.",
              },
              {
                label:
                  "d) Um ataque que explora vulnerabilidades no sistema operacional.",
              },
            ],
          },
        ],
      },
      {
        name: "Conceitos de DevOps",
        cover_url:
          "https://community.aws/raw-post-images/concepts/devops-essentials/images/devops_loop.jpeg?imgSize=1600x960",
        description:
          "Avalie seus conhecimentos sobre a cultura DevOps e suas práticas principais.",
        questions: [
          {
            label: "O que significa DevOps?",
            answers: [
              { label: "a) Uma metodologia de gerenciamento de projetos." },
              {
                label:
                  "b) Uma cultura que integra desenvolvimento e operações para melhorar a entrega de software.",
              },
              { label: "c) Um framework de desenvolvimento de software." },
              { label: "d) Uma técnica de automação de testes." },
            ],
          },
          {
            label: "Qual é o principal objetivo do CI/CD?",
            answers: [
              { label: "a) Garantir a segurança de sistemas." },
              { label: "b) Automatizar e acelerar a entrega de software." },
              { label: "c) Gerenciar servidores em produção." },
              { label: "d) Monitorar logs de aplicações." },
            ],
          },
          {
            label: "O que é infraestrutura como código (IaC)?",
            answers: [
              { label: "a) Um método de configurar hardware manualmente." },
              {
                label:
                  "b) A prática de gerenciar infraestrutura através de código.",
              },
              { label: "c) Uma técnica de desenvolver software em nuvem." },
              { label: "d) Um tipo de serviço de cloud computing." },
            ],
          },
          {
            label: "Qual das ferramentas abaixo é usada em DevOps?",
            answers: [
              { label: "a) Jenkins" },
              { label: "b) Kubernetes" },
              { label: "c) Docker" },
              { label: "d) Todas as alternativas acima." },
            ],
          },
          {
            label: "O que é um pipeline de CI/CD?",
            answers: [
              { label: "a) Um processo de análise de dados em sistemas." },
              {
                label:
                  "b) Um fluxo de automação para integração e entrega contínua.",
              },
              { label: "c) Um método de monitorar servidores em produção." },
              { label: "d) Uma técnica de configuração de redes." },
            ],
          },
        ],
      },
    ];

    for (let q of quizzes) {
      await Quiz.create(q, {
        include: [
          {
            model: Question,
            include: [Answer],
          },
        ],
      });
    }

    const a = await Answer.findOne({
      where: {
        label:
          "b) Resolver um problema através de uma sequência de passos lógicos.",
      },
    }).then((a: any) => a.id);

    console.log(a);

    const correctAnswers = [
      // Quiz: Conceitos e lógica de programação
      {
        quizName: "Conceitos e lógica de programação",
        questionLabel: "Qual é o principal objetivo de um algoritmo?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label:
              "b) Resolver um problema através de uma sequência de passos lógicos.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos e lógica de programação",
        questionLabel: "O que é uma variável em programação?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "b) Um espaço na memória que armazena um valor.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos e lógica de programação",
        questionLabel:
          "O que significa a palavra-chave `if` em uma linguagem de programação?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "c) Condicionalmente executar um bloco de código.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos e lógica de programação",
        questionLabel:
          "Qual é a estrutura de controle usada para executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "c) `while`",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos e lógica de programação",
        questionLabel: "Em programação, o que é um *loop infinito*?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label:
              "c) Um loop que se repete indefinidamente, geralmente devido a uma condição sempre verdadeira.",
          },
        }).then((a: any) => a.id),
      },

      // Quiz: Teste seu nível de conhecimento com Javascript
      {
        quizName: "Teste seu nível de conhecimento com Javascript",
        questionLabel:
          "Qual é o operador usado para comparação de igualdade em JavaScript?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "a) `==`",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Teste seu nível de conhecimento com Javascript",
        questionLabel: "O que significa a palavra-chave `const` em JavaScript?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "b) Define uma variável cujo valor não pode ser alterado.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Teste seu nível de conhecimento com Javascript",
        questionLabel:
          "O que acontece se você tentar acessar uma variável não declarada em JavaScript?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "b) O JavaScript retorna `undefined`.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Teste seu nível de conhecimento com Javascript",
        questionLabel: "Qual é a diferença entre `let` e `var` em JavaScript?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "b) `let` tem escopo de bloco e `var` tem escopo de função.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Teste seu nível de conhecimento com Javascript",
        questionLabel:
          "Qual dos seguintes métodos é utilizado para adicionar um item no final de um array em JavaScript?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "a) `push()`",
          },
        }).then((a: any) => a.id),
      },

      // Quiz: Teste seu nível de conhecimento com Python
      {
        quizName: "Teste seu nível de conhecimento com Python",
        questionLabel:
          "Qual das alternativas abaixo é a forma correta de declarar uma variável em Python?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "b) `x = 10`",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Teste seu nível de conhecimento com Python",
        questionLabel: "O que a função `len()` faz em Python?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "a) Retorna o comprimento de uma string ou coleção.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Teste seu nível de conhecimento com Python",
        questionLabel:
          "Qual é o operador utilizado para concatenar strings em Python?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "a) `+`",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Teste seu nível de conhecimento com Python",
        questionLabel: "Em Python, o que é uma lista?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label:
              "b) Um tipo de estrutura de dados que armazena dados em uma ordem específica.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Teste seu nível de conhecimento com Python",
        questionLabel:
          "Qual é o método correto para adicionar um item ao final de uma lista em Python?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "a) `list.append(item)`",
          },
        }).then((a: any) => a.id),
      },
      // Quiz: Conceitos de Cibersegurança
      {
        quizName: "Conceitos de Cibersegurança",
        questionLabel: "O que é phishing?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label:
              "b) Um método de engenharia social para enganar usuários e obter informações confidenciais.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos de Cibersegurança",
        questionLabel: "O que significa o princípio do menor privilégio?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label:
              "b) Conceder apenas as permissões necessárias para que um usuário ou sistema execute suas funções.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos de Cibersegurança",
        questionLabel: "O que é uma VPN?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label:
              "b) Uma rede privada virtual que cria um túnel seguro entre dispositivos e redes.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos de Cibersegurança",
        questionLabel:
          "Qual dessas é uma prática de segurança cibernética eficiente?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "b) Atualizar regularmente os softwares e sistemas.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos de Cibersegurança",
        questionLabel: "O que é um ataque de força bruta?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label:
              "a) Uma tentativa de adivinhar credenciais testando todas as combinações possíveis.",
          },
        }).then((a: any) => a.id),
      },

      // Quiz: Conceitos de DevOps
      {
        quizName: "Conceitos de DevOps",
        questionLabel: "O que significa DevOps?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label:
              "b) Uma cultura que integra desenvolvimento e operações para melhorar a entrega de software.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos de DevOps",
        questionLabel: "Qual é o principal objetivo do CI/CD?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "b) Automatizar e acelerar a entrega de software.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos de DevOps",
        questionLabel: "O que é infraestrutura como código (IaC)?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label:
              "b) A prática de gerenciar infraestrutura através de código.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos de DevOps",
        questionLabel: "Qual das ferramentas abaixo é usada em DevOps?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label: "d) Todas as alternativas acima.",
          },
        }).then((a: any) => a.id),
      },
      {
        quizName: "Conceitos de DevOps",
        questionLabel: "O que é um pipeline de CI/CD?",
        correctAnswerIndex: await Answer.findOne({
          where: {
            label:
              "b) Um fluxo de automação para integração e entrega contínua.",
          },
        }).then((a: any) => a.id),
      },
    ];

    for (let a of correctAnswers) {
      const question = await Question.findOne({
        where: { label: a?.questionLabel },
      });

      question.correctAnswerId = a?.correctAnswerIndex;
      await question.save();
    }

    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();

export {};
