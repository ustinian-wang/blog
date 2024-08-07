# code check

## 强制
- 禁止在v-if、v-show使用常量true/false。
- 禁止url存在jsp链接
- 禁止component没有带上name属性
- 禁止data没有以function的方式声明
- 禁止template使用methods未注册的方法
- 禁止js调用的函数不存在
- 禁止vue组件没有添加script标签
- 禁止style标签@import scss文件，但没有声明lang='scss'
- 禁止export出来的function没有写注释
- 禁止存在敏感关键词，例如`xxx`
- 禁止把 v-if 和 v-for 同时用在同一个元素上。
- 禁止图片资源链接使用带域名的绝对路径
- 要求`JSON.parse`要加上try-catch
- 要求当你export-default一个函数时，函数名用小驼峰，文件名需要和函数名一致
- 要求当你export一个对象/类 时用大驼峰
- 要求在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态
- 要求一个路径只import一次module；import说明：从同一个路径下import多行会使代码难以维护
- 要求if语句用大括号包裹一行或多行代码块
- 要求js中的字符串应该用单引号声明，而不是双引号
- 要求声明vue的data成员属性，避免赋值后没有双向绑定，如果是obj[xxx]=xxx的方式赋值，请改用this.$set设置值
- 要求
	- select的option要加上title
	- api必须要文档
	- 调用顶层api，要加上isCurrentWindow的判断，避免被iframe嵌套
	- curd列表的情况下，add的流程在max时，需要终止
	- 对于长key的读写，需要用getter和setter处理
	- 一个开关对于后端其他功能有依赖，需要后端控制返回，而不是前端写逻辑判断
	- 复杂数据的保存，应在入库前做一次检查
	- 任何方法的修改，都要经受住任意参数的破坏性测试
	- 使用第三方资源开发功能，要兼容当前域名的csp设置
    - 外部服务接口有错误码时，要对所有错误码做前端处理
    - 对于vuex被引入但是没有用到的数据，需要ast
    - 不同组件还是解耦开
    - 对于错误的判断，用错误码而不是msg
    - mac对于高频请求的接口，如果url一直一样，会缓存，这个时候要加上时间戳
    - 业务的css层级应保持一致9032
    - jpg格式不可以等同jpeg
    - 富文本文档如果有字数限制，应先去除富文本格式，再计算个数
    - 金额数值最多保留2位小数
    - 不允许在前端做浮点数金额计算。
    - 需求里面有xxx码字段的展示，一般设计为string而非number。避免后续类型转换异常
    - ajax的get请求包含object，array等数据格式，请改为post传参，避免序列化后url太长无法发送请求
    - svg渲染效果测试时，需要在ios真机测试，可能会有层级问题导致不渲染
    - array.forEach 在里面return是不会终止后续环节，使用for-of替代
    - img标签不允许设置宽高为0
    - moment格式化时间为24小时`YYYY-MM-DD HH:mm:ss`，而不是12小时制`YYYY-MM-DD hh:mm:ss`
    - 禁用Vue的`.once`修饰符，如果要实现行为控制，使用锁处理

    
### xcx
- xcx端的像素单位必须是偶数，否则会出现渲染问题
- pageScroll是否需要加入防抖
    - 需要的情况：计算任务比较重，会卡js线程的情况
    - 不需要的情况：fixed类型的菜单需要比较敏感地切换显隐逻辑
- 页面数据加载逻辑应出现的位置
    - 由于我们点击左上角的返回按钮会触发onShow。如果数据加载会导致页面变动，丢失之前的操作记录，那么应该放在onLoad阶段，反之放在onShow
- 设置容器行高时，并且有`overflow:hidden;`对于g，j这类渲染有下部分的文字，真机看是否会产生截断，目前是通过padding-bottom: 2rpx的方式兼容
- 在小程序设置请求头有个大小写的坑，比如设置Xcx-Version
  ios下拿到的是：Xcx-Version
  安卓拿到的是：xcx-version
  
## 推荐
- 禁止残留log在代码中
- 禁止进行金额计算、拼接，问题表达式，请改成后端输出汇总后的金额字段
- 禁止template使用了复杂的表达式
- 要求函数参数不可以超过3个
- 要求删除未使用的方法

## 代码质量检测
### husky:

```
yarn add husky -D
npx husky-init
yarn
```


### prettier:
```
yarn add -d prettier
```
添加```.prettierrc.js```文件，配置pretier规则。

### eslint:

1、安装依赖：考虑本机可能node版本较低，安装较新版的eslint可能会存在node版本过低的问题。

```
yarn add eslint@6.7.2 -D

yarn add eslint-plugin-vue@6.2.2 -D

yarn add babel-eslint@10.1.0 -D

yarn add lint-staged@10.5.4 -D
```

2、添加```.eslintrc.js```和```.eslintignore```文件，详见文件内容

3、```package.json```中添加：
```
"lint-staged": {
    "./src/**/*.{js,vue}": [
        "eslint --cache --fix",
        "prettier --write"
    ]
}
```

4、在 `.husky` 文件夹下找到刚刚安装依赖生成好的 `pre-commit` 文件，添加 `yarn lint-staged`

5. eslint限制vue文件生命周期编写顺序，具体可见`.eslintrc.js`里的`vue/order-in-components`

### commitlint:

1、安装依赖：
`yarn add -d @commitlint/config-conventional @commitlint/cli`

2、在husky已安装且激活的前提下，add hook：
`yarn husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`
在.husky目录下会初始化commit-msg文件

3、新增`commitlint.config.js`文件, 详见文件内容。

4、测试：
`git add . ` 暂存文件
`git commit -m "test commitlint"`（不通过）
`git commit -m "test:commitlint"`（不通过）
` git commit -m "test: commitlint"`（通过）

### AST
利用babel解析代码为AST，检查AST的节点是否符合上述规范，从而进行拦截，触发点位于`husky`的钩子
