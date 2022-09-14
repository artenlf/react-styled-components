# react-styled-components

Aulas 1 e 2:

- instalação do styled-components (npm install --save styled-components).

- criação do primeiro componente estilizado: h1 e transferência do CSS para dentro da declaração.

Dica: Declarando um componente: const Titulo = h1.styled ``, lembrando que o que vai dentro do acento grave são as estilizações CSS. A classe será gerada automaticamente.

Aula 3: criamos um componente de escopo global para o reset CSS, que irá utilizar uma função chamada createGlobalStyle. Depois disso, importamos o componente no App.js, e o declaramos antes das outras tags da nossa aplicação. Além disso, importamos a fonte utilizada diretamente no arquivo index.html, dentro da pasta public.

Aula 4: criamos a pasta UI com o arquivo variaveis.js para podermos fazer o export de alguns estilo utilizados por vários componentes como cores de fundo e cores de texto. Implementamos o cabeçalho e o logo estilizados pelo styled components.

Aula 5: criamos a estilização para 2 estilos de botão utilizando o operador ternário e passando uma props para identificar o que seria o botão primário. Quando chamarmos o componente na árvore de renderização, passamos a propriedade para identificar qual estilo iremos utilizar naquele elemento específico.

Aula 6: refatorando alguns componentes, como o Container. Nesse caso, fizemos a exportação dele como uma função anônima (usando uma arrow function).

Na pasta UI criamos o index.js, arquivo que compreende estilizações para componentes comuns a todo o projeto. Utilizando o atalho ctrl+shift+f procuramos por onde o seletor imagem-icone era utilizado e substituímos pelo nosso componente estilizado.

Aula 7: quando há aplicação de um estilo inline para um elemento específico da página, podemos criar um novo componente de estilo específico para poder lidar com essa melhoria, trabalhando com a herança do estilo do nosso componente original. Na síntaxe ao ficaria algo como: const IconeMargin = styled(Icone)``.

Aula 8: trabalhando com responsividade através de media-queries. Passamos as propriedades de @media dentro do template literals. Com isso, eliminamos o arquivo de style.css e agora temos todos os estilos em componentes.

Dica: Sempre que possível devemos evitar colocarmos a declaração de componentes dentro do método render dentro de componente baseados em classes e no caso de componentes funcionais não devemos declarar um componente dentro do outro.

Isso porque, caso um componente seja declarado dentro do método render ou dentro de um outro componente funcional ele será re-declarado a cada nova renderização e o React não conseguirá fazer cache desse componente, o que pode atrasar e muito a renderização da página.

É uma boa prática declarar componentes e styled components fora dos métodos de renderização do React.

Ler mais em: https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method

Aula 9: criamos um novo componente de renderização, o Extrato. Ele fica dentro de um Box e utiliza informações da info.js para exibir na dela os dados de um usuário do banco.

Aula 10: criamos 2 novos componentes para poder armazenar e fazer a exibição dos dados de consumo, utilizando as props dentro do componente Item na árvore de renderização do componente Itens, que depois é chamado na árvore de renderização da nosso Extrato.

Também fizemos a estilização de uma tag span utilizando uma classe tradicional do CSS, dentro do template literals do style component Item.
