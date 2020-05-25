(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1499:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this.$createElement;this._self._c;return this._m(0)};a._withStripped=!0;var n=t(48),r=Object(n.a)({},a,[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("h1",[s._v("Use in vue-cli 3")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[s._v("vue-cli")]),s._v(" is one of the best Vue application development tools. We are going to use "),t("code",{pre:!0},[s._v("antd")]),s._v(" within it and modify the webpack config for some customized needs.")]),s._v(" "),t("h2",{attrs:{id:"Install-and-Initialization"}},[s._v("Install and Initialization "),t("a",{staticClass:"anchor",attrs:{href:"#Install-and-Initialization"}},[s._v("#")])]),s._v(" "),t("p",[s._v("We need to install "),t("code",{pre:!0},[s._v("vue-cli")]),s._v(" first, you may need install "),t("a",{attrs:{href:"https://github.com/yarnpkg/yarn/"}},[s._v("yarn")]),s._v(" too.")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ npm install -g @vue/cli\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# OR")]),s._v("\n$ yarn global add @vue/cli\n")])]),s._v(" "),t("p",[s._v("Create a new project named "),t("code",{pre:!0},[s._v("antd-demo")]),s._v(".")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ vue create antd-demo\n")])]),s._v(" "),t("p",[s._v("And, setup your vue project configuration.")]),s._v(" "),t("p",[s._v("The tool will create and initialize environment and dependencies automatically, please try config your proxy setting or use another npm registry if any network errors happen during it.")]),s._v(" "),t("p",[s._v("Then we go inside "),t("code",{pre:!0},[s._v("antd-demo")]),s._v(" and start it.")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" antd-demo\n$ npm run serve\n")])]),s._v(" "),t("p",[s._v('Open the browser at http://localhost:8080/. It renders a header saying "Welcome to Your Vue.js App" on the page.')]),s._v(" "),t("h2",{attrs:{id:"Import-antd"}},[s._v("Import antd "),t("a",{staticClass:"anchor",attrs:{href:"#Import-antd"}},[s._v("#")])]),s._v(" "),t("p",[s._v("Below is the default directory structure.")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[s._v("├── README.md\n├── babel.config\n├── package.json\n├── public\n│   ├── favicon.ico\n│   └── index.html\n├── src\n│   ├── assets\n│   │   └── logo.png\n│   ├── components\n│   │   └── HelloWorld.vue\n│   ├── App.vue\n│   └── main.js\n└── yarn.lock\n")])]),s._v(" "),t("p",[s._v("Now we install "),t("code",{pre:!0},[s._v("ant-design-vue")]),s._v(" from yarn or npm.")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ yarn add ant-design-vue\n")])]),s._v(" "),t("p",[s._v("Modify "),t("code",{pre:!0},[s._v("src/main.js")]),s._v(", import Button component from "),t("code",{pre:!0},[s._v("antd")]),s._v(".")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Button "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ant-design-vue/lib/button'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ant-design-vue/dist/antd.css'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" App "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./App'")]),s._v(";\n\nVue.component(Button.name, Button);\n\nVue.config.productionTip = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("render")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("h")]),s._v(" =>")]),s._v(" h(App),\n}).$mount("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(");\n")])]),s._v(" "),t("p",[s._v("Modify "),t("code",{pre:!0},[s._v("src/App.vue")]),s._v("。")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[s._v("<template>\n  "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./assets/logo.png"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("Button>"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("router-view")]),s._v("/>")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")])]),s._v("\n...\n")])]),s._v(" "),t("p",[s._v("Ok, you should now see a blue primary button displayed on the page. Next you can choose any components of "),t("code",{pre:!0},[s._v("antd")]),s._v(" to develop your application. Visit other workflows of "),t("code",{pre:!0},[s._v("vue-cli")]),s._v(" at its "),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/master/README.md"}},[s._v("User Guide ")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"Advanced-Guides"}},[s._v("Advanced Guides "),t("a",{staticClass:"anchor",attrs:{href:"#Advanced-Guides"}},[s._v("#")])]),s._v(" "),t("p",[s._v("We are successfully running antd components now but in the real world, there are still lots of problems about antd-demo. For instance, we actually import all styles of components in the project which may be a network performance issue.")]),s._v(" "),t("p",[s._v("Now we need to customize the default webpack config.")]),s._v(" "),t("h3",{attrs:{id:"Use-babel-plugin-import"}},[s._v("Use babel-plugin-import "),t("a",{staticClass:"anchor",attrs:{href:"#Use-babel-plugin-import"}},[s._v("#")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[s._v("babel-plugin-import")]),s._v(" is a babel plugin for importing components on demand ("),t("a",{attrs:{href:"/docs/vue/getting-started/#Import-on-Demand"}},[s._v("How does it work?")]),s._v(").")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ yarn add babel-plugin-import --dev\n")])]),s._v(" "),t("h4",{attrs:{id:"if-you-use-vue-cli-2"}},[s._v("if you use vue-cli 2 "),t("a",{staticClass:"anchor",attrs:{href:"#if-you-use-vue-cli-2"}},[s._v("#")])]),s._v(" "),t("p",[s._v("Modify "),t("code",{pre:!0},[s._v(".babelrc")]),s._v(".")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-diff"}},[s._v('  {\n    "presets": [\n      ["env", {\n        "modules": false,\n        "targets": {\n          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]\n        }\n      }],\n      "stage-2"\n    ],\n'),t("span",{pre:!0,attrs:{class:"hljs-deletion"}},[s._v('-   "plugins": ["transform-vue-jsx", "transform-runtime"]')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v('+   "plugins": [')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v('+     "transform-vue-jsx",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v('+     "transform-runtime",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v('+     ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+   ]")]),s._v("\n  }\n")])]),s._v(" "),t("h4",{attrs:{id:"if-you-use-vue-cli-3"}},[s._v("if you use vue-cli 3 "),t("a",{staticClass:"anchor",attrs:{href:"#if-you-use-vue-cli-3"}},[s._v("#")])]),s._v(" "),t("p",[s._v("Modify "),t("code",{pre:!0},[s._v("babel.config.js")])]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-diff"}},[s._v(' module.exports = {\n  presets: ["@vue/app"],\n'),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+ plugins: [")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+    [")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v('+      "import",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v('+      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+    ]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+  ]")]),s._v("\n};\n")])]),s._v(" "),t("p",[s._v("Remove the "),t("code",{pre:!0},[s._v("import 'ant-design-vue/dist/antd.css';")]),s._v(" statement added before because "),t("code",{pre:!0},[s._v("babel-plugin-import")]),s._v(" will import styles and import components like below:")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-diff"}},[s._v("  // src/main.js\n  import Vue from 'vue'\n"),t("span",{pre:!0,attrs:{class:"hljs-deletion"}},[s._v("- import Button from 'ant-design-vue/lib/button';")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+ import { Button } from 'ant-design-vue';")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-deletion"}},[s._v("- import 'ant-design-vue/dist/antd.css'")]),s._v("\n  import App from './App'\n\n  Vue.component(Button.name, Button)\n\n  Vue.config.productionTip = false\n\n  new Vue({\n    render: h => h(App)\n  }).$mount('#app')\n")])]),s._v(" "),t("p",[s._v("Then reboot with "),t("code",{pre:!0},[s._v("npm run dev")]),s._v(" and visit the demo page, you should not find any "),t("a",{attrs:{href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"}},[s._v("warning messages")]),s._v(" in the console, which prove that the "),t("code",{pre:!0},[s._v("import on demand")]),s._v(" config is working now. You will find more info about it in "),t("a",{attrs:{href:"/docs/vue/getting-started/#Import-on-Demand"}},[s._v("this guide")]),s._v(".")]),s._v(" "),t("h3",{attrs:{id:"Customize-Theme"}},[s._v("Customize Theme "),t("a",{staticClass:"anchor",attrs:{href:"#Customize-Theme"}},[s._v("#")])]),s._v(" "),t("p",[s._v("According to the "),t("a",{attrs:{href:"/docs/vue/customize-theme"}},[s._v("Customize Theme documentation")]),s._v(", to customize the theme, we need to modify "),t("code",{pre:!0},[s._v("less")]),s._v(" variables with tools such as "),t("a",{attrs:{href:"https://github.com/webpack/less-loader"}},[s._v("less-loader")]),s._v(".")])])}],!1,null,null,null);r.options.__file="docs/vue/use-with-vue-cli.en-US.md";e.default=r.exports}}]);