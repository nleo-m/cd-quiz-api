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
