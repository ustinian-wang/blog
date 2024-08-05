## 什么是组件库

多个项目下有大量的重复代码，为了提高代码的复用性，减少重复代码的编写，我们将一些常用的样式，组件抽离出来，形成了组件库

## 初始化

有的组件库，可能内置了请求逻辑，他对请求的上下文可能有公共数据依赖，像这种就需要在引入的时候，调用方法进行初始化

## 命名规范

**组件库的迭代，请严格按照如下规范进行组件扩展、样式定制等工作。**

  
### 概念介绍  
  
- `CamelCase`：  
  
  驼峰命名法，在这种命名风格中，多个单词连接在一起，每个单词的首字母大写，没有使用分隔符。例如，a-b-c-d 的驼峰命名为 ABCD。  
  驼峰命名法通常用于变量名、函数名、类名等标识符的命名。它提供了更好的可读性和可维护性，尤其在编程语言中经常使用。  
  
- `kebab-case`：  
  
  这种命名风格通常被称为kebab-case（短横线连字符风格）或者hyphenated-lowercase（连字符小写风格）。在这种命名风格中，多个单词之间用连字符（-）分隔，所有字母都是小写的。它被广泛应用于HTML、CSS和JavaScript等前端开发中，以提高代码的可读性和一致性。  
  
### 组件创建  
  
使用`CamelCase`，例如`PersonalDetails.vue`，即首字母大写,方便后在JavaScript上下文中引入，因为js变量命名不支持`kebab-case`  
  
### 组件注册  
  
#### 全局注册  
  
使用`kebab-case`，例如：  
  
```javascript  
Vue.components( 'fa-mall-personal-details', PersonalDetails )
```  
  
#### 局部注册  
  
- 关于命名引起的组件解析失败的原因：  
  
  - xxx_view.html等jsp使用场景下：但由于原生html不支持大小写， `CamelCase`不生效，而`kebab-case`  
      则正常渲染，因为浏览器会将`PersonalDetails`解析成`personaldetails`  
  
    - vue的template场景下：由于html经由Vue解析而非浏览器，故此`CamelCase`和`kebab-case`都会生效  
  
  
- 场景1(**推荐**)：使用CamelCase，这样少了一个`personal-details`和`PersonalDetails`转换的过程，包括后续检索代码都比较方便  
```vue 
<template>  
    <div>        
	    <PersonalDetails></PersonalDetails>    
	</div>
</template>  
<script>  
import PersonalDetails from "./PersonalDetails.vue"  
export default {  
    components: {        PersonalDetails    }}  
</script>
```
- 场景2: 使用`kebab-case`  
  
```vue  
<template>  
	<div>            
		<personal-details></personal-details>        
	</div>    
</template>    
<script>    
import PersonalDetails from "./PersonalDetails.vue";    
export default {        
	components: {            
		'personal-details': PersonalDetails        
	}    
}    
</script>  
```  
### ant-design-vue  
  如果你要基于ant二次封装，那么它本身的使用规范如下
- 组件名称: 以`a-xxxxx`开头  
- 类名: 以`a-xxx`开头  
  
### 业务组件  
  
> ma: 商城前端的命名简称，即my frontend  
  
- 组件名称：以`.MaXXXX`开头  
- 类名：以`.ma_XXX`开头  
- 自定义图标：以`Ma`开头，举个例子，假设ant内置了delete图标DeleteOutlined，这个时候我们新增另外一个版本的delete图标，可以考虑如下命名：  
  - MaDeleteOutlined  
  - MaDeleteV2Outlined  
  
### Api  
  
>提供了一个$ant单体对外暴露方法给外界使用  
  
  
## Docs  

- component1
- component2