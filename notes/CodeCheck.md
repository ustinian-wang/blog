# 代码约束

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

## 推荐
- 禁止残留log在代码中
- 禁止进行金额计算、拼接，问题表达式，请改成后端输出汇总后的金额字段
- 禁止template使用了复杂的表达式
- 要求函数参数不可以超过3个
- 要求删除未使用的方法

