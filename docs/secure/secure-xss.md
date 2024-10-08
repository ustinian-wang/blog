# xss攻击
## xss是什么
Cross-Site Scripting(跨站脚本攻击)简称 XSS，是一种代码注入攻击。攻击者
通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，
攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。
XSS 的本质是:恶意代码未经过滤，与网站正常的代码混在一起;浏览器无法分
辨哪些脚本是可信的，导致恶意脚本被执行。
而由于直接在用户的终端执行，恶意代码能够直接获取用户的信息，或者利用这
些信息冒充用户向网站发起攻击者定义的请求。
用户注入”恶意脚本"的方法有:
来自用户的 UGC 信息
来自第三方的链接
URL 参数
POST 参数
Referer (可能来自不可信的来源)
Cookie(可能来自其他子域注入)
xss分类
根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM 型三种。
存储型xss
存储型 XSS 的攻击步骤:
1.攻击者将恶意代码提交到目标网站的数据库中;
2.用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返
回给浏览器;
3.用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行;
4.恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网
站接口执行攻击者指定的操作。
5.这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信
等。
反射型xss
反射型 XSS 的攻击步骤:
1.攻击者构造出特殊的 URL，其中包含恶意代码:
2.用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接
在 HTML 中返回给浏览器;
3.用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行;
恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网
4
站接口执行攻击者指定的操作。
反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。
由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导
用户点击。POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻(需要
构造表单提交页面，并引导用户点击)，所以非常少见。
反射型 XSS 跟存储型 XSS 的区别是:存储型 XSS 的恶意代码存在数据库
里，反射型 XSS 的恶意代码存在 URL 里。
DOM型xss
DOM 型 XSS 的攻击步骤:
1.攻击者构造出特殊的 URL，其中包含恶意代码,
2.用户打开带有恶意代码的 URL;
3.用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并
执行;
恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网
4
DOM 型 XSS 跟前两种 XSS 的区别:DOM 型XSS 攻击中，取出和执行恶意代码
由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服
务端的安全漏洞。
预防xss攻击
通过前面的介绍可以得知，XSS 攻击有两大要素:
1.攻击者提交恶意代码。
2.浏览器执行恶意代码。
针对第一个要素:我们是否能够在用户输入的过程，过滤掉用户输入的恶意代码呢?
输入过滤
在用户提交时，由前端过滤输入，然后提交到后端。这样做是否可行呢?
答案是不可行。一旦攻击者绕过前端过滤，直接构造请求，就可以提交恶意代码
了。
那么，换一个过滤时机:后端在写入数据库前，对输入进行过滤，然后把“安全的”
内容，返回给前端。这样是否可行呢?
我们举一个例子，一个正常的用户输入了5{<}7 这个内容，在写入数据库前，被
转义变成了5 &lt;7 。问题是:在提交阶段，我们并不确定内容要输出到哪里。这里
的“并不确定内容要输出到哪里”有两层含义:
1.用户的输入内容可能同时提供给前端和客户端，而一旦经过了escapeHTML()，客
户端显示的内容就变成了乱码(5{<}7)。
2.在前端中，不同的位置所需的编码也不同。
当5{<}7作为 HTML 拼接页面时，可以正常显示:
{<}div title="comment"{>}5 &lt; 7{<}/div{>}
当5{<}7 通过 Aiax 返回，然后赋值给 JavaScript 的变量时，前端得到的字符
串就是转义后的字符。这个内容不能直接用于 Vue 等模板的展示，也不能直接用
于内容长度计算。不能用于标题、alert 等。
所以，输入侧过滤能够在某些情况下解决特定的XSS 问题，但会引入很大的不
确定性和乱码问题。在防范 XSS 攻击时应避免此类方法。
当然，对于明确的输入类型，例如数字、URL、电话号码、邮件地址等等内容，
进行输入过滤还是必要的。既然输入过滤并非完全可靠，我们就要通过“防止浏览器执
行恶意代码”来防范 XSS。这部分分为两类:
防止 HTML 中出现注入。
防止 JavaScript 执行时，执行恶意代码。
预防存储型和反射型 XSS 攻击
存储型和反射型 XSS 都是在服务端取出恶意代码后，插入到响应 HTML 里的
攻击者刻意编写的“数据”被内嵌到“代码”中，被浏览器所执行。
预防这两种漏洞，有两种常见做法:
1.改成纯前端渲染，把代码和数据分隔开。
2.对 HTML 做充分转义。
纯前端渲染
纯前端渲染的过程:
1.浏览器先加载一个静态 HTML，此 HTML 中不包含任何跟业务相关的数据;
2.然后浏览器执行 HTML 中的 JavaScript;
3.JavaScript 通过 Ajax 加载业务数据，调用 DOM API 更新到页面上。
在纯前端渲染中，我们会明确的告诉浏览器:下面要设置的内容是文本
(.innerText)，还是属性(.setAttribute)，还是样式(.style)等等。浏览器不会被
轻易的被欺骗，执行预期外的代码了。但纯前端渲染还需注意避免 DOM 型 XSS 漏
洞(例如 onload 事件和 href 中的 javascript:xxx 等，请参考下文"预防 DOM 型
XSS 攻击“部分)。
在很多内部、管理系统中，采用纯前端渲染是非常合适的。但对于性能要求高
或有 SEO 需求的页面，我们仍然要面对拼接 HTML 的问题。
转义HTML
如果拼接 HTML 是必要的，就需要采用合适的转义库，对 HTML 模板各处插入点
进行充分的转义。常用的模板引擎，如 doT.js、eis、FreeMarker 等，对于 HTML 转
义通常只有一个规则，就是把 &{<}{>}"'/这几个字符转义掉，确实能起到一定的
Xss 安全漏洞
简单转义是否有防护作用
HTML 标签文字内容
有
有
HTML 属性值
老
CSS 内联样式
无
内联 JavaScript
无
内联 JSON
无
跳转链接
所以要完善 XSS 防护措施，我们要使用更完善更细致的转义策略。例如 Java 工程
里，常用的转义库为 org.owasp.encoder。以下代码引用自
8 org.owasp.encoder 的官方说明 。
{<}!-- HTML 标签内文字内容--{>}
{<}div{>}{<}号= Encode.forHtml(UNTRUSTED)号{>}{<}/div{>}
{<}!-- HTML 标签属性值 --{>}
{<}input value="{<}%= Encode.forHtml(UNTRUSTED)号{>}"/{>}
{<}!--css 属性值 --{>}
8{<}div style="width:{<}= Encode.forCssstring(UNTRUSTED) 号{>}"{>}
10 {<}!-- CSS URL --{>}
11 {<}div style="background:{<}= Encode.forCssUrl (UNTRUSTED) 号{>}"{>}
13 {<}!-- Javascript 内联代码块 --{>}
14 {<}script{>}
var msg ="{<}号= Encode.forJavaScript(UNTRUSTED)号{>}"
alert(msg);
17 {<}/script{>}
19{<}!--Javascript 内联代码块内嵌 JSON --{>}
4 {<}!-- HTML 标签属性值 --{>}
{<}input value="{<}$= Encode.forHtml(UNTRUSTED)号{>}" /{>}
{<}!--css 属性值--{>}
{<}div style="width:{<}= Encode.forCssstring(UNTRUSTED)号{>}"{>}
10 {<}!-- CSS URL --{>}
11 {<}div style="background:{<}= Encode.forCssUrl(UNTRUSTED) 号{>}"{>}
13 {<}!-- Javascript 内联代码块 --{>}
14 {<}script{>}
var msg = "{<}= Encode.forJavaScript(UNTRUSTED)号{>}"
15
alert(msg);
17 {<}/script{>}
19{<}!--Javascrint 内联代码块内嵌 JSON --{>}
4 {<}!-- HTML 标签属性值 --{>}
{<}input value="{<}$= Encode.forHtml(UNTRUSTED)号{>}" /{>}
{<}!--css 属性值 --{>}
{<}div style="width:{<}= Encode.forCssstring(UNTRUSTED) 号{>}"{>}
10 {<}!-- CSS URL --{>}
11 {<}div style="background:{<}= Encode.forCssUrl (UNTRUSTED) 号{>}"{>}
{<}!-- Javascript 内联代码块 --{>}
14{<}script{>}
var msg = "{<}号= Encode.forJavaScript(UNTRUSTED) 号{>}" ;
16 alert(msg);
17 {<}/script{>}
{<}!-- Javascript 内联代码块内嵌 JSON --{>}
{<}!--HTML 标签属性值 --{>}
{<}input value="{<}$= Encode.forHtml(UNTRUSTED)号{>}" /{>}
{<}!--css 属性值 --{>}
{<}div style="width:{<}= Encode.forCssString (UNTRUSTED)号{>}"{>}
10 {<}!-- CSS URL --{>}
11 {<}div style="background:{<}= Encode.forCssUrl (UNTRUSTED)号{>}"{>}
13 {<}!-- Javascript 内联代码块 --{>}
14 {<}script{>}
var msg = "{<}号= Encode.forJavaScript(UNTRUSTED) 号{>}";
16 alert(msg);
17 {<}/script{>}
19{<}!--&x99eri%5,内联代码块内嵌 JSON --{>}
{<}a href="UNTRUSTED"{>}1{<}/a{>}
{<}script{>}
//setTimeout()/setInterval()中调用恶意代码
e
setTimeout ("UNTRUSTED" )
10 setInterval("UNTRUSTED" )
// location 调用恶意代码
13 location.href = 'UNTRUSTED'
15 //eva1()中调用恶意代码
16 eval("UNTRUSTED" )
17 {<}/script{>}
其他xss防范措施
Content Security Policy
严格的 CSP 在 XSS 的防范中可以起到以下的作用
禁止加载外域代码，防止复杂的攻击逻辑。
禁止外域提交，网站被攻击后，用户的数据不会泄露到外域。
禁止内联脚本执行(规则较严格，目前发现 GitHub 使用)。
禁止未授权的脚本执行(新特性，Google Map 移动版在使用)。
合理使用上报可以及时发现 XSS，利于尽快修复问题。
输入内容长度控制
对于不受信任的输入，都应该限定一个合理的长度。虽然无法完全防止 XSS 发生，但可以增
加 XSS 攻击的难度。
其他安全措施
HTTP-only Cookie:禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也
无法窃取此 Cookie。
验证码:防止脚本冒充用户提交危险操作。
xss检测
输入框输入以下代码即可;或者使用工具Arachni、 Mozilla HTTP Observatory
少 w3af 等。
jaVascript:/*-/*｀/*\`/*'/*"/**/(/**/oNcliCk=alert()
)//80D80A80d80a//{<}/stYle/{<}/titLe/{<}/textarEa/{<}/scRipt/--!{>}\x3csVg/{<}
sVg/oNloAd=alert()//{>}\x3e
总结
虽然很难通过技术手段完全避免 XSS，但我们可以总结以下原则减少漏洞的产生:
利用模板引擎 开启模板引擎白带的 HTML 转义功能。例如: 在 ejs 中，尽量使用{<}%=
data %{>}而不是 {<}%- data %{>};在 doTjs 中，尽量使用<{><{>! data <}>而不是 <{><{>= data
<}>;在 FreeMarker 中，确保引擎版本高于 2.3.24，并且选择正确的
freemarker.core.OutputFormat.
避究网联事件从里小安性H0nLa0=0iagal、OnVK= gOROOMXN
拼接内联事件的写法。在 JavaScript 中通过.addEventlistener()事件绑定会更安全。
避免拼接 HTML 前端采用拼接 HTML 的方法比较危险，如果框架允许，使用
createElement、setAttribute之类的方法实现。或者采用比较成熟的渲染框架，如
Vue/React 等。
时刻保持警惕 在插入位置为 DOM 属性、链接等位置时，要打起精神，严加防范。
增加攻击难度，降低攻击后果 通过 CSP、输入长度配置、接口安全措施等方法，增加攻
击的难度，降低攻击的后果。
主动检测和发现 可使用 XSS 攻击字符串和自动扫描工具寻找潜在的 XSS 漏洞。