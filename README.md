# FindMyPlace

Aplicação Web de busca de um local específico no google maps, informando a latitude e a longitude.


## Sobre a aplicação
O projeto foi construído com Angular versão 8, usando Angular CLI.
Para os dados do mapa foi utilizado a API Google Maps.

## Requisitos
Node.js - `https://nodejs.org/pt-br/`<br>
Angular Cli - `https://angular.io/cli`

## Como rodar o projeto

No terminal de sua IDE, baixe o projeto com o comando:  `git clone https://github.com/AdrianoModa/find-my-place.git`<br>
`cd find-my-place`<br> 
Instale as dependencias:<br>
`npm install`<br>

O compilador typescript exigirá configurações adicionais<br>
Edite o arquivo: node_modules\@types\google.maps\index.d.ts
insira: `declare module 'google.maps';`<br>

![typescript-maps-module-github](https://user-images.githubusercontent.com/21965591/127751692-59d97958-33e3-4525-8b94-19280c3b7b78.png)

Rode o projeto:<br>
`ng serve`

No navegador entre em `http://localhost:4200/`e pronto.

## Como utilizar a aplicação

Na tela principal, entre com os campos obrigatórios, a saber: <b>Latitude</b>, <b>Longitude</b> e o <b>Texto</b> a ser exibido. 
O campo <b>Zoom</b> é opcional.

Ao clicar em <b>Buscar</b> o mapa ser redirecionado conforme os dados inseridos. E pra exibir o texto informado, clique no marcador que está no mapa.

## Autor

Nome: Adriano Moda Feitosa<br>
:octocat: Github: https://github.com/AdrianoModa
