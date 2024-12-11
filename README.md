# Projeto Prático - Seleção para Desenvolvedora Web
Este projeto foi desenvolvido como parte de um desafio prático para a seleção de uma vaga de Desenvolvedora Web . 
O objetivo do desafio era criar uma aplicação web com backend em Django , frontend em Angular , e Docker para orquestrar os serviços.
##
### Descrição do Projeto

O projeto consiste em um sistema simples que em

- Backend : Criado com Django e Django REST Framework para fo
- Frontend : Criado com Angular para consumir a API do backend e exibir as informações de forma dinâmica.
- Banco de Dados : O backend utiliza PostgreSQL 
- Docker : O ambiente foi containerizado utilizando **DockeDocker para facilitar a implantação e garantir o serviço

##

## Função
### Backend (Django)
- API RESTful para interagir com os dados
- Utilização de PostgreSQL como banco de dados.
- Endpoints criados para lista
- Configuração do ambiente com Docker para rodar o Django e PostgreSQL.

### Frontend (Angular)
- Interface simples com Angular para login e exibição de dados.
- Consumo da API do backend para e
- Configuração de rotas utilizando Angular Router .

### Tecnologias Utilizadas

- Backend :

  - Django (Python)
  - Estrutura REST do Django
  - PostgreSQL
  - Estivador

- Front-end :

  - Angular (TypeScript)
  - ng2-charts (para gráficos)
  - Angular Material (para componentes da UI)
##

# Desafios Enfrentados

### Durante o desenvolvimento, encontrei alguns desafios técnicos que foram envolvidos da seguinte maneira:


1. Integração do Angular com o Backend Django

- O principal desafio foi integrar o Angular com o backend Django REST Framework . Ao configurar as rotas no Angular, encontro dificuldaderouter-outlet , mas após configurações não app.module.tse importa

2. Problemas de configuração com Docker
   
- A configuração do Docker para os contêineres de backend e frontend foi complexa,Django e PostgreSQL . Porém, utilizando o docker-compose, consegui orquestrar os contêineres com

3. Erro com Gráficos no Angular
   
- Ocorreu um erro relacionado à importação do módulo de gráficos ng2-charts (versão 7.x). A versão mais recente dChartsModule, o problema foi resolvido.

4. Desafios com a Interface do Usuário
   
- A interface do usuário foi criada utilizando Angular Material , mas teve dificuldades em configurar o layout de forma responsiva. Apesar disso, consegui criar uma interface funcional

## O Que Foi Concluído

- Backend : API RESTful criada e integrada com PostgreSQL .
- Front-end :gráficos .
- Docker : configuração de ambiente de desenvolvimento

## O Que Ainda Precisa Ser Feito

Apesar de vários avanços, o projeto não foi concluído na totalidade devido a que

- Aprimoramento da interface de usuário para tornar a aplicação mais r
- Refinamento das rotas no Angular , especialmente na parte de autenticação e proteção de rotas.
-Finalização de gráficos interativos e validação de dados.

### Como Rodar o Projeto

### Pré-requisitos:

- Estivador
- Docker

### Passos para Rodar:

1. Clonar ou repositório:

git clone https://github.com/seu-usuario/stepps-dev-dashboard.git
cd stepps-dev-dashboard

2. Inicie o Docker e execute os contêineres com o docker-compose:

docker-compose up --build

3. Acesse a aplicação

- Back-end:http://localhost:8000
- Front-end:http://localhost:4200

4. Para parar os serviços:

docker-compose down

### Conclusão

Este projeto foi uma excelente oportunidade de aprendizado e aplicação prática de conceitos importantes para desenvolvedores web. Durante o desenvolvimento, pude aprimorar minhas habilidades em integração de frontend com backend, Docker e configuração de APIs RESTful. agradeço pela oportunidade de apresentar este trabalho.
