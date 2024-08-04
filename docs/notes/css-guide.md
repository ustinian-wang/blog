# CSS-GUIDE



1、文件分层：
```shell

---base #屏蔽底层UI差异，原子类UI，通用UI
 |-component #各个组件的UI
 |-common #页面中可以共用UI
 |-page #页面具体的业务UI
```
2、命名空间隔离

意义：与第三方的插件或者框架避开UI上的冲突

命名空间-选择符：.bd-selector{}

3、命名原则

1. 单类
2. 语义，结构（去业务化）
3. 多用组合，少用继承

4、命名

1. 列表：.bd-navList
2. 列表项：.bd-navList-item
3. 图片链接：.bd-imgLink
4. 图片：.bd-img
5. 全局容器：g_wrap

5、原子类

优点：原子类可以很方便的复用，减少代码量，是一种class化的行内样式，解决style优先级过高的问题。

缺点：增加HTML的体积，在html中随着应用面的增多，它也会像style一样变得不可控，因为原子类是“类名即属性”。

解决方案：

使用通用类，比如bootstrap中的.btn .btn-primary .btn-danger，

原子类用于页面调试，.bgccc{background:#ccc;}，一来可以标记样式，二来因优先级不高，可以覆盖样式。

6、层级

1. 层级不能超过3层，尽量使用单类名

2. 1. 使用规则如下：

   2. 1. 1层：视觉稿样式：.navList{}， .navList-item{}
      2. 2~3层：交互样式（因为交互时，有控制样式变化的需要，需要利用到层级）.navList:hover item{}，    .J_show .item{}(js钩子这里只是做示例，实际开头不会是J)特别的情况下，需要用到层级，比如局部代码抽取成组件样式，组件内部，各部分都有关联的需要，避免外界的影响。

3. 层级一般用于实现CSS交互，:hover,:check这一类具有交互效果，同时需要改变交互时的样式

或者做一些类似皮肤效果切换的功能。

3、css再分层的话，分为表现层（.videoPanel-playBtn），交互层（:hover，:check，:target）

4、层级过多的缺点：

1）控制力太强了，样式难以覆盖

2）层级太深，理解代码费劲，费时间

3）修改层级时，难以准确定位

5、层级少的优点：

即使在不理解代码的情况下，你要定位代码非常容易，尤其是1层的时候，直接ctrl+f搜索目标类名，趴一下就找到了

7、书写顺序

display position left top right bottom margin border padding width height line-height font-size  

8、OOCSS

所谓的OOCSS其实就是 .btn{} .btn-primary{}，抽取共用的css作为一个单元样式，然后类名之间命名有点关联罢了。