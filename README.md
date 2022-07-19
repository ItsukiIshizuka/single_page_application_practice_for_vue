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
