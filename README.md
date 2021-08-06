# Config Base webpack with Vue3

Configuracion Base Webpack, Babel con Vue3.js

#### Dependencias Requeridas

```
$ npm i vue@next vuex@next vue-router@4 --save
```

#### Dependencias Desarrollo

```
$ npm i @babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime  -D
$ npm i @vue/cli-plugin-babel
$ npm i html-loader html-webpack-plugin file-loader url-loader -D
$ npm i mini-css-extract-plugin css-loader sass sass-loader -D
$ npm i css-minimizer-webpack-plugin terser-webpack-plugin dotenv-webpack -D
$ npm i webpack webpack-cli webpack-dev-server clean-webpack-plugin -D
```

#### Config file .babelrc

```
{
  "presets": ["@babel/preset-env", "@vue/cli-plugin-babel/preset"],
  "plugins": ["@babel/plugin-transform-runtime"]
}

```

#### Config files webpack.config.dev.js and webpack.config.prod.js

#### Config scripts in file package.json

```
{
    "build": "webpack --config webpack.config.prod.js",
    "dev": "webpack --config webpack.config.dev.js",
    "start": "webpack serve --config webpack.config.dev.js"
}
```
