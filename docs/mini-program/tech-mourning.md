# 小程序追悼模式
## 背景
    因公众人物逝世，公众事件等因素，需要进行追悼，各类媒体首页会进行置灰，为实现置灰效果，做如下技术方案介绍
## 技术方案
1. 采用`css`的`filter`实现置灰：
```css
.jz-global-mourning{
    filter: grayscale(100%)
}
```
2. 由于`filter`会破坏`position`定位效果，导致布局混乱，采用特定标签加特定类名的方式进行置灰控制：

方案1：https://www.jianshu.com/p/1ef1fe054c0f

但是小程序没有`html`，只有`page`，应用方案1会导致安卓下`tabbar`定位丢失底部固定的效果，故此采用如下方案2：https://blog.csdn.net/my_bo/article/details/123657133

![[Pasted_image_20240804181805.png]](../images/Pasted_image_20240804181805.png)

```css
image, button, text, span, video, [class^='icon-'], [class*='icon-'], [class^='icon_'], [class*='icon_'], .jz-global-mourning{
filter: var(--global-mourning)
}
```
3. 数据开关来自`$store.state.vuex_commData.isMourning`，对应后台的`greyConfig`文件的同名字段
4. 如果要加上这个灰色效果，使用如下全局类名加到对应的节点
```html
<view class='jz-global-mourning'></view>
```
