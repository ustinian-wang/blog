# cross domain

## 如何支持A域名请求B域名的数据?

### 原理

如果服务器设置了Access-Control-Allow-Credentials为true，并且前端请求中设置了withCredentials为true，那么在一次请求中，客户端和服务器之间通信的次数通常为2次。

具体的通信过程如下：

1. 第一次通信：客户端发送一个预检请求（Preflight Request）OPTIONS，该请求用于获取服务器是否允许跨域请求以及可以携带的自定义请求头等信息。这个预检请求会包含Access-Control-Request-Method和Access-Control-Request-Headers等头部信息。

    - 客户端发送OPTIONS请求到服务器，携带预检请求的头部信息。
    - 服务器接收到预检请求，检查是否允许跨域请求，并根据请求头部的信息进行处理。
    - 服务器发送响应给客户端，包含Access-Control-Allow-Origin和Access-Control-Allow-Methods等头部信息。

2. 第二次通信：如果服务器允许跨域请求，并且预检请求通过了验证，那么客户端会发送实际的请求。

    - 客户端发送实际的请求（GET、POST等）到服务器，携带请求头部和请求体。
    - 服务器接收到请求，处理请求的逻辑。
    - 服务器发送响应给客户端，包含响应头部和响应体。

需要注意的是，预检请求只在特定情况下发生，例如请求包含了自定义的请求头部、请求方法为PUT、DELETE等非简单请求，或者使用了某些特殊的Content-Type。如果不满足这些条件，浏览器会直接发送实际的请求，而不进行预检。

同时，预检请求的缓存时间也会影响通信次数。浏览器可以对预检请求的响应进行缓存，并在接下来的请求中重用，避免再次发送预检请求。

总结起来，在Access-Control-Allow-Credentials被设置为true的情况下，客户端和服务器之间的通信通常会有两次：一次预检请求，一次实际请求。但是具体的情况还会受到其他因素的影响，如缓存机制以及请求类型等。

#### Q: options是浏览器自己发起的，还是ajax库自己发送的?
预检请求（OPTIONS请求）是由浏览器自动在发送跨域请求之前发起的，而不是由Ajax库（如jQuery、axios等）自己发送的。当浏览器检测到跨域请求时，会自动发送一个OPTIONS请求来获取服务器是否允许跨域请求以及可以携带的自定义请求头等信息。

在发送跨域请求时，Ajax库会根据浏览器的自动发送的预检请求的响应情况来决定是否发送实际的请求。如果预检请求通过验证（即服务器返回了合适的响应头部），则Ajax库会继续发送实际的请求。

所以，Ajax库并不直接发送预检请求，而是依赖于浏览器在跨域请求时自动发送的预检请求，并根据预检请求的响应来决定是否发送实际的请求。

#### Q: 那withCredentials是ajax库设置还是浏览器自带呢？
`withCredentials`是XMLHttpRequest对象（Ajax）的一个属性，用于指示浏览器在发送跨域请求时是否携带身份凭证（例如Cookie、HTTP认证等）。

该属性是Ajax库（例如jQuery、axios等）提供的接口，通过设置该属性可以告知浏览器在请求中携带身份凭证。当设置`withCredentials`为`true`时，浏览器会在发送跨域请求时，将当前域下的身份凭证信息（如Cookie）包含在请求中。

需要注意的是，`withCredentials`属性仅在特定条件下生效：
- 请求的协议必须为HTTP或HTTPS。
- `Access-Control-Allow-Origin`响应头不能设置为通配符`*`，而必须明确指定允许跨域请求的源。
- `Access-Control-Allow-Credentials`响应头必须设置为`true`，表示服务器允许跨域请求携带身份凭证。

因此，`withCredentials`属性的设置是由Ajax库在发送请求时设置的，供浏览器在跨域请求中决定是否携带身份凭证。浏览器会根据这个属性的值来决定是否在请求中发送身份凭证。

#### Q: 这样子会有性能开销么?
在跨域请求中设置`withCredentials: true`可能会引入一些额外的性能开销，但具体影响取决于网络环境、服务器响应时间和跨域请求的复杂性等因素。

当设置`withCredentials: true`时，浏览器会在跨域请求中携带身份凭证（如Cookie），这会增加请求的大小。在网络较慢的情况下，这可能会导致请求传输的时间变长。

此外，跨域请求中的预检请求（OPTIONS请求）也会引入一定的性能开销。在发送实际请求之前，浏览器会先发送预检请求，服务器需要处理预检请求并返回合适的响应。这会增加服务器的请求处理时间。

另外，需要注意的是，开启跨域请求携带身份凭证也会增加一定的安全风险。因此，在使用`withCredentials: true`时，要确保服务器端对身份凭证的处理和验证是安全可靠的。

综上所述，设置`withCredentials: true`可能会引入一些性能开销，但实际影响与具体情况相关。在实际应用中，建议进行性能测试和评估，以确保跨域请求的性能满足要求。



