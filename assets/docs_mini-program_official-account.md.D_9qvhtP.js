import{_ as a,o,c as t,a5 as e}from"./chunks/framework.Cjg1mlEg.js";const u=JSON.parse('{"title":"official-account重复创建问题","description":"","frontmatter":{},"headers":[],"relativePath":"docs/mini-program/official-account.md","filePath":"docs/mini-program/official-account.md","lastUpdated":1722876923000}'),c={name:"docs/mini-program/official-account.md"},i=e('<h1 id="official-account重复创建问题" tabindex="-1">official-account重复创建问题 <a class="header-anchor" href="#official-account重复创建问题" aria-label="Permalink to &quot;official-account重复创建问题&quot;">​</a></h1><h2 id="问题表现" tabindex="-1">问题表现 <a class="header-anchor" href="#问题表现" aria-label="Permalink to &quot;问题表现&quot;">​</a></h2><p>对于同一个页面来说，你若先创建一个公众号组件，然后再销毁它，接着继续创建，会出现报错，导致无法渲染，错误表现如下:</p><p>![[Pasted image 20240804181543.png]]</p><h2 id="解决方式" tabindex="-1">解决方式 <a class="header-anchor" href="#解决方式" aria-label="Permalink to &quot;解决方式&quot;">​</a></h2><p>先确认下为什么会被重复隐藏和渲染，有问题的逻辑是哪个地方 将对应的渲染次数从多次，控制成一次</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1>',7),r=[i];function n(d,s,l,f,_,h){return o(),t("div",{"data-pagefind-body":!0},r)}const m=a(c,[["render",n]]);export{u as __pageData,m as default};
