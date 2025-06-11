# 🧙‍♂️ Dota 2 Hero Explorer

Este é um aplicativo mobile desenvolvido em **React Native** e **Expo** com o objetivo de praticar o consumo de APIs públicas, utilizando **React Navigation** para navegação entre telas.

> Um app mobile feito com **React Native** que permite explorar heróis do Dota 2 via OpenDota API. Inspirado em um grimório digital, com design temático e responsivo.

> ⚙️ **Sobre a API**
>
> Este projeto utiliza a [OpenDota API](https://docs.opendota.com/) para buscar informações sobre os heróis do jogo Dota 2.
>
> A consulta é feita por meio de uma requisição HTTP GET ao seguinte endpoint:
>
> ```
> https://api.opendota.com/api/heroStats
> ```
>
> A resposta retorna um array de objetos contendo diversos atributos de cada herói, incluindo:
>
> - `localized_name`: Nome do herói
> - `img`: Imagem (ícone)
> - `primary_attr`: Atributo principal (`str`, `agi`, `int`, `all`)
> - `attack_type`: Tipo de ataque (`Melee` ou `Ranged`)
> - `roles`: Papeis possíveis do herói (ex: Support, Carry, Nuker)
> - `base_health`: Vida base do herói
> - `move_speed`: Velocidade de movimento

---

## 📜 Descrição da Proposta

> “Para um trabalho da faculdade, o desafio foi desenvolver um aplicativo mobile utilizando React Native e React Navigation.  
> A proposta consistia em consumir dados de uma API pública de forma criativa e funcional, apresentando informações relevantes de forma interativa.”
>
> Neste projeto, o universo escolhido foi o do jogo Dota 2, onde os heróis são tratados como entidades lendárias — cada um com seus atributos, histórias e especialidades. O aplicativo convida o usuário a navegar por esse catálogo mítico. A ideia proposta nesta atividade, foi explorar a API OpenDota para listar heróis e apresentar suas informações básicas, criando uma experiência envolvente e temática.

---

## 🎨 Design e Estilo
Inspirado pela estética do universo de Dota 2, a identidade visual do app mistura tons escuros, avermelhados e elementos arredondados para criar uma interface que remete a um grimório digital de heróis. A experiência combina o tom técnico da consulta a dados com a imersão visual de um mundo de fantasia e estratégia.

> Abaixo do logotipo do jogo, uma breve descrição convida o usuário a mergulhar no mundo dos heróis, como se estivesse desbravando arquivos secretos da guerra entre as antigas forças de Radiant e Dire.

---

### 🎨🖼️ Elementos de Estilo

- **🎨 Paleta de Cores**
  - `#0d0d0d` – fundo principal, simulando uma arena sombria.
  - `#1a1a1a` – cartões e painéis, para diferenciar seções com sutileza.
  - `#ff4d4d` – vermelho intenso usado em destaques, bordas e sombras.
  - `#b3b3b3` – cinza claro para textos informativos.
  - `#ffffff` – branco puro para contrastes principais.

- **🧩 Componentes Personalizados**  
   - Avatar/logo do Dota 2 com borda circular vermelha e sombra mágica.
  - Tipografia clara com espaçamento confortável.
  - Lista dos heróis com toque interativo (TouchableOpacity) e transição suave.
  - Tela de detalhes com imagem e atributos principais destacados.
  - Scroll da lista de heróis com `showsVerticalScrollIndicator={false}` para esconder a barra lateral padrão, oferecendo uma aparência mais limpa e imersiva.
  - Introdução abaixo do logo como convite ao universo do jogo, em tom narrativo/fantástico.
---

## 💡 Funcionalidades
-  Tela inicial com logo animada e descrição do projeto.
- Lista completa dos heróis de Dota 2, exibindo seus nomes.
- Navegação para a tela de detalhes do herói:
  - Nome e imagem
  - Atributo principal
  - Tipo de ataque
  - Funções (roles)
  - Dois atributos extras escolhidos pela Aluna
- Carregamento com feedback visual.
- Interface pensada para mobile (UX responsivo).

---

## 📱 Tecnologias Utilizadas

- ⚛️ React Native
- 🔗 Expo
- 🧙‍♀️ OpenDota REST API
- 💻 JavaScript
- ⚙️ Node.js
- 🧭 React Navigation
- 🎨 Estilização com StyleSheet do React Native

---

## 🗂️ Estrutura do Projeto
```bash

📁 AppDota2
┣ 📁 componentes
┃ ┣ 📁 img
┃ ┃  ┗ 🖼️ image.png // Logo do Jogo Dota
┃ ┗ 📁 screens
┃   ┣ 📄 HomeScreen.js // Lista de heróis
┃   ┗ 📄 DetailsScreen.js // Detalhes do herói selecionado
┣ App.js → Entrada principal do app com navegação
┣ babel.config.js
┗ README.md → Este documento

---

## 🔧 Como Executar

### 1️⃣ Clone este repositório:
```bash
git clone https://github.com/ssaralopes/app-dota2.git
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
> Este projeto não é afiliado ao Dota 2 ou à Valve Corporation. Todos os dados são fornecidos pela [OpenDota API](https://www.opendota.com/), de uso público.


 > **Por limitações da plataforma de envio, o projeto foi disponibilizado via GitHub.**

---

💻 Desenvolvido por
Sara Lopes — Aluna do curso de Análise e Desenvolvimento de Sistemas

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ssaralopes)

