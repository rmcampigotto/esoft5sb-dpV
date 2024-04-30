# Documentação Do Backend

## Rotas: 

-> No momento, as rotas só esão sendo usadas para teste através do Postman

## Entidades:

-> CHARACTER | Criada | Finalizada (Aberto para ajustes)<br/>
-> COMIC | Não Criada |<br/>
-> CREATORS | Não Criada |<br/>

## Etapa do desenvolvimento:

-> No commit do dia 30/04/2024 - Finalizei a entidade CHARACTER (Até o momento, finalizei as funções que precisamos para montar o site)

## OBS:

-> No arquivo character.controller.ts | linha 25 e 26:<br/>
> Na hora de passar a url para o object que criei, não estava aceitando por conta do StingConstructor, mas adicionando o // @ts-ignore foi possível seguir sem problemas
<br/>

> A string que adicionei (/standard_fantastic.jpg) na url que vem da API da Marvel serve para carregar a imagem corretamente, visto que sem ela o link apenas retorna Not Found
