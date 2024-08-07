# CSRF攻击

CSRF(Cross-site request forgery)跨站请求伪造是指攻击者诱导受害者进入第三方网站，在第三方网站中向被攻击网站发送跨站请求，利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，冒充用户对被攻击的网站执行某项操作的目的。

一个典型的CSRF攻击有着以下的流程：
1. 受害者登录a.com，并保留了登录凭证(Cookie)
2. 攻击者引诱受害者访问了b.com
3. b.com向a.com发送了一个请求：a.com/act=xx
4. a.com接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求
5. a.com以受害者的名义执行了act=xx
6. 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作

## 常见的攻击类型

### GET类型的CSRF
GET类型的CSRF利用非常简单，只需要一个HTTP请求，一般会这样利用:
```
<img src="http://bank.example/withdraw?amount=10000&for=hacker">
```
在受害者访问含有这个img的页面后，浏览器会自动向`http://bank.example/withdraw?account=xiaoming&amount=10000&for=hacker`发出一次HTTP请求。bank.example就会收到包含受害者登录信息的一次跨域请求。

### POST类型的CSRF
这种类型的CSRF利用起来通常使用的是一个自动提交的表单，如:
```
<form action="http://bank.example/withdraw" method=POST>
<input type="hidden" name="account" value="xiaoming" />
<input type="hidden" name="amount" value="10000" />
<input type="hidden" name="for" value="hacker" />
</form>
<script> document.forms[0].submit();</script>
```
访问该页面后，表单会自动提交，相当于模拟用户完成了一次POST操作。POST类型的攻击通常比GET要求更加严格一点，但仍并不复杂。任何个人网站、博客，被黑客上传页面的网站都有可能是发起攻击的来源，后端接口不能将安全寄托在仅允许POST上面。

### 全链接类型的CSRF
链接类型的CSRF并不常见，比起其他两种用户打开页面就中招的情况，这种需要用户点击链接才会触发。这种类型通常是在论坛中发布的图片中嵌入恶意链接，或者以广告的形式诱导用户中招，攻击者通常会以比较夸张的词语诱骗用户点击，例如:
```
<a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker' taget="blank">
重磅消息!!
</a>
```
由于之前用户登录了信任的网站A，并且保存登录状态，只要用户主动访问上面的这个PHP页面，则表示攻击成功。

## CSRF攻击的特点
- 攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。
- 攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作，而不是直接窃取数据。
- 整个过程攻击者并不能获取到受害者的登录凭证，仅仅是"冒用"。
- 跨站请求可以用各种方式，如图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。
- CSRF通常是跨域的，因为外域通常更容易被攻击者掌控。但是如果本域下有容易被利用的功能，比如可以发图和链接的论坛和评论区，攻击可以直接在本域下进行，而且这种攻击更加危险。

## 预防CSRF攻击

### 同源检测
- 使用Origin Header确定来源域名：在部分与CSRF有关的请求中，请求的Header中会携带Origin字段。字段内包含请求的域名(不包含path及query)。如果Origin存在，那么直接使用Origin中的字段确认来源域名就可以。注意Origin在这两种情况下并不存在：IE11同源策略、302重定向。
- 使用Referer Header确定来源域名：根据HTTP协议，在HTTP头中有一个字段叫Referer，记录了该HTTP请求的来源地址。对于Ajax请求、图片和script等资源请求，Referer为发起请求的页面地址。对于页面跳转，Referer为打开页面历史记录的前一个页面地址。因此我们可以使用Referer中链接的Origin部分来得知请求的来源域名。需要注意的是攻击者可以在自己的请求中隐藏Referer。另外，在某些情况下Referer没有或者不可信，比如IE6、7下使用window.location.href=url进行界面跳转、使用window.open、HTTPS页面跳转到HTTP页面、点击Flash上的链接等情况。

### CSRF Token
CSRF Token的防护策略分为三个步骤：
1. 将CSRF Token输出到页面中：在用户打开页面时，服务器需要给这个用户生成一个随机Token，一般Token都包括随机字符串和时间戳的组合。为了安全起见，Token最好存在服务器的Session中。然后在每次页面加载时，使用JS遍历整个DOM树，对于DOM中所有的a和form标签后加入Token。但对于在页面加载之后动态生成的HTML代码，需要程序员在编码时手动添加Token。
2. 页面提交的请求携带这个Token：对于GET请求，Token将附在请求地址之后。而对于POST请求来说，要在form的最后加上`<input type="hidden" name="csrftoken" value="tokenvalue"/>`。这样就把Token以参数的形式加入请求了。
3. 服务器验证Token是否正确：当用户从客户端得到了Token，再次提交给服务器的时候，服务器需要判断Token的有效性。验证过程是先解密Token，对比加密字符串以及时间戳，如果一致且时间未过期，那么这个Token就是有效的。如果Token无效，或者提供的值与会话中的值不匹配，则应中止请求，重置Token，并将事件记录为正在进行的潜在CSRF攻击。

### 双重Cookie验证
利用CSRF攻击不能获取到用户Cookie的特点，可以要求Ajax和表单请求携带一个Cookie中的值。双重Cookie验证的流程如下：
1. 在用户访问网站页面时，向请求域名注入一个Cookie，内容为随机字符串(例如`csrfcookie=v8g9e4ksfhw`)。
2. 在前端向后端发起请求时，取出Cookie，并添加到URL的参数中(例如POST `https://www.a.com/comment?csrfcookie=v8g9e4ksfhw`)。
3. 后端接口验证Cookie中的字段与URL参数中的字段是否一致，不一致则拒绝请求。

双重Cookie验证相对于CSRF Token来说简单，可以通过前后端拦截的方式自动化实现。后端校验也更加方便，只需进行请求中字段的对比，而不需要再进行查询和存储Token。

缺点是Cookie中增加了额外的字段，并且如果存在其他漏洞(如XSS)，攻击者可以注入Cookie，使该防御方式失效。

### Samesite Cookie属性
Samesite Cookie属性是为Set-Cookie响应头新增的属性，用来标明这个Cookie是个"同站Cookie"，只能作为第一方Cookie，不能作为第三方Cookie。Samesite有两个属性值，分别是Strict和Lax。
- Samesite=Strict：严格模式，表明这个Cookie在任何情况下都不可能作为第三方Cookie。
- Samesite=Lax：宽松模式，允许在某些情况下作为第三方Cookie。

Samesite属性可以用来限制跨站请求伪造，但存在缺陷，不支持子域，不适用于多个子域名的网站，并且需要使用HTTPS方式传输Cookie以确保安全。

以上是预防CSRF攻击的几种常用方法。需要根据具体情况选择合适的防护方式来保护网站和用户的安全。