import{_ as e,o as a,c as r,a5 as o}from"./chunks/framework.Cjg1mlEg.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/mini-program/package-too-large-issue.md","filePath":"docs/mini-program/package-too-large-issue.md","lastUpdated":1722787423000}'),p={name:"docs/mini-program/package-too-large-issue.md"},t=o('<p>1.  优化项目结构和代码：</p><p>a.  清理项目中已下线、已废弃、无关、冗余等不需要/不再需要的内容；</p><p>b.  对于图片、视频、音频、数据等资源使用外链等方式加载；</p><p>c.  提取公共代码，重复的交互封装成组件、重复的逻辑进行封装；</p><p>d.  npm 包按需引入（针对webpack编译）；</p><p>e.  对 wxss、js、wxml 进行压缩（一般有编译的都会经过压缩）</p><p>2.  <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html" target="_blank" rel="noreferrer">小程序分包</a>处理，需要注意的是分包后整包的大小是不能超过 20MB 的，主包内只保留公共代码，可以通过微信开发者工具提供的<a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/codeanalyse.html" target="_blank" rel="noreferrer">代码静态依赖分析</a>，根据依赖关系把只有分包的代码抽取到分包下</p><p>3.  对于非核心页面可以使用 webview 的方式加载</p><p>4.  <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html" target="_blank" rel="noreferrer">分包异步化</a>，需要小程序基础库 2.17.3 及以上才可以使用（更低版本的基础库兼容工作正在推进中），主要功能是实现主包和分包内的代码可以互相引用的问题，优化点在于可以把主包的一些逻辑和工具直接放到分包内，以相对的减少主包大小</p><p>5.  <a href="https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions.html" target="_blank" rel="noreferrer">云函数</a>，云函数是在服务器端（node.js）运行的一个函数，可以当作是一个 JS 纯函数使用，函数变成了异步请求，优化时会有一定的改造成本。优化点在于把一些工具抽离成云函数，然后通过微信提供的 API 进行请求，可以直接减少抽离的工具的大小，具体可以参考：</p><p>a.  对于省市区的 json 地址数据可以抽离到云函数中</p><p>b.  对于一些 lodash、decimal.js 等 npm 工具库，可以抽离到云函数中</p><p>6.  再注册一个小程序，将主要的产品功能独立出来（因为不太适合我们业务，所以这个方案不太推荐，但是也算是一种解决思路</p>',13),s=[t];function n(i,c,d,m,l,_){return a(),r("div",{"data-pagefind-body":!0},s)}const h=e(p,[["render",n]]);export{f as __pageData,h as default};
