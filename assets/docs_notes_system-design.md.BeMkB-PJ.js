import{_ as i,o as l,c as s,a5 as t}from"./chunks/framework.Cjg1mlEg.js";const e="/blog/assets/IMG-20240813000628534.BStJGjbk.png",a="/blog/assets/IMG-20240813001033065.DsTqcjN4.png",n="/blog/assets/IMG-20240812235829786.Dj9cG77Z.png",o="/blog/assets/IMG-20240813001514239.DJBRT6i1.png",r="/blog/assets/IMG-20240813001717138.Bl4qgo-1.png",c="/blog/assets/IMG-20240813001750434._ABSnDMk.png",u="/blog/assets/IMG-20240813001809995.D_1jAN0l.png",g="/blog/assets/IMG-20240813001933822.VLR_w0Xv.png",p="/blog/assets/IMG-20240813002057939.BGlslSYp.png",m="/blog/assets/IMG-20240813002842630.CJqwTOUO.png",d="/blog/assets/IMG-20240813002955377.Cvq2uEVk.png",h="/blog/assets/IMG-20240813003034708.DYZV0dvq.png",_="/blog/assets/IMG-20240813123648146.DHgPICta.png",b="/blog/assets/IMG-20240813123757396.BhadQp5U.png",f="/blog/assets/IMG-20240813123946123.xeOZYjFX.png",y="/blog/assets/IMG-20240813124057653.C7RvCEUJ.png",v="/blog/assets/IMG-20240813125836750.ByQqh90B.png",x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/notes/system-design.md","filePath":"docs/notes/system-design.md","lastUpdated":1723528791000}'),k={name:"docs/notes/system-design.md"},I=t('<h2 id="what-is-it" tabindex="-1">what is it <a class="header-anchor" href="#what-is-it" aria-label="Permalink to &quot;what is it&quot;">​</a></h2><ul><li>system design <ul><li>design <ul><li>requirements</li><li>architecture</li><li>interface</li></ul></li><li>system components <ul><li>scale</li><li>security</li><li>maintainable</li></ul></li></ul></li><li>type of frontent system design interviews <ul><li>system design</li><li>product sense</li><li>UI architecture</li><li>machine coding/component design</li></ul></li><li>things to consider in frontend system design interviews <ul><li>requirements <ul><li>functional <ul><li>demand/supply: b2c; b2b</li><li>module level thinking <ul><li>user management</li><li>help and support</li><li>payment gayway</li><li>pricing and subscription</li><li>production listing</li><li>cart page</li><li>account management</li></ul></li><li>feture level thinking</li></ul></li><li>non-functional <ul><li>mobile/desktop</li><li>responsive/adaptive</li><li>internet/location/devices</li><li>accessibility</li><li>asset optimization(css, js images)</li><li>performance(fcp, lcp, tti, web vitials)</li><li>csr/ssr</li><li>authentication/authorization</li><li>securty</li><li>offline support</li><li>loggin &amp; monitoring</li><li>ab test</li><li>testing</li><li>internationalization</li><li>localization</li><li>versioning</li><li>pwa</li><li>ci/cd</li><li></li><li></li></ul></li></ul></li><li>scoping(Auth) <ul><li>demand</li><li>module <ul><li>product listing</li><li>cart page</li></ul></li></ul></li><li>tech choices</li><li>component architecture <ul><li>component hierachy</li><li>routing</li><li>data sharing</li></ul></li><li>data api &amp; protocols &amp; implementation <ul><li>protocals <ul><li>rest/graphql/sse/rpf</li><li>json/protocol buffers</li></ul></li><li>implementation <ul><li>pagination/infinite scrolls</li><li>debouceing/throttleing</li></ul></li><li>apis</li></ul></li><li>data modeling</li></ul></li></ul><h2 id="component" tabindex="-1">component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;component&quot;">​</a></h2><ul><li>Architectural Patterns <ul><li>Iframe</li><li>Web components</li><li>Module Federation</li><li>MicroApps /Route based</li></ul></li><li>Communication Protocols <ul><li>long polling</li><li>ws</li><li>sse</li></ul></li><li>Availability <ul><li>offline mode</li></ul></li><li>Accessibility <ul><li>keyboard</li><li>screen</li></ul></li><li>Consistency <ul><li>css</li><li>design system</li></ul></li><li>Credibility &amp; Trust</li><li>Logging &amp; Monitoring</li><li>Databases <ul><li>HTTP Caching</li><li>In memory caching</li><li>Apollo Caching</li><li>State management(Redux，Context)</li><li>Local storage</li><li>Session storage</li><li>Cookie</li><li>IndexedDB</li></ul></li><li>Caching</li><li>Security</li><li>Performance &amp; Optimization <ul><li>Assets optimization</li><li>Delivery option</li><li>Build assets</li><li>SSR</li><li>Service worker</li><li>-Web Vitals</li><li>Perceived performance</li></ul></li><li>Testing</li></ul><h2 id="network" tabindex="-1">network <a class="header-anchor" href="#network" aria-label="Permalink to &quot;network&quot;">​</a></h2><ul><li>Lazy loading <ul><li>lazy attribute</li><li>fetchpriority <ul><li><img src="'+e+'" alt=""></li></ul></li><li>intersection observer <ul><li><img src="'+a+'" alt=""></li></ul></li></ul></li><li>Loading javascript in async <ul><li><img src="'+n+'" alt=""></li></ul></li><li>Content visibility <ul><li><img src="'+o+'" alt=""></li></ul></li><li>Serving critical css <ul><li><img src="'+r+'" alt=""></li></ul></li><li>Resource hints <ul><li><img src="'+c+'" alt=""></li><li><img src="'+u+'" alt=""></li><li><img src="'+g+'" alt=""></li><li><img src="'+p+'" alt=""></li></ul></li><li><h2 id="caching-using-service-worker" tabindex="-1">Caching using service worker <a class="header-anchor" href="#caching-using-service-worker" aria-label="Permalink to &quot;Caching using service worker&quot;">​</a></h2></li><li>Caching using CDN</li><li>CSR，SSR <ul><li><img src="'+m+'" alt=""></li></ul></li><li>Compression techniques</li><li>-Layout shits &amp; repaints <ul><li><img src="'+d+'" alt=""></li><li><img src="'+h+'" alt=""></li></ul></li></ul><h2 id="assets" tabindex="-1">assets <a class="header-anchor" href="#assets" aria-label="Permalink to &quot;assets&quot;">​</a></h2><p><img src="'+_+'" alt=""></p><ul><li>images <ul><li>compress <ul><li><img src="'+b+'" alt=""></li><li>webp <ul><li><img src="'+f+'" alt=""></li><li><img src="'+y+'" alt=""></li></ul></li></ul></li></ul></li><li>video</li><li>font</li><li>css</li><li>js <ul><li><img src="'+v+'" alt=""></li></ul></li></ul>',9),w=[I];function C(M,q,G,S,P,D){return l(),s("div",{"data-pagefind-body":!0},w)}const A=i(k,[["render",C]]);export{x as __pageData,A as default};
