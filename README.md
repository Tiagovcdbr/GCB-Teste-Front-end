# GCB-Teste-Front-end
Challenge front-end Junior GCB Investimentos 

#### Para rodar o projeto faça um fork ou um gitclone mas caso não esteja familiarizado com o GitHub faça o download!!
#### Após isso rode no terminal de sua IDE npm install para instalar as dependências e após serem baixadas rode o projeto com o npm start que provavelmente será na porta 3000.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

=====================================================
#### Tutorial para instalar o EsLint no projeto e evitar os erros que podem aparecer na hora de codar.
#### Começando a instalação com o comando npx eslint --init
#### Após a execução do comando, o terminal fará perguntas sobre a configuração do ESLint.
#### Pergunta 1:
=====================================================
```
How would you like to use ESLint? (Use arrow keys)
Como gostaria de usar o ESLint? (Use as teclas direcionais)
Resposta 1
To check syntax, find problems, and enforce code style
Checar sintaxe, buscar problemas e forçar os padrão de código
Pergunta 2:
What type of modules does your project use?
Que tipo de módulos seu projeto usa?
Respostas 2:
JavaScript modules (import/export)
CommonJS (require/exports) Selecione essa opção
None of these Nenhum desses
A resposta que vamos deixar selecionada aqui é o CommnsJS (require/exports), mas é muito comum nos projetos backend com JavaScript a galera usar o sucrase, se esse for o seu caso você deve selecionar a opção JavaScript modules (import/export)
Pergunta 3:
Which framework does your project use?
Qual framework seu projeto usa?
Resposta 3:
None of these
Nenhum desses
Pergunta 4:
Does your project use TypeScript?
Seu projeto usa TypeScript?
Resposta 4:
Escreva N e em seguida aperte a tecla ENTER
Pergunta 5:
Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)
Onde seu projeto é executado? (Aperte <space> para selecionar, <a> para selecionar tudo, <i> para inverter a seleção)
Resposta 5:
Deixe apenas a opção Node selecionada.
Pergunta 6:
How would you like to define a style for your project?
Como você gostaria de definir um padrão de código para o seu projeto?
Resposta 6:
Use a popular style guide
Usar um padrão de código popular
Pergunta 7:
Which style guide do you want to follow?
_Qual padrão de código você quer seguir?_
Resposta 7:
Airbnb (https://github.com/airbnb/javascript)
Pergunta 8:
What format do you want your config file to be in?
Qual formato você deseja o seu arquivo de configuração?
Resposta 8:
JSON
Pergunta 9:
Would you like to install them now with npm?
Você gostaria de instalá-los agora com npm?
Resposta 9:
Y.
=====================================================
```
=====================================================
#### Note que Agora se você abrir o seu arquivo index.js ou outro arquivo vai se deparar com algo não muito agradável, um código cheio de sublinhados vermelhos
Se parar o mouse sobre a const que está na linha 1, aparecerá uma breve descrição do erro que o ESLint achou em seu código, Esse erro é simples de arrumar, só precisamos adicionar uma linha em branco após o require do restify. Lembrar de fazer isso vai ser chato, muito chato, mas não se preocupe! É aqui que entra a magia do Prettier. Agora vamos partir para a configuração do Prettier que terá a responsabilidade de ler todas as configurações que colocarmos para o ESLint e realizar as alterações necessárias uma vez que salvamos os arquivos que estamos editando. Por favor, não faça essas correções manualmente, isso só fará você sofrer e em algum momento desligará o ESLint por raiva a ele. e isso atrapalha muito e se torna exaustivo....

#### Com as perguntas respondidas e as depências instaladas repare no arquivo package-lock.json delete ele e instale as dependências novamente agora com as extensões com o comando

=====================================================

#### npm i prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
#### ou
#### npm i prettier eslint-config-prettier eslint-plugin-prettier

=====================================================

### Repare que vai ser criado um arquivo com o nome de .eslintrc.js
### Abra esse arquivo e substitua tudo dentro do arquivo pré configurado por essa configuração:

