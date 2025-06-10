# 🔍 GitHub User Search

Este é um aplicativo mobile desenvolvido em **React Native** e **Expo** com o objetivo de **praticar o consumo de APIs públicas** dentro de uma aplicação, utilizando **React Navigation**.

> ⚙️ **Sobre a API**
>
> Este projeto utiliza a [API pública de usuários do GitHub](https://docs.github.com/pt/rest/users/users?apiVersion=2022-11-28#get-a-user) para consultar informações públicas de qualquer usuário.
>
> A consulta é feita via requisição HTTP GET ao seguinte endpoint:
>
> ```
> https://api.github.com/users/NOME_DO_USUARIO
> ```
>
> A resposta retorna um objeto JSON com diversas informações, incluindo:
>
> - `avatar_url`: URL do avatar (foto de perfil)
> - `name`: Nome completo do usuário
> - `login`: Nome de usuário (username)
> - `bio`: Biografia pública
> - `public_repos`: Número de repositórios públicos
> - `followers`: Total de seguidores
> - `following`: Total de usuários seguidos
>


---

## 📜 Descrição da Proposta

> “Para um trabalho da faculdade, o desafio proposto foi desenvolver um aplicativo mobile utilizando React Native e React Navigation Stack.  
> A ideia seria implementar um componente trabalhado anteriormente em aula, com o objetivo de praticar o consumo de APIs REST dentro de um ambiente React Native e React Navigation”

---

## 🎨 Design e Estilo
A proposta visual deste projeto foi pensada para ir além da funcionalidade técnica. A escolha da paleta de cores roxa remete à ideia de mistério, introspecção e descoberta — alinhando-se à proposta da aplicação: consultar e revelar informações públicas de usuários do GitHub por meio de uma API. O fundo escuro contrasta com tons lavanda e púrpura mais claros, trazendo harmonia e um toque místico à experiência do usuário.

> Elementos visuais como textos com tonalidades suaves, bordas arredondadas e ícones sutis reforçam a identidade visual, criando uma interface intuitiva, elegante e agradável.

---

### 🎨🖼️ Elementos de Estilo

- **🎨 Paleta de Cores**  
  - `#2e003e` – fundo principal, trazendo profundidade e destaque ao conteúdo.  
  - `#3e065f` – fundo de cartões e campos de entrada, para suavizar a transição visual.  
  - `#9f5afd` – roxo vibrante usado em botões e bordas, como cor de ação.  
  - `#d8b4fe` – lavanda clara usada para textos informativos e placeholder, equilibrando contraste e leveza.  
  - `#ffffff` – branco para leitura principal e melhor legibilidade.  
  - `#ff6b81` – vermelho suave para feedback de erro, mantendo a consistência visual.

- **🧩 Componentes Personalizados**  
  - Bordas dos inputs e botões com `borderRadius: 20`, proporcionando um visual mais fluido e amigável.  
  - Avatar do usuário com moldura circular e destaque em roxo claro.  
  - Ícone "🔮" no título como toque lúdico e simbólico da ideia de "consultar" algo oculto ou especial.

---

## 💡 Funcionalidades
- Campo de input para digitar o nome do usuário do GitHub.
- Botão Consultar que dispara a chamada da API.
- Exibição dos dados do usuário:
    - Avatar
    - Nome
    - Nome de usuário 
    - Bio
    - Número de repositórios públicos
    - Seguidores
    - Seguindo
    - Feedback visual de carregamento e mensagens de erro.

---

## 📱 Tecnologias Utilizadas

- 🧠 React Native
- 🔗 Expo
- 🐈‍⬛ GitHub REST API
- 💻 JavaScript
- ⚙️ Node.js
- 🎨 Estilização com StyleSheet do React Native

---

## 🗂️ Estrutura do Projeto
```bash
📁 AppReactNav
┣ 📁 .expo
┣ 📁 componentes
┃ ┣ 📁 Evento.js // Código desenvolvido pelo professor em aula anterior.
┃ ┗ 📁 UsuarioGitHub.js // Código desenvolvido pelo professor em aula anterior.
┣ App.js → Arquivo principal e resolução da Atividade proposta.
┣ Index.js 
┗ README.md → Este documento
```
---

## 🔧 Como Executar

### 1️⃣ Clone este repositório:
```bash
git clone https://github.com/ssaralopes/github-user-search.git
```
### 2️⃣ Instale as dependências:
```bash
npm install  
# ou  
yarn
```
### 3️⃣ Execute no seu emulador ou dispositivo físico:
```bash
npx react-native run-android  
# ou  
npx react-native run-ios
```
### 4️⃣ Executar o projeto no Navegador (Web)
```bash
npx expo start
```
> Após rodar o comando acima e iniciar o servidor, pressione `w` no terminal para abrir o app no browser web.

---

## 📄 Observações
Este projeto foi desenvolvido com fins educacionais, como parte de um desafio acadêmico para prática de desenvolvimento mobile com React Native e implementação de APIs Rest.

 > **Por limitações da plataforma de envio, o projeto foi disponibilizado via GitHub.**

---

💻 Desenvolvido por
Sara Lopes — Aluna do curso de Análise e Desenvolvimento de Sistemas

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ssaralopes)

