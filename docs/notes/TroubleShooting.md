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


### Q 如何给新仓库设置git
要设置 Git 项目的远程仓库，你需要进行以下几个步骤：

#### 1. **初始化 Git 仓库（如果还没有初始化）**
在你的项目目录中打开终端，运行以下命令来初始化 Git 仓库：
```bash
git init
```

#### 2. **添加远程仓库**
使用 `git remote add` 命令将远程仓库添加到你的本地 Git 仓库中。你需要知道远程仓库的 URL（可以是 HTTPS 或 SSH）。例如：
```bash
git remote add origin https://github.com/username/repository.git
```
或者，如果你使用 SSH：
```bash
git remote add origin git@github.com:username/repository.git
```

#### 3. **验证远程仓库设置**
你可以使用以下命令来查看已配置的远程仓库：
```bash
git remote -v
```
这将显示类似以下的输出：
```plaintext
origin  https://github.com/username/repository.git (fetch)
origin  https://github.com/username/repository.git (push)
```

#### 4. **推送代码到远程仓库**
将本地的代码推送到远程仓库。第一次推送时，通常会指定分支名称：
```bash
git push -u origin master
```
（如果你的默认分支是 `main`，则使用 `main` 代替 `master`。）

#### 5. **修改远程仓库 URL（如果需要）**
如果需要更改远程仓库的 URL，可以使用：
```bash
git remote set-url origin new-url
```
例如：
```bash
git remote set-url origin https://github.com/newusername/newrepository.git
```

#### 6. **删除远程仓库（如果需要）**
如果你需要删除某个远程仓库，可以使用：
```bash
git remote remove origin
```

以上步骤涵盖了大部分常见的远程仓库操作。希望这些信息对你有所帮助！

### Q 如果两个分支没有关系，怎么强制合并？
这个错误通常发生在你尝试合并两个没有共同历史的分支时。要解决这个问题，你可以使用 `--allow-unrelated-histories` 选项来允许合并。运行以下命令：

```bash
git merge branch-name --allow-unrelated-histories
```

这将允许 Git 合并两个没有共同历史的分支。确保你在合并之前备份了重要数据，以防出现意外问题。

## IOS

### Q: 图片旋转

- 背景：互动这边有接到工单，客户反馈上传的图片会被旋转。

- 测试：ios及数码相机拍摄的图片，会带有exif信息，其中一个叫orientation的方向信息，会导致在部分pc浏览器以及安卓机型里面无法正常展示。EXIF查看器：[https://exif.tuchong.com/](https://exif.tuchong.com/) 可查询图片是否带有旋转参数。

- 测试b端和c端的时候可考虑这种情况，上传带有旋转参数的图片，看看是否都能正常展示
![[../images/5b2c305e278c857a4448cc7244b0758b0af5888c6e623e188655ad7999ee4e1b7356bf88e94199829032e10b5e63b4e5464759fea8de00d0c23bc5aaeaf0f1b7.png]](../images/5b2c305e278c857a4448cc7244b0758b0af5888c6e623e188655ad7999ee4e1b7356bf88e94199829032e10b5e63b4e5464759fea8de00d0c23bc5aaeaf0f1b7.png)

## html
### Q: 白屏情况
- 页面视觉被隐藏了