![config eslint](https://user-images.githubusercontent.com/78483210/129104945-95082de3-5d46-45aa-92f9-db39cdb92460.png)

=====================================================

#### Após esses passos note que seu código vai estar arrumado e não apontando os erros pois o Prettier e o eslint estão trabalhando em conjunto, ma isso não impede do vscode identificar os erros que não tem como ser evitados mas com essa configuração vai facilitar muito na hora de você codar.

#### Detalhes

````
npx create-react-app my-app --template typescript
npm start para checar se o projeto está ok
delete alguns arquivos que por padrão serão utilizados e deixe o código do projeto limpo
Nesse momento assumo que você ja sabe quais arquivos deletar, pois bem.
O React tem muitas dependências e as que foram usadas citarei abaixo e como instalar

caso falte alguma dependência do TypeScript no momento que criar o projeto instale para não ter acusações de erros no código

npm install --save typescript @types/node @types/react @types/react-dom @types/jest

Abaixo todas as depências e o site caso queira ler alguma documentação:

https://www.npmjs.com/package/react-router-dom
npm i react-router-dom

https://www.npmjs.com/package/react-icons
npm i react-icons

https://www.npmjs.com/package/styled-components
npm i styled-components

https://www.npmjs.com/package/axios
npm i axios

https://www.npmjs.com/package/gerador-validador-cpf
npm i gerador-validador-cpf

https://www.npmjs.com/package/react-cookie
npm i react-cookie

https://www.npmjs.com/package/react-scripts
npm i react-scripts

https://www.npmjs.com/package/swiper
npm i swiper

https://www.npmjs.com/package/web-vitals
npm i web-vitals

````

#### Feito os procedimentos acima é só começar a codar.
#### As estilizações de alguns arquivos dentro dos components e pastas foram estilizados dentro do mesmo! porque isso ? Para facilitar a navegação e entendimento do código pois muitos arquivos separados de folhas de estilos dificultam um pouco podendo até confundir na hora de navegar entre as pastas e arquivos.
#### Porém um detalhe quando a estilização é muito extensa foi feito um arquivo a parte, o detalhe acima de instalação do Eslint é para facilitar o trabalho com o código, postei o tutorial pois alguns tem dificuldades de utilizar essa ferramenta.

#### Abaixo será mostrado algumas imagens do projeto.

![img1](https://user-images.githubusercontent.com/78483210/144642255-24d34b3e-cc93-48ff-b2ab-f69cf720002a.png)

![img2](https://user-images.githubusercontent.com/78483210/144642263-747c6133-edc4-4f54-9bf7-332609d83bc5.png)

![img3](https://user-images.githubusercontent.com/78483210/144642267-86b13239-2750-478d-bc3b-4ccad4b16c56.png)

![img4](https://user-images.githubusercontent.com/78483210/144642271-8404f5c5-7fcf-41fa-81f2-5221eb997b6c.png)

![img5](https://user-images.githubusercontent.com/78483210/144642276-e5006d06-9f6a-4677-ab50-bc71b4630efa.png)

![img6](https://user-images.githubusercontent.com/78483210/144642283-07812311-cb4e-4540-9a53-38489a2c6a2c.png)

![img7](https://user-images.githubusercontent.com/78483210/144642286-a0216125-f384-489e-88dd-797fd3cd6a8d.png)

![img8](https://user-images.githubusercontent.com/78483210/144642287-7726a000-acfe-4e61-baf5-1812bf061d33.png)

![img9](https://user-images.githubusercontent.com/78483210/144642290-61cb7a26-7466-4122-8f86-4c6898c11459.png)

![img10](https://user-images.githubusercontent.com/78483210/144642293-19fc8e7d-74df-4c7a-b7e8-9341370a0fb3.png)

![img11](https://user-images.githubusercontent.com/78483210/144642296-0bff07d1-fc07-4be2-8120-38935f8cbb1c.png)

### Happy Hacking !! 🖥️ ⌨️ 📓 🎧 🚀

#### Deploy no Netlify  https://gcb-teste-frontend.netlify.app/
