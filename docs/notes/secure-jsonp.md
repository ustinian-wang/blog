# jsonP漏洞

## 什么是jsonP

json是一种通过动态创建script标签实现跨域请求资源的解决方案，基本原理就是利用了html标签不会受到同源策略的影响，绕过同源策略获取远程资源。

## jsonP漏洞

### json劫持

如login.b.com网站提供的json格式：

```
data_kt({    newAcct: "boss@zhuanye02"    nickname: "Carry???"    phoneAcct: ""    qqAcct: ""    sacct: "boss"    sid: 1})
```

假设用户已经登录了login.b.com网站，攻击者通过一些图片或者链接诱惑用户进入第三方网站a.com，a.com网站就可以利用以下代码获取了用户的登录信息：

```
<script>    function data_kt(obj){        alert(obj);    }    </script><script src="http://login.b.com/ajax/getAcctInfo_h.do?callback=data_kt"></script>
```

### jsonP引起的xss问题

jsonP为了方便前端调用，callback参数一般都是可自定义的，也是这个可定义的callback名输出又导致了其他安全问题。

在早期 jsonP 出现时候，大家都没有合格的编码习惯。再输出 jsonP 时，没有严格定义好 Content-Type（ Content-Type: application/json ），误将Content-Type进行设置为text/html等，然后加上 callback 这个输出点没有进行过滤直接导致了一个典型的 XSS 漏洞。

```
<script src="http://127.0.0.1/getUsers.php?callback=<script>alert(/xss/)</script>"></script>
```

## jsonP安全问题的防御

### json劫持的防御

JSON 劫持的防御，重点其实就在于对调用方没有进行验证，那么对应的防御措施就比如：

● 验证referer，也就是验证调用方；

● 增加随机Token。

### 对产生xss问题的防御

对于XSS问题，我们从原理入手，最主要的就是：

● 设置正确的Content-Type；

● 可以通过对callback函数的长度进行限制、内容进行特殊字符的过滤，这块可以参考XSS的防御方法。

## 总结

1.  严格安全的实现 CSRF 方式调用 JSON 文件：限制 Referer 、部署一次性 Token 等。

2.  严格安装 JSON 格式标准输出 Content-Type 及编码（ Content-Type : application/json; charset=utf-8 ）。

3.  严格过滤 callback 函数名及 JSON 里数据的输出。

4.  严格限制对 JSONP 输出 callback 函数名的长度(如防御上面 flash 输出的方法)。

5.  其他一些比较“猥琐”的方法：如在 Callback 输出之前加入其他字符(如：/**/、回车换行)这样不影响 JSON 文件加载，又能一定程度预防其他文件格式的输出。还比如 Gmail 早起使用 AJAX 的方式获取 JSON ，听说在输出 JSON 之前加入 while(1) ;这样的代码来防止 JS 远程调用。