# Server Side Rendering (SSR) on Next.js

## Major Dependency

- [Typescript](https://nextjs.org/learn/excel/typescript/nextjs-types)

## History & Dependencies

- [Next.js]() project

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

- [Typescript](https://medium.com/@selvaganesh93/setup-next-js-with-typescript-integration-dece94e43cf5)

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
  
- [Chart.js](https://www.chartjs.org/docs/latest/charts/doughnut.html) : Doughnut
  
  - Ref. [Chart.js + javascript](https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/doughnut.js)
  - Ref. [Chart.js + react + typescript](https://itnext.io/chartjs-tutorial-with-react-nextjs-with-examples-2f514fdc130)

  ```bash
  # Support Chart.js
  yarn add chart.js @types/chart.js react-chartjs-2
  ```

- [@zeit/next-sass](https://github.com/vercel/next-plugins/tree/master/packages/next-sass)

  - Ref. [JSX on Typescript](https://www.typescriptlang.org/docs/handbook/jsx.html)
  - Ref. [Styling on Typescript](https://fettblog.eu/typescript-react/styles/)
  
  ```bash
  # Support Sass
  yarn add @zeit/next-sass node-sass
  ```
