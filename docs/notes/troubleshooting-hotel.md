
# troubleshooting-hotel

## FQA

### Q rollup 不具备解析路径的能力导致爆错：

```shell
This is most likely unintended because it can break your application at runtime
```

A: external 加入对应的库即可

### Q vue 在 yarn serve 时，解析错误

```shell
Uncaught TypeError: Failed to resolve module specifier "vue". Relative references must start with either "/", "./", or "../".
```

A: 客户端无法解析 node 模块，需要将一些第三方引用转成浏览器引用的方式：https://github.com/crcong/vite-plugin-externals

### Q yarn serve 出现 api 的域名是 localhost，一般是没有配置 .env.development 文件的 api 域名：

```shell
VITE_AXIOS_BASE_URL = "http://47.115.18.235:8080"
```

### Q 打包后的 vendor 太大，vite build 没有退出

```shell
dist/assets/OptItem.aaabcf26.css                 3.30kb / brotli: 2.04kb
dist/assets/vendor.94037d2b.css                  400.92kb / brotli: 30.32kb
dist/assets/vendor.6765ef7d.js                   2189.15kb / brotli: skipped (large chunk)
```

A：看下 vite.config.ts 中，是否存在启动 server 的配置，比如 mockServer

### Q  ant-design-vue select 初始无法自动选中。

A：要选中的话，label 和 value 必须是字符串类型。

### Q  如何在推送成功的情况下，进行自动部署？

A: 使用 ssh 模块，实现 node 通过 ssh 连接远端服务器执行命令

### Q  为什么渠道的事件$emit 之后，外部无法响应？

### Q  表单要保持绑定的同时，默认为空，
可以使字段值为 void 0

### Q  动态 import，组件局部指令会失效，如果在 App.vue 上面使用，则一切正常

A: 使用按需引入：

```javascript
//vite.config.ts
{
  plugin: {
    ViteComponents({
      customComponentResolvers: [
        AntDesignVueResolver({
          resolveIcons: false, //图标按需
        }),
      ],
    });
  }
}
```

### Q  使用 Icon 标签爆如下错误

```
Error: 'Icon' is not exported by node_modules\ant-design-vue\es\index.ts, imported by src\pages\Statistic\Statistic.vue
```

A： 2.x 的 ant-design-vue 已经使用类似 <UserOutlined/> 的方式了

### Q  vue3 的 v-model 语法 v-model:value="xxx"，与 2.0 的不一样，会导致 eslint 报错，需要禁用掉提示规则

```javascript
//.eslintrc.js
{
   rules: {
        "vue/no-v-model-argument": ["off"]
   }
}
```

### Q  使用 moment 后，vite serve，浏览器报错：

```shell
TypeError: Cannot read property 'defineLocale' of undefined
```

### Q 没有对外暴露，导致其他脚本拿不到 js

```javascript
window.moment = moment;
```

### Q  将自定义指令应用在 modal 上，不会生效，但是在 input 上则会生效

### Q  打包后的 vendor 超过警告阈值，进行优化的方案：https://rollupjs.org/guide/en/#outputmanualchunks

### Q  rollup 只是解决了 es6 module 引用的问题，但 IE 等不兼容 import 语法的浏览器，怎么降级处理？(下面的解决方案依旧不支持 IE11)
    A: https://github.com/vitejs/vite/tree/main/packages/plugin-legacy

### Q  前端浮点数计算临时金额：https://www.npmjs.com/package/decimal.js 别人建议更好的替代方案 bignumber.js

### Q  vite 刚启动的时候，会发送大量的请求，因为是 http 协议，所以要反复建立连接，达到浏览器的请求限制。如果支持了 http2 则可以解决该问题，但有几个注意点：

- 如何在本机搭建 https：https://blog.csdn.net/weixin_38946164/article/details/107981042
- 如何在本机搭建 http2：https://www.cnblogs.com/xueming/p/web_support_http2.html
- vite 本身支持 https，但开启了代理则只会支持 https：https://cn.vitejs.dev/config/#server-strictport
- 综上所述，服务端的接口还是需要支持 http2 才行，否则 http2 请求 http 会出现失败

### Q  moment 有更好的替代方案 day.js

### Q  对于需要 vNode 创建内容 js api，可使用 vue3 的 h 函数进行处理

```javascript
notification.open({
  description: h(NotificationOrderRemind),
  onClick: () => {
    console.log("Notification Clicked!");
  },
  duration: 10000,
  placement: "bottomRight",
});
```

### Q  datepick 日期中文，但时间选择的文案是英文，解决方案：
https://blog.csdn.net/qitianhuoshen/article/details/106053309

### Q  axios 请求默认不携带 cookie 的解决方案：

  https://blog.csdn.net/qq_38157825/article/details/115109840

### Q  函数中 this 的获取方式

    https://stackoverflow.com/questions/66186156/ts2683-this-implicitly-has-type-any-because-it-does-not-have-a-type-annotat
    https://www.tslang.cn/docs/handbook/functions.html

### Q  排序方案：https://github.com/SortableJS/vue.draggable.next

### Q  [Violation] Added non-passive event listener to a scroll-blocking ‘touchmove’ event.

- npm i default-passive-events -S
- import 'default-passive-events'

### Q  每次 post 请求都会有一个额外的 options 请求的问题：
    - 原因：
      1. https://developer.mozilla.org/zh-CN/docs/web/http/cors#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E9%9C%80%E8%A6%81_cors_%EF%BC%9F
    - 解决：https://www.jianshu.com/p/9dc43d5cd6a6?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation
### Q  vue3 需要额外引入 eventBus，时间监听已经不对外提供 on of 和 emit 接口了：https://www.npmjs.com/package/vue3-eventbus
### Q  打包时忽略某个部分的代码
### Q  剪贴版功能

```html
<a-button id="loginInfoBtn">账号信息</a-button>
```

```javascript
let board = new ClipboardJS("#loginInfoBtn", {
  text: () => {
    return this.getAcctInfoText();
    // eslint-disable-next-line no-undef
    isDevelopment;
  },
});
```

