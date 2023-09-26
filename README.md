No terminal Linux, use o <b>npm install graphql express express-graphql</b> para instalar o pacote GraphQL.
Após isso, crie um arquivo chamado <b>schema.js</b> no vscode ou no nano, depende da sua preferencia.
Coloque o código do mesmo arquivo do meu repositório <b>schema.js</b> e depois crie outro arquivo, mas dessa vez <b>server.js</b> e faça o mesmo processo.
Volte para o terminal e ative o nodejs usando seu caminho até nodejs-env/bin/activate (exemplo: source ~/Documentos/scr/nodejs-env/bin/activate).
Agora, ative o node usando <b>node server.js</b>.
Se caso você não tenha alterado o link, ele será <b>http://localhost:4000/graphql</b>, coloque isso no seu navegador preferido.
No terminal a esquerda da página insira <b>{hello}</b> e aperte o "play" no canto superior esquerdo da tela.
Caso no terminal a direita tenha tido uma resposta como
<b>{
  "data": {
    "hello": "Olá, mundo!"
  }
}</b>

Tudo está correto, parabéns!!!
