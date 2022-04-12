<p align="center">
  <a href="https://github.com/chakra-ui/chakra-ui">
    <img src="./images/logo_text.png" alt="Chakra logo" />
  </a>
</p>

<h1 align="center">🦅 Seja bem-vindo à NeXTIME 🦅</h1>

Aqui está a documentação do fluxo de desenvolvimento Web com NextJS

## REPOSITÓRIO DEFAULT da NeXTIME para a criação de projetos em NextJS

- [nextime-nextjs-start](https://github.com/nextimecode/nextime-nextjs-start)

## Primeiro precisamos entender algumas coisas:

Os nossos projetos são desenvolvidos com:

- [React JS](https://reactjs.org/)
- [Nextjs](https://nextjs.org/)
- [Chakra-ui](https://chakra-ui.com/)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Ajuda para classificar no AtomicDesign](https://uxdesign.cc/grouping-components-in-atomic-design-systems-4d6e2095ea45)
- [NodeJS](https://nodejs.org/pt-br/)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)
- [Conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Husky](https://github.com/typicode/husky)
- [Video instalando o commitlint, husky e o ](https://www.youtube.com/watch?v=erInHkjxkL8&t=474s)
- [Clean Code with JS](https://medium.com/trainingcenter/c%C3%B3digo-limpo-vers%C3%A3o-javascript-80adecafdbec)
- [Tutorial do git fluxo da Nextime](https://drive.google.com/file/d/1a44AWwM_JGLa0Z5-ECCT2sw4qisU9e_F/view?usp=sharing)
- [Tutorial do fluxo de review da Nextime](https://drive.google.com/file/d/1HG_m-s8U1JZ-Wp_8Gk9t1lb2YtcHme4R/view?usp=sharing)


## Conventional commits

As convenções de commit mais comuns seguem este padrão:

type(scope?): subject
body?
footer?

[+ Mais Informações...](https://commitlint.js.org/#/concepts-commit-conventions)

Padrão:

nome_do_comando: mensagem_do_commit

Versionamento [MAJOR.MINOR.PATCH]

Resumo dos nome_do_comando para commit:

Principais:

- fix: um commit do tipo fix, corrige um bug em sua base de código, isso se correlaciona com o PATCH (Controle de versão semântica).
- feat: um commit do tipo feat introduz um novo recurso para a base de código, isso se correlaciona com o MINOR (Controle de versão semântica).
- breaking: um commit do tipo breaking introduz uma alteração de API que irá quebrar o código, isso se correlaciona com o MAJOR (Controle de Versão Semântico).

Outros: Todos iram adicionar ao PATCH:

- build: mudanças que afetam o sistema de build ou dependências externas (escopos de exemplo: gulp, broccoli, npm)
- ci: Mudanças em nossos arquivos e scripts de configuração de CI (escopos de exemplo: Travis, Circle, BrowserStack, SauceLabs)
- test: adicionar testes ausentes ou corrigir testes existentes
- docs: Alterações apenas na documentação
- perf: uma mudança de código que melhora o desempenho
- refactor: uma alteração de código que não corrige um bug nem adiciona um recurso
- style: alterações que não afetam o significado do código (espaço em branco, formatação, ponto e vírgula ausente, etc)

## Iniciando um projeto NextJS na NeXTIME

1. Crie um repositório para armazenar o projeto, utilizando a conta da NeXTIME e as seguintes informações:

* OWNER: `nextimecode`
* REPOSITORY NAME: `X-Y`
  * X: Tipo de projeto
  * Y: Nome do projeto
  * Exemplos: `web-eimilhas` ou `mobile-projetox`
* Questionar ao coordenador se o código do projeto deverá ficar em modo **Public** ou **Privado**
* Marcar a caixa **Add a README file**

2. Dê acesso a todos os envolvidos no projeto ao repositório do Github.

3. Crie um diretório para o projeto em sua máquina local, seguindo os passos a seguir:
   1. Abra o Git Bash no diretório onde o projeto será armazenado na sua máquina.
   2. Clone o [**projeto default**](https://github.com/nextimecode/nextime-nextjs-start) no diretório local do projeto com `git clone URL_DO_REPOSITÓRIO_DEFAULT`.

4. Suba o código inicial do projeto com o uso do Git Bash, seguindo os passos a seguir:
   1. Inicie o projeto com o comando `git init -b main`.
   2. Fazer stage dos arquivos para commit com `git add -A`.
   3. Fazer commit dos arquivos com `git commit -m "Primeiro Commit"`.
   4. Adicione o repositório de destino com `git remote add origin URL_DO_REPOSITÓRIO_DESEJADO`.
   5. Verifique se o endereço está correto com `git remote -v`.
   6. Finalmente, suba as alterações com `git push origin main`.

5. No Github, utilizando sua conta, solicite o **pull request** do código e peça a aprovação ao coordenador do projeto.

## Trabalhando no Projeto

Se você observar no Package.json na parte de scripts do projeto, ao darmos commit ele irá rodar:

```bash
yarn lint && yarn stylelint
```

Esses comandos servem para verificar erros no código:

- [Eslint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)

Como o NextJS faz um build do site no momento de produção adicionamos também para quando o dev fizer o push do projeto ele roda o yarn build e você consegue verificar se tem algum erro no build. Isso é visto no package.json prepush.


Depois que voce fizer o clone do projeto que vocé irá trabalhar você deve instalar o projeto com:

```bash
yarn
```

E para rodar ele em ambiente de desenvolvimento utilize:


```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

## 📚 Aprenda Mais

Para aprender mais sobre Next.js, de uma olhada nas seguintes fontes:

- [Documentação Next.js](https://nextjs.org/docs) - Aprenda sobre características e API's de Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js.

Você pode verificar o [repositório no GitHub do Next.js](https://github.com/vercel/next.js/) - comentários e contribuições serão bem vindas!

## Deploy na Vercel

A forma mais simples de fazer o deploy de Next.js é utilizando a [Plataforma Vercel](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos mesmos criadores do Next.js.

Verifique a [documentação de deploy do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

[Ou seguir esse tutorial](https://gabrielcordeiro.dev/blog/como-fazer-deploy-na-vercel/)

# Passo a passo do nosso fluxo de código

<p align="center">
  <img src="./images/gitfluxo.png" alt="Chakra logo" />
</p>

⚠️ É extremamente importante o conhecimento de [Git](https://git-scm.com/). ⚠️

1. Depois que você baixou para sua máquina o projeto você provavelmente estará na branch main a qual é a principal e irá receber os arquivos que irão para produção.

🚨 NUNCA FAÇA PUSH PARA A MAIN 🚨

2. Crie sua feature, isso irá fazer uma copia da main e você poderá trabalhar tranquilamente.

```
$git checkout -b feature/nome_da_feature
```

3. Quando finalizar a tarefa que estava trabalhando você deve verificar se há mudanças na main, para isso use o comando a baixo e se houver conflitos, devem ser reparados.
```
$git merge main
```
4. Agora a feature esta pronta para subir, então é necessário abrir uma release respeitando o controle de versionamento.

MAJOR: quando você realizar alterações incompatíveis da API;

MINOR: quando você adicionar funcionalidades compatíveis com versões anteriores;

PATCH: quando você corrigir erros compatíveis com versões anteriores.

[Mais dúvidas podem consultar aqui](https://semver.org/)

```
$git checkout -b release/MAJOR.MINOR.PATCH
```

5. Agora que você está na branch release/x.y.z você deve atualizar o arquivo Package.json para a versão da release.

```
"version": "MAJOR.MINOR.PATCH"
```

6. Estamos prontos para adicionar e commitar nosso código:

```
$git add -A
$git commit -m "nome_da_release"
```

Nesse momento o projeto irá verificar se tem algum erro do eslint ou stylelint, caso tiver, é obrigatório as correções.

7. Enviar essa branch para o Github:

```
$git push --set-upstream origin release/x.y.z
```

8. Agora precisamos solicitar que nosso código seja adicionado a main, vá até o repositório do projeto  no site do github e clicar em: compare && pull request nome_da_release

9. Na página do Pull Request você deve:

- Selecionar os revisores (reviewers), que devem ser o techlead do projeto e alguma outra águia.
- Colocar quem trabalhou nessa release (assigners).
- Selecionar o tipo de alterações foram feitas em (labels).
- Criar um link da tarefa que está trabalhando do projeto com essa release em linked pull request.

10. Caso as alterações sejam aceitas pelos revisores e todos os checklist do Merge Pull Request estiverem ok, você pode apertar o botão Merge Request para que o código que você fez vá para a main.

🚨 Ná dúvida se deve ou não fazer esse Merge, procure alguém 🚨

11. Quando o merge foi feito com a main vá até o code do projeto e edite a tag da branch main para ficar de acordo com a release. A tag agora deve ser **x.y.z**.

Se você chegou até aqui é porque você fez seu primeiro deploy.

🎉 Parabéns.

Desenvolvido por [NeXTIME](https://github.com/nextimecode)
