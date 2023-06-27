This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Meus passos para o desenvolvimento deste projeto

OBS: o arquivo README, sera desenvolvido ao longo do projeto, afim de documentar com maior detalhe. A formatação do mesmo sera realizada ao final.

Algumas variaveis de estilização foram configuradas no arquivo global.css.

A aplicação foi dividida em Header, Home, Main, Info e Footer.

Primeiramente, instalei e configurei o ESLint juntamente com o Prettier, utilizando os plugins "react", "react-hooks", "@typescript-eslint", "unused-imports" e "simple-import-sort". O ESLint é uma ferramenta que ajuda a identificar erros e problemas no código, enquanto o Prettier é uma ferramenta que formata automaticamente o código para seguir um estilo consistente. Esses plugins adicionais são utilizados para fornecer regras específicas para o desenvolvimento com o React, verificar e garantir boas práticas no uso dos hooks, lidar com o TypeScript, identificar imports não utilizados e realizar a ordenação simples dos imports. Com a combinação dessas ferramentas e plugins, é possível melhorar significativamente a qualidade e a legibilidade do código.

A fonte "Plus_Jakarta_Sans" foi configurada a partir do Next.

Em seguida comecei a criar o conteudo da pagina.

A pagina Header, Home, Info e Footer foram simples, apenas adicionei as imagens e estruturas necessarias, respeitando o layout. Todos os components são responsivos.

Ja em main, onde é renderizado os videos (cursos) criei um Mock, usando Json-Server, afim de simular um backend.

Primeiramente, são importados os módulos necessários, como "next/image" para exibir imagens, "react" para utilizar os hooks de efeito e estado, e alguns ícones do pacote "react-icons" para uso posterior. Também é importado o módulo "ApiCurso" para obter os dados dos cursos.

Em seguida, é definida a função do componente principal chamado "TypeCursos". Dentro dessa função, são declarados os estados utilizados pelo componente, como "data" para armazenar os dados dos cursos, "buttonData" para controlar o botão selecionado, "curso" para armazenar os detalhes do curso selecionado, "dataVideo" para armazenar os dados de vídeo do curso selecionado, e "isOpen" para controlar a abertura e fechamento de um modal.

O componente também define a quantidade de itens por página e o deslocamento dos itens. Há duas funções, "openModal" e "closeModal", para abrir e fechar o modal, respectivamente.

Em seguida, são utilizados os hooks "useEffect" para buscar os cursos da API quando o componente é montado, e "useEffect" para atualizar os dados do vídeo quando o botão selecionado é alterado.

O código também calcula o número total de páginas com base na quantidade de cursos e itens por página. Em seguida, há uma função "handlePageChange" para atualizar o deslocamento dos itens ao mudar de página. Além disso, são selecionados os itens da página atual com base no deslocamento e na quantidade de itens por página.

No retorno do componente, há um contêiner principal "main" que exibe os botões dos cursos e um seletor de ordenação. Em seguida, há um contêiner "cardContainer" que exibe os cartões dos cursos, onde cada cartão contém uma imagem em miniatura e o nome do curso. Esses cartões são clicáveis e abrem o modal com mais informações quando clicados.

Após os cartões, é utilizado o componente "ReactPaginate" para exibir a paginação dos cursos. O modal é exibido quando a variável "isOpen" é verdadeira e exibe informações detalhadas do curso, como o nome, a imagem do vídeo, a descrição e os botões de download para arquivos relacionados ao curso.
