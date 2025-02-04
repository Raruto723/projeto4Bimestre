# 🎮 Jogo de Adivinhação de Números

Este projeto é um jogo onde o jogador deve adivinhar um número entre 1 e 100. O jogador tem um número limitado de tentativas e pode ganhar pontos ao acertar o número sorteado. O jogo é baseado em um sistema de estágios e oferece feedback dinâmico para manter o jogador engajado.

## 🚀 Funcionalidades

- Sorteio de um número aleatório entre 1 e 100
- Interface interativa com diferentes estágios do jogo
- Sistema de pontuação e recorde
- Feedback visual sobre a proximidade do palpite
- Armazenamento de recordes no `localStorage`
- Gifs e efeitos visuais para melhor experiência do usuário
- Possibilidade de reiniciar o jogo ao final

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React (useState, useEffect, useCallback)
- **Estilização:** CSS
- **Armazenamento de Dados:** `localStorage`
- **Gerenciamento de Estado:** Hooks do React

## 📂 Estrutura principal do Projeto

```
📦 projeto
├── src/
│   ├── components/
│   │   ├── ComecarJogo.js
│   │   ├── Jogando.js
│   │   ├── TerminoJogo.js
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   │   ├── comecarJogo.css
│   │   ├── jogando.css
│   │   ├── terminoJogo.css
├── public/
│   ├── img/
├── README.md
└── ...
```

## ⚙️ Como Executar o Projeto

### 🔹 Configuração Inicial
1. Clone este repositório:
   ```sh
   git clone https://github.com/Raruto723/projeto4Bimestre.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd projeto4Bimestre
   ```
3. Acesse a pasta do projeto:
   ```sh
   cd projeto
   ```
4. Instale as dependências:
   ```sh
   npm install
   ```

### 🔹 Executando o Jogo
1. Inicie o servidor React:
   ```sh
   npm start
   ```
2. Acesse `http://localhost:3000/` no seu navegador.

## 📌 Regras do Jogo

- O jogador tem 10 tentativas para acertar o número sorteado.
- Ao acertar, ganha um ponto e recebe 4 tentativas extras.
- O jogo termina quando as tentativas se esgotam.
- Se o jogador bater o recorde, ele é salvo automaticamente.
- Se errar, recebe um feedback visual indicando se o número correto é maior ou menor.
- O jogo pode ser reiniciado a qualquer momento.

## 🎨 Interface do Usuário

O jogo conta com uma interface interativa e amigável. Os jogadores são guiados por mensagens de feedback dinâmico e animações para tornar a experiência mais envolvente.

- **Tela Inicial:** Exibe o recorde atual e permite iniciar uma nova partida.
- **Tela de Jogo:** Permite ao jogador inserir um número e receber dicas sobre a proximidade do palpite.
- **Tela de Fim de Jogo:** Exibe a pontuação final e dá a opção de reiniciar ou sair do jogo.
## 🛠️ Relato de Erros  

Durante os testes do jogo em diferentes computadores, observamos alguns comportamentos inconsistentes e erros inesperados:  

- Em alguns dispositivos, a funcionalidade de fechar o jogo não funcionava corretamente.  
- Em testes realizados em diferentes dias e sem modificações no código, algumas partes do jogo que funcionavam antes começaram a apresentar erros inesperados.  
- Em alguns momentos, os erros ocorriam de maneira aleatória, sem um padrão previsível, enquanto em outras situações, o jogo rodava sem problemas.  
- O comportamento do jogo variava dependendo do computador utilizado, sugerindo possíveis diferenças na configuração dos navegadores ou sistemas operacionais.  

Não conseguimos identificar com precisão a causa desses problemas, mas continuamos investigando possíveis soluções e melhorias para garantir maior estabilidade ao jogo.  
