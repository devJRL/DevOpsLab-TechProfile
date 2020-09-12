# Server Side Rendering (SSR) on Next.js

## Major Dependency

- [Typescript](https://nextjs.org/learn/excel/typescript/nextjs-types)

## History

1. Init next.js project

    ```bash
    # Init Next.js Project
    APP_NAME=next
    npx create-next-app $APP_NAME

    # Build initial data(.next)
    cd $APP_NAME
    yarn next build

    # Start 
    yarn start
      # ready - started server on http://localhost:3000
    ```

2. [Add Typescript](https://medium.com/@selvaganesh93/setup-next-js-with-typescript-integration-dece94e43cf5)

  ```bash
  yarn add @zeit/next-typescript @types/next @types/react
  ```
  
  ```javascript
  // in next.config.js
  const withTypescript = require('@zeit/next-typescript')
  module.exports = withTypescript({
    webpack(config, options) {
      return config
    }
  })
  ```
  
  ```json
  // in .babelrc
  {
  "presets": ["next/babel", "@zeit/next-typescript/babel"]
  }
  ```