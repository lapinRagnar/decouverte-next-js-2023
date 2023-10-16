This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# le tuto
https://www.youtube.com/watch?v=TJQbDPGzm0Y&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=1
https://github.com/iamshaunjp/nextjs-masterclass

# mon demo
deploiement à faire 


# resources

## commande git pour créer une nouvelle branche et copier dedans la branche main

##### 1. afficher les branches
```bash
git branch -a
```
### 2. creer une nouvelle branche
```
git branch nom_de_la_nouvelle_branche
```
### 3. selectionner la nouvelle branche

```
git checkout nom_de_la_nouvelle_branche
```

### 4. fusioner la branche main dans la nouvelle branche
```
git merge main
```

### 5. copier dedans la branche main
```
git push origin nom_de_la_nouvelle_branche
```

## les commandes git pour pousser de la branche development vers la branche main

### 1. selectionner la branche main
```
git checkout main
```

### 2. fusioner la branche development vers la branche main
```
git merge development
```
