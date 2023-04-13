# Colab

Desafio: Listar os usuários e seus detalhes em uma interface web.
Proposto pela empresa Colab.

## Tecnologias

- Typescript
- React
- React Router Dom
- Material UI
- Jest

## Sobre o processo de desenvolvimento
Essa tarefa tinha como objetivo criar uma interface para listar usuários e suas informações. Os dados dos usuários são gerados pela API https://randomuser.me/. 

Para este projeto optei por utilizar a linguagem Typescript por ser uma das linguagens que mais tenho familiaridade e também por ser estaticamente tipada, ajudando a evitar que alguns erros passem despercebidos durante a construção do código e facilitar o processo de “debug”.  Utilizei também a biblioteca React, pois gosto muito da maneira como os códigos são separados em componentes reutilizáveis.

Além dessas ferramentas que já tenho conhecimento, queria tentar algo novo, queria usar essa tarefa como uma forma de aprendizado, por isso escolhi trabalhar com um ferramenta de interface de usuário que sempre possui curiosidade de aprender mas nunca parei para estudá-la. Dessa forma decidi utilizar o Material UI. Achei bem divertido essa parte de aprendizado, a documentação do MUI é bem detalhada o que me ajudou muito a utilizá-lo, possui diversos componentes muito bem testados pelo que pesquisei e fiquei satisfeito com o resultado que obtive com ele.

Outra coisa que queria tentar é utilizar um padrão de arquitetura que eu ainda não havia trabalhado. Faz um tempinho que estou estudando o MVVM (Model-View-ViewModel) e tentei implementá-lo nesta tarefa. Acredito que consegui implementá-lo corretamente, e gostei de ver como meu código ficou organizado.

Para o design do projeto, decidi criar uma tabela onde nela estaria listado todos os usuários retornados pela API citada anteriormente. Optei por retornar 100 usuários para poder visualizar como ficaria a paginação fornecida pelo MUI. Eu não queria exibir todos os dados dos usuários na tabela, então pensei em de alguma forma, ao clicar em uma linha da tabela, mostrar mais informações do usuário selecionado. Não sei se foi a melhor ideia, aceito críticas e sugestões, mas utilizei um modal, que quando aberto vai conter todos esses dados. Sempre que o modal é fechado e aberto clicando em outra linha, irá exibir o conteúdo do usuário corretamente. Fiz o site pensando em responsividade.

Criei testes para as funções utilitárias e também para os componentes que desenvolvi.

E este foi o resultado: 

![image](https://user-images.githubusercontent.com/76439167/231900962-e7fee0a1-02f1-4c5e-802a-6fc4d016d98b.png)

![image](https://user-images.githubusercontent.com/76439167/231901060-93c3afcd-0fdc-4091-8d67-5bd3c3ebfd04.png)

Se eu fosse mudar algo neste projeto seria aprender mais sobre MUI e ver como eu poderia utilizar melhor a ferramenta. Organizaria as informação no modal de outra maneira, talvez adicionar uma estilização diferente. Talvez não utilizar modal e criar uma outra página para conter os detalhes dos usuários. Adicionaria uma barra de pesquisa para a tabela e colunas ordenadas.

## Requerimentos

- Node

## Instalação

Execute o seguinte comando:

```bash
yarn
```

## Uso

Execute o seguinte comando:

```bash
yarn start
```
