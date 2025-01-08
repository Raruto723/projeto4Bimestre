
# Principais Comandos Git

Este documento contém os principais comandos do Git, desde a inicialização até o envio de commits para repositórios remotos.

---

## **1. Inicialização e Configuração**
- **Iniciar um repositório Git em uma pasta:**
  ```bash
  git init
  ```
  Cria um repositório Git local.

- **Clonar um repositório remoto:**
  ```bash
  git clone <URL-do-repositório>
  ```
  Baixa o repositório remoto para sua máquina.

- **Configurar o nome e e-mail do usuário:**
  ```bash
  git config --global user.name "Seu Nome"
  git config --global user.email "seuemail@exemplo.com"
  ```

---

## **2. Adicionar Arquivos e Realizar Commits**
- **Verificar o status do repositório:**
  ```bash
  git status
  ```
  Mostra alterações no repositório (arquivos novos, modificados, ou não rastreados).

- **Adicionar arquivos ao staging area:**
  - Arquivo específico:
    ```bash
    git add nome_do_arquivo
    ```
  - Todos os arquivos:
    ```bash
    git add .
    ```

- **Criar um commit:**
  ```bash
  git commit -m "Mensagem explicando as mudanças"
  ```

---

## **3. Trabalhando com Repositórios Remotos**
- **Adicionar um repositório remoto:**
  ```bash
  git remote add origin <URL-do-repositório>
  ```
  Associa o repositório local a um repositório remoto chamado `origin`.

- **Enviar alterações para o repositório remoto:**
  ```bash
  git push origin main
  ```
  (Substitua `main` por `master` ou outro nome da branch, se necessário.)

- **Puxar alterações do repositório remoto:**
  ```bash
  git pull origin main
  ```
  Atualiza seu repositório local com as alterações feitas remotamente.

---

## **4. Trabalhando com Branches**
- **Criar uma nova branch:**
  ```bash
  git branch nome-da-branch
  ```

- **Mudar para outra branch:**
  ```bash
  git checkout nome-da-branch
  ```

- **Criar e mudar para uma nova branch ao mesmo tempo:**
  ```bash
  git checkout -b nome-da-branch
  ```

- **Listar branches:**
  ```bash
  git branch
  ```

- **Mesclar uma branch com a branch atual:**
  ```bash
  git merge nome-da-branch
  ```

---

## **5. Visualizar Histórico e Alterações**
- **Ver o histórico de commits:**
  ```bash
  git log
  ```

- **Ver o histórico resumido (uma linha por commit):**
  ```bash
  git log --oneline
  ```

- **Ver as alterações em um arquivo:**
  ```bash
  git diff
  ```

---

## **6. Reverter ou Desfazer Alterações**
- **Desfazer alterações em um arquivo antes do commit:**
  ```bash
  git checkout -- nome_do_arquivo
  ```

- **Remover um arquivo do staging area:**
  ```bash
  git reset nome_do_arquivo
  ```

- **Resetar o último commit (mantendo as alterações):**
  ```bash
  git reset --soft HEAD~1
  ```

- **Resetar o último commit (removendo as alterações):**
  ```bash
  git reset --hard HEAD~1
  ```

---

## **7. Outros Comandos Úteis**
- **Renomear um arquivo:**
  ```bash
  git mv nome_antigo nome_novo
  ```

- **Remover um arquivo do repositório:**
  ```bash
  git rm nome_do_arquivo
  ```

- **Ver as configurações do Git:**
  ```bash
  git config --list
  ```

---

## **Exemplo de Workflow Completo**
1. Inicialize o repositório:
   ```bash
   git init
   ```

2. Adicione um repositório remoto:
   ```bash
   git remote add origin <URL-do-repositório>
   ```

3. Adicione e faça commit das alterações:
   ```bash
   git add .
   git commit -m "Primeiro commit"
   ```

4. Envie os commits para o repositório remoto:
   ```bash
   git push origin main
   ```

5. Puxe alterações quando necessário:
   ```bash
   git pull origin main
   ```

---
