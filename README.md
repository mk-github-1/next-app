## npm install (Next.jsとbackendで共通)
npm install @popperjs/core @hookform/resolvers ajv axios ag-grid-react bcrypt chart.js cors class-transformer fs-extra inversify jsonwebtoken localforage luxon pluralize react react-dom react-hook-form react-select styled-components sqlite3 typeorm

npm install --save-dev @types/bcrypt @types/cors @types/fs-extra @types/jsonwebtoken @types/luxon @types/node @types/pluralize @types/react @types/react-dom @types/sqlite3 @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint @types/styled-components typescript

入れてないもの
prettier、reflect-metadataは不要？ @types/ajv @mui/material @emotion/react @emotion/styledは削除

## プロジェクトフォルダ構成
/public  : (Next.js静的ファイル格納)

/src
  /_backend : (Backendのルートフォルダ ※クラスのほうが良い？)
    /application    : Backendのservice層
      /dto
      /services
    /domain         : Backendのdomain層
      /entities
      /utitities
      /repositories
      /value-objects
    /infrastructure : : Backendのinfrastructure層(DBアクセスなど)
      /repository-implements
    ※/interface/controllersは作らず、apiルート利用

  /app : (Next.jsのApp Routerを使用するappをルートとした、ハイフンをつけるとルート対象外)
    /_assets
    /_components/organisms : atoms、moleculesは使用しない
      /other        : 部品名
    /_hooks         : カスタムフック(React/Next.jsで使用する関数)
      /common
      /services     : HTTPリクエスト/レスポンスをするservice(APIにアクセス)
    /_resources     : resources ※assetsと似ている
    /_types
    /api            : APIルート
      /test         : ルート名 
        /route.ts

    ※ページは1つ下の階層に移動できた方が良い、設定変えずにできるか検証
    /ui
      /Sub            : 画面名
        page.tsx
      global.css      : 共通CSS？
      layout.tsx      : レイアウト
      page.module.css : ページのCSS？
      page.tsx        : Appルート

　/data             : SQLite3の場合 ※練習用なので簡易DBを利用
    data.db

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
