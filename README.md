# Banco Web Tests - Automação com Cypress 💳⚙️

## Descrição

Projeto de automação de testes end-to-end criado para a turma da Mentora 2.0 com o objetivo de demonstrar como automatizar testes de aplicações web usando Cypress e JavaScript. Este repositório contém exemplos de testes, organização com Custom Commands e geração de relatórios com Mochawesome.

## Tecnologias utilizadas

- Cypress
- JavaScript (ES6)
- Mochawesome (gerador de relatórios)
- Node.js / npm (gerenciador de pacotes)

## Objetivo

Demonstrar na prática aos alunos da Mentora 2.0 como organizar e implementar automação de testes com Cypress, incluindo:

- Estrutura de testes (pastas e arquivos)
- Reutilização de código com Custom Commands
- Geração e visualização de relatórios com Mochawesome

## Pré-requisitos 🛠️

- Node.js (recomendado >= 16.x)
- npm (ou yarn)
- A API "banco api" e a aplicação "banco web" devem estar em execução para que os testes façam as requisições e interajam com a interface.

Como verificar sua versão do Node.js:

```powershell
node -v
npm -v
```

## Como clonar o repositório

```powershell
git clone https://github.com/lainepos/banco-web-tests.git
cd banco-web-tests
```

> Se você usa SSH, altere a URL para o formato SSH.

## Instalação das dependências

Instale as dependências com npm (ou yarn):

```powershell
npm install
# ou
yarn install
```

As dependências do projeto estão declaradas em `package.json`.

## Execução dos testes 🚀

1) Modo interativo (UI do Cypress):

```powershell
npx cypress open
```

2) Modo headless (execução em linha de comando):

```powershell
npx cypress run
```

3) Geração de relatórios com Mochawesome

O projeto utiliza o `cypress-mochawesome-reporter` para gerar relatórios JSON durante a execução dos testes. Após a execução, você pode mesclar os arquivos de relatório e gerar um HTML com os comandos abaixo.

Exemplo de scripts no `package.json` sugeridos:

```json
"scripts": {
  "test": "cypress run",
  "report": "npx mochawesome-merge cypress/reports/*.json | npx mochawesome-report-generator --reportDir cypress/reports/html"
}
```

Para gerar o relatório manualmente (após `npm test`):

```powershell
npm run report
```

Em seguida, abra o relatório HTML gerado:

```powershell
start cypress/reports/html/index.html
```

Ou abra o arquivo `cypress/reports/html/index.html` no seu navegador.

## Estrutura de pastas 📁

Resumo da organização do repositório:

- `cypress/e2e/` - Arquivos de teste (suites / specs). Ex: `login.cy.js`, `transferencia.cy.js`.
- `cypress/fixtures/` - Dados estáticos usados nos testes (ex: `credenciais.json`).
- `cypress/support/` - Arquivos de configuração e comandos customizados.
  - `cypress/support/commands.js` - Importa os comandos customizados.
  - `cypress/support/commands/` - Implementações de comandos separados por domínio (ex: `login.js`, `transferencia.js`, `common.js`).
- `cypress/reports/` - Relatórios gerados pelo Mochawesome (JSON + HTML).
- `cypress/screenshots/` - Capturas feitas durante os testes.
- `cypress/videos/` - Vídeos das execuções (se habilitado).
- `package.json` - Dependências e scripts npm.
- `cypress.config.js` - Configuração do Cypress.

Exemplo de visualização rápida:

```
cypress/
  e2e/
  fixtures/
  reports/
    html/
  screenshots/
  support/
    commands.js
    commands/
      common.js
      login.js
      transferencia.js
```

## Tests e cobertura dos testes ✅

Os testes presentes são exemplos para cobrir fluxos principais da aplicação:

- `login.cy.js` — Cenários de login (sucesso e falha)
- `transferencia.cy.js` — Cenários de transferência entre contas

Cada arquivo de teste contém descrições (via `describe` / `it`) que servem como documentação do comportamento testado.

## Custom Commands (Comandos customizados) 🧩

Este projeto utiliza Custom Commands do Cypress para centralizar e reutilizar ações comuns. Os comandos detectados neste repositório incluem:

- `FazerLoginComCredenciasValidas()`
  - Fonte: `cypress/support/commands/login.js`
  - Ação: Preenche os campos de username e senha com credenciais válidas do fixture `credenciais.json`, faz screenshots de etapas e clica no botão de login.

- `FazerLoginComCredenciasInvalidas()`
  - Fonte: `cypress/support/commands/login.js`
  - Ação: Preenche os campos de username e senha com credenciais inválidas do fixture `credenciais.json` e tenta efetuar o login.

Observação: Os arquivos `cypress/support/commands/common.js` e `cypress/support/commands/transferencia.js` existem na estrutura, mas estão vazios neste commit — sinta-se à vontade para adicionar comandos reutilizáveis relacionados a navegação, limpeza de dados, criação de entidades ou ações de transferência.

Como criar um Custom Command (exemplo):

```javascript
// cypress/support/commands/novoComando.js
Cypress.Commands.add('nomeDoComando', (param) => {
  // ações reutilizáveis
})

// no cypress/support/commands.js
import './commands/novoComando'
```

Boas práticas para Commands:

- Dê nomes descritivos e em português ou inglês de forma consistente.
- Retorne o `cy` quando fizer sentido para permitir encadeamento (chain).
- Mantê-los curtos e focados (single responsibility).

## Boas práticas e convenções ✨

- Nomeação de arquivos: usar `.cy.js` para specs (ex: `login.cy.js`).
- Descrição dos testes: use `describe` para agrupar e `it` para casos de teste claros e independentes.
- Evite dependências entre testes — cada `it` deve poder rodar isoladamente.
- Use fixtures para dados estáticos (`cypress/fixtures/credenciais.json`).
- Screenshots e vídeos: habilite apenas quando necessário para reduzir espaço em disco.
- Reutilize lógica com Custom Commands e funções utilitárias em `cypress/support`.
- Use seletores estáveis (data-* attributes) quando possível. Evite selecionar por classes que podem mudar com CSS.

Exemplo de um teste legível:

```javascript
describe('Login', () => {
  it('deve autenticar com credenciais válidas', () => {
    cy.visit('/login')
    cy.FazerLoginComCredenciasValidas()
    cy.contains('Bem vindo').should('be.visible')
  })
})
```

## Dicas para escrita de testes reutilizáveis

- Isolar setup em `before`/`beforeEach`.
- Usar fixtures e factories para dados.
- Preferir asserts claros e poucos por teste (1-3 asserts relevantes).
- Comentar passos complexos e usar nomes descritivos para `it`.

## Contato e Contribuição 🤝

Contribuições são bem-vindas. Para contribuir:

1. Fork este repositório
2. Crie uma branch com sua feature/fix: `git checkout -b feature/nome`
3. Faça commits descritivos
4. Abra um Pull Request explicando a mudança

Para dúvidas ou contato, abra uma Issue no repositório ou contate o mantenedor: `lainepos`.

## Links úteis 🔗

- Cypress Docs: https://docs.cypress.io/
- cypress-mochawesome-reporter: https://github.com/adamgruber/cypress-mochawesome-reporter
- Mochawesome: https://github.com/adamgruber/mochawesome

---

Obrigado por usar este projeto como referência para aprender automação com Cypress. Boa prática e bons testes! ✅
