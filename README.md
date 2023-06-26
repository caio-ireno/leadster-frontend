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

1. Instalei e configurei o EsLint juntamente com o prettier. O ESLint é uma ferramenta que ajuda a identificar erros e problemas no código, enquanto o Prettier é uma ferramenta que formata automaticamente o código para seguir um estilo consistente. Ambos são usados para melhorar a qualidade e a legibilidade do código.

2. Configurei a font "Plus_Jakarta_Sans" a partir do Next.

Em seguida comecei a criar o conteudo da pagina.

A pagina Header, foi simples, apenas adicionei o logo da empresa centralizado. O tamnho não esta sendo alterado, mesmo para telas menos, afim de proporcionar maior destaque.

Em Home, criei uma tag <main> para centralizar o conteudo. O detalhe em "conversão" foi inserido como um "after".

Em main, onde é renderizado os videos (cursos) criei um Mock, usando Json-Server, afim de simular um backend.

Todo o conteudo esta sendo tratato em "typeCursos". basicamente, fazemos uma requisção a API dentro de um useEffect. Alem disso, tambem é feito uma logica para definir qual o tipo de curso. Foi utilizado tambem React Paginte.

ou seja, como estamos simulando um API, temos a logica bem estruturada, separada por tipos de curso e paginação (6 por pagina). è possivel inserir 100 cursos e a pagina ira se comportar perfeitamente.

Caso seja necessarios, implementar futuras paginas e usar esses dados para renderização é possivel criar um Context.
