
# Project Talker Manager :microphone:

<details>
<summary>:brazil: Português</summary>

## Descrição

Projeto desenvolvido durante o terceiro módulo (desenvolvimento back-end) do curso da Trybe.

## Objetivo

Construir uma aplicação de cadastro de palestrantes em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso, foi desenvolvido uma API de um CRUD e alguns endpoints para ler e escrever em arquivos utilizando o módulo `fs`.

## Stacks utilizadas

* **Back-end:** Express, JavaScript, Node.js
* **Plataforma:** Docker

## Rodando localmente

* Instale os containers docker:

`npm run compose:up`

* Execute o terminal do container:

`docker attach talker_manager`

* Inicialize a aplicação:

`npm start`

## Rotas

**Login**

| Requisição   | URL       
| :---------- | :-------
| `POST` | http://localhost:3000/login

**Talker**

| Requisição   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/talker
| `GET` | http://localhost:3000/talker/search
| `GET` | http://localhost:3000/talker/:id
| `POST` | http://localhost:3000/talker
| `PUT` | http://localhost:3000/talker/:id
| `DELETE` | http://localhost:3000/talker/:id

</details>

<details>
<summary>:us: English</summary>

## Description

Project developed during the third module (back-end development) of the Trybe course.

## Objective

Build a speaker registration application in which it's possible to register, view, search, edit and delete information. For this, a CRUD API and some endpoints to read and write files using the `fs` module were developed.

## Stacks

* **Back-end:** Express, JavaScript, Node.js
* **Platform:** Docker

## Running the application locally

* Install the docker containers:

`npm run compose:up`

* Run the container terminal:

`docker attach talker_manager`

* Start the application:

`npm start`

## Endpoints

**Login**

| Requisição   | URL       
| :---------- | :-------
| `POST` | http://localhost:3000/login

**Talker**

| Requisição   | URL       
| :---------- | :-------
| `GET` | http://localhost:3000/talker
| `GET` | http://localhost:3000/talker/search
| `GET` | http://localhost:3000/talker/:id
| `POST` | http://localhost:3000/talker
| `PUT` | http://localhost:3000/talker/:id
| `DELETE` | http://localhost:3000/talker/:id

</details>



