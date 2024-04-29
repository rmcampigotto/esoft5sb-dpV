# Documentação Do Backend

## Rotas: 

-> No momento, as rotas só esão sendo usadas para teste através do Postman

## Entidades:

-> CHARACTER | Criada | Em Desenvolvimento<br/>
-> COMIC | Não Criada |<br/>
-> CREATORS | Não Criada |<br/>

## Etapa do desenvolvimento:

-> No commit do dia 29/04/2024 - Implementei o CRUD para a entidade de CHARACTER, junto com a função para armazenar o nome, descrição e link da imagem para cada um | Fiz somente para a saga Spider-Verse (2014 - 2015) no momento

## OBS:

-> No arquivo character.controller.ts | linha 25 e 26:<br/>
> Na hora de passar a url para o object que criei, não estava aceitando por conta do StingConstructor, mas adicionando o // @ts-ignore foi possível seguir sem problemas
<br/>

> A string que adicionei (/standard_fantastic.jpg) na url que vem da API da Marvel serve para carregar a imagem corretamente, visto que sem ela o link apenas retorna Not Found
