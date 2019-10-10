# BlueWheater - Cards do tempo

Este projeto é a etapa 2 da entrevista de trabalho da Conta Azul, onde você pode encontrar os requisitos e a descrição abaixo

## Descrição 

Precisamos construir uma aplicação para exibir a temperatura atual de 3 cidades diferentes.

A aplicação deve respeitar a seguinte especificação:

1- Exibir as condições climáticas das seguintes cidades:
1- Nuuk/GL, Urubici/BR e Nairobi/KE
1- Temperatura deve ser exibidas em graus Celsius
1- Umidade deve ser exibida em percentual
1- Pressão deve ser exibida em hectoPascal
1- Temperaturas igual ou abaixo de 5 graus devem ser exibidas em azul
1- Temperaturas acima de 5 graus e igual ou abaixo de 25 devem ser exibidas em laranja
1- Temperaturas acima de 25 graus devem ser exibidas em vermelho
1- As condições climáticas devem ser atualizadas a cada 10 minutos
1- As condições climáticas devem ser cacheadas no front1-end por 10 minutos
1- Sugerimos o uso da seguinte API: https://openweathermap.org


## Sobre este projeto

O projeto foi feito com Javascript, usando o framework Vue.js. O Vue.js é um framework progressivo à medida que você precisa, usei-o para um desenvolvimento mais rápido, além do que é uma ótima maneira de fazer projetos reutilizáveis, usando a metodologia de componentes da web.


Para fazer solicitações http, usei uma lib chamada axios, sei que a API de busca é nativa, mas a API de busca se torna um pouco chata de lidar, pois não possui interceptores de HTTP por padrão e não podemos fazer uma instância, por isso não podemos criar um plugin para o vue.

Devido ao pequeno escopo do projeto, não usei o padrão de fluxo, o que no vue é chamado de vuex, mas, para isso, é incrivelmente fácil, pois possui componentes que estão ouvindo e aguardando dados. O refator do código exige uma quantidade mínima de esforço.


## Começando

Para executar o projeto, você deve seguir as etapas abaixo:

`` shell
git clone <repo:origin> <repo-dir>
cd <repo-dir>
npm install
npm run dev
`` ``

## Controle de versão

Eu uso o [SemVer] (http://semver.org/) para versionar.

## Autores

- ** Manoel Freitas ** - _ Trabalho inicial_ - [manoel-freitas] (https://github.com/manoel-freitas)

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md] (LICENSE.md) para obter detalhes