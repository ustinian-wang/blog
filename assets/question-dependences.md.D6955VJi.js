import{_ as s,o as a,c as e,a5 as n}from"./chunks/framework.Cjg1mlEg.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"question-dependences.md","filePath":"question-dependences.md","lastUpdated":1737216880000}'),i={name:"question-dependences.md"},t=n(`<div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stateDiagram-v2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [*] --&gt; Still</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Still --&gt; [*]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Still --&gt; Moving</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Moving --&gt; Still</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Moving --&gt; Crash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Crash --&gt; [*]</span></span></code></pre></div>`,1),p=[t];function l(d,c,o,h,r,E){return a(),e("div",{"data-pagefind-body":!0},p)}const g=s(i,[["render",l]]);export{k as __pageData,g as default};
