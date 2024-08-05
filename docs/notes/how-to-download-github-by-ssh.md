# 如何使用ssh下载github项目

## 配置本机的ssh

ssh是什么，此处不赘述，自行查阅。

### 生成密钥

先根据生成ssh密钥：`ssh-keygen -t rsa -b 4096 -C “your_email@example.com”`
你会得到公钥和私钥  `id_rsa.pub`, `id_rsa`

### github添加密钥

登录github，访问[SSH and GPG keys](https://github.com/settings/keys)，把刚才生成的`id_rsa.pub`通过`New SSH key`进行添加

### clone git仓库

以后得通过`git clone git@host:path/to/repository`这种格式进行clone，否则密钥不会生效，至于为什么，你可以自行查阅git官方文档
