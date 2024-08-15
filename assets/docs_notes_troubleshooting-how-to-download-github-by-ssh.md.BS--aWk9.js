import{_ as e,c as o,o as t,a4 as a}from"./chunks/framework.CZtKXb8-.js";const g=JSON.parse('{"title":"如何使用ssh下载github项目","description":"","frontmatter":{},"headers":[],"relativePath":"docs/notes/troubleshooting-how-to-download-github-by-ssh.md","filePath":"docs/notes/troubleshooting-how-to-download-github-by-ssh.md","lastUpdated":1723737117000}'),s={name:"docs/notes/troubleshooting-how-to-download-github-by-ssh.md"},h=a('<h1 id="如何使用ssh下载github项目" tabindex="-1">如何使用ssh下载github项目 <a class="header-anchor" href="#如何使用ssh下载github项目" aria-label="Permalink to &quot;如何使用ssh下载github项目&quot;">​</a></h1><h2 id="配置本机的ssh" tabindex="-1">配置本机的ssh <a class="header-anchor" href="#配置本机的ssh" aria-label="Permalink to &quot;配置本机的ssh&quot;">​</a></h2><p>ssh是什么，此处不赘述，自行查阅。</p><h3 id="生成密钥" tabindex="-1">生成密钥 <a class="header-anchor" href="#生成密钥" aria-label="Permalink to &quot;生成密钥&quot;">​</a></h3><p>先根据生成ssh密钥：<code>ssh-keygen -t rsa -b 4096 -C “your_email@example.com”</code> 你会得到公钥和私钥 <code>id_rsa.pub</code>, <code>id_rsa</code></p><h3 id="github添加密钥" tabindex="-1">github添加密钥 <a class="header-anchor" href="#github添加密钥" aria-label="Permalink to &quot;github添加密钥&quot;">​</a></h3><p>登录github，访问<a href="https://github.com/settings/keys" target="_blank" rel="noreferrer">SSH and GPG keys</a>，把刚才生成的<code>id_rsa.pub</code>通过<code>New SSH key</code>进行添加</p><h3 id="clone-git仓库" tabindex="-1">clone git仓库 <a class="header-anchor" href="#clone-git仓库" aria-label="Permalink to &quot;clone git仓库&quot;">​</a></h3><p>以后得通过<code>git clone git@host:path/to/repository</code>这种格式进行clone，否则密钥不会生效，至于为什么，你可以自行查阅git官方文档</p>',9),i=[h];function r(d,n,c,l,u,b){return t(),o("div",null,i)}const p=e(s,[["render",r]]);export{g as __pageData,p as default};
