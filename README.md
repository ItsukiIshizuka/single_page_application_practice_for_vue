# single_page_application_practice

## 概要
以下の記事を参考に、Vueで簡単なSPAを作成する<br>
[【Vue.js】爆速でSPAを作る](https://qiita.com/nagimaruxxx/items/8fc59a5ca05bb91bfe1f)

## 内容
- VueでSPAの作成
- 不明点などを学習し、その過程をREADMEにまとめる

## 不明点と解決
- `/src/main.js` はどこで呼び出しているのか？
  - `index.html` で読み込まれている `main.js` があるが、`index.html` に scriptを呼び出す記述はない
  - プロジェクト作成時にデフォルトで上記の記述になっていたため、`main.js` がどこで呼び出されているのかわからなかった
  - (解決) `/build/webpack.base.conf.js:25` entryの中で指定されている
    - `app: './src/main.js'` の記述を `./src/app.js` に書き換えるとビルド失敗する
    - `./src/app.js` を新たに作成し、app.js内に`console.log('HEY')` と記述したところコンソールにHEYが表示されることを確認
    - [上記の手順を試したコミット(不要な変更/ファイルは現在削除済み)](https://github.com/ItsukiIshizuka/single_page_application_practice_for_vue/commit/4960beecb6bf1d12dd166b18971b5848229e31dc)
    - [参照](https://stackoverflow.com/questions/42749973/what-does-the-mean-inside-an-import-path)
- `./src/main.js:14` `template:'<App/>'` は何を表しているのか？
  - そもそもtemplateプロパティの使われ方がわからなかった
  - (解決) 単一ファイルコンポーネントの `<template>` と同じもの
    - 単一ファイルコンポーネントからVueを学んでしまったため基本的な使い方がわからなかった
    - `el:'#test'` に対して `<App/>` を表示する
  -  `<App/>` は何を表しているのか
  - (解決) `components:{App}` コンポーネントを呼び出している
    - `<App></App>` と記述しているのと同じ意味となる
    - コンポーネントは呼び出し名を決めることができるが、決めない場合はコンポーネント名と同じ呼び出し名になる(今回の場合は `components:{App}` なので `App` が呼び出し名となる)
- URLの`#`って消せない？
  - デフォルトでは`localhost:8080/#/about` のように URLに `#` が挟まる
  - (解決) vueRouter インスタンスのオプションに `mode:'history'` を追記する
    - `/src/router/index.js` の new Router 内に `mode:'history'`を記述することで URLの `#` が消える

## 記事の手順との相違点
- nodebrewによるnpmのインストールを行う箇所があるが、筆者はnvmを使用(以前から使用していたため)


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
