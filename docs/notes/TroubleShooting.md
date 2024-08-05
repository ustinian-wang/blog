# troubleshooting

## npm/yarn 包管理工具

### Q：出现“certificate has expired”错误

问题原因：https验证出问题
解决方式：运行 `yarn config set strict-ssl false` （禁用SSL严格验证）

### Q：install超时

问题原因：npm镜像被墙了
确认步骤：
    1. ping下超时的ip，看是什么情况：部分丢包还是全部丢包
    2. 保证镜像一致：
```shell
faiscO0DESKTOP-C6M762H MINGW64d/softwa
$ npm config get registry
https://registry.npm.taobao.org/

faiscO@DESKTOP-C6M762H MINGW64d/softwa
$ yarn config get registry

https://registry.npm.taobao.org
```
解决方式：
    1. 部分丢包：请重新安装依赖
    2. 全部丢包：参考`Q：出现 error Error: getaddrinfo ENoTFoUND registry.nlark.com`

### Q：出现 error Error: getaddrinfo ENoTFoUND registry.nlark.com

问题原因：一般是项目的package-lock.json或yarn.lock依赖镜像域名过期，
解决方案：
    1. 将lock文件中的registry.nlark.com替换为registry.npmmirror.com或其他第三方国内镜像，第三方可自行搜索引擎

### Q: node-sass安装出错
问题表现：
```shell
error D:\chenjiajin\res\mallhelper-res\node_modules\node-sass: command failed
```
解决方式：
    1. 用 管理者权限运行power shell 执行 `npm install --global --production windows-build-tools`
    2. 设置镜像：`yarn --registry=http://registry.npm.faidev.cc`


## GIT

### Q: 前端代码在某个环境没生效
按照如下步骤排查：
- search下关键字是否在浏览器的静态资源中出现：看下服务器上有无对应的代码
- 代码没有pick到暂存区：把master合并到目标分支
- ci中，环境的git暂存区有内容导致ci拉不下来：git checkout掉
- 代码没有压缩，在src下有，在min下没有：走系统压缩下

## IOS

### Q: 图片旋转

- 背景：互动这边有接到工单，客户反馈上传的图片会被旋转。

- 测试：ios及数码相机拍摄的图片，会带有exif信息，其中一个叫orientation的方向信息，会导致在部分pc浏览器以及安卓机型里面无法正常展示。EXIF查看器：[https://exif.tuchong.com/](https://exif.tuchong.com/) 可查询图片是否带有旋转参数。

- 测试b端和c端的时候可考虑这种情况，上传带有旋转参数的图片，看看是否都能正常展示
![[../images/5b2c305e278c857a4448cc7244b0758b0af5888c6e623e188655ad7999ee4e1b7356bf88e94199829032e10b5e63b4e5464759fea8de00d0c23bc5aaeaf0f1b7.png]](../images/5b2c305e278c857a4448cc7244b0758b0af5888c6e623e188655ad7999ee4e1b7356bf88e94199829032e10b5e63b4e5464759fea8de00d0c23bc5aaeaf0f1b7.png)

## html
### Q: 白屏情况
- 页面视觉被隐藏了
