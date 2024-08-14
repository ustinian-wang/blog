### 前言

某某开源项目爆出“挖矿”代码、某某著名组件库爆出“圣诞雪花”。从这些现象可以看出项目的依赖项存在很大的不确定性的安全漏洞问题。本篇文章将会对部分解决方案进行探讨。

### 选型选型

#### 1、npm audit 或 yarn audit1、npm audit 或 yarn audit

##### 1.1、概述1.1、概述

官方提供的安全扫描审核指令，[npm-audit](https://docs.npmjs.com/cli/v7/commands/npm-audit)。是一项内置的安全功能，可以扫描项目中的安全漏洞，如果有的话，还可以提供评估报告，其中包含已识别出的异常，潜在的修复程序等的详细信息。它将根据[公共 npm 注册表中报告的已知漏洞检查项目](https://npmjs.com/advisories/)中已安装软件包的当前版本。如果发现安全问题，则会报告该问题。值得注意的是，该报告包含已识别漏洞的严重性级别。严重性的程度取决于问题的影响和可利用性。

##### 1.2、级别及建议措施1.2、级别及建议措施

级别如下（以及建议采取的措施）：

- Critical（严重）— 立即解决
- High（高）— 尽快解决
- Moderate（中度）— 时间允许的情况下解决
- Low（低）— 自行决定

##### 1.3、示例1.3、示例

这是在项目上运行命令后获得的输出示例：

![image](https://www.whitesourcesoftware.com/wp-content/media/2020/08/1-1.png)

如上图所示，该报告包括对漏洞的严重性级别的描述，有风险的程序包的名称，任何程序包的依赖项，其路径以及可用于获取有关该漏洞的更多信息的链接。它还可能包含特定版本范围，其中包括针对该漏洞的补丁程序。此外，它可以提供运行命令以解决安全问题。

如果未找到安全漏洞，则 npm audit 将提供该报告。这意味着在包依赖关系树中未发现具有已知问题的包。例子如下：

![image](https://www.whitesourcesoftware.com/wp-content/media/2020/08/2-1.png)

##### 1.4、修复漏洞1.4、修复漏洞

1）、npm audit fix

此子命令在后台执行完整的 npm install 命令，并坚持与 SemVer 兼容的版本。这样，可以在大多数项目中安全地运行它，而不必担心引入任何重大更改。但是，如果更新要求移至主要版本，则需要添加 force 标志

2）、npm audit fix —force

虽然补丁程序和次要版本可能具有向后兼容性，但升级到主要依赖版本可能会破坏代码。因此，在执行此命令之前，应该参考软件包的文档。

3）、单独执行 npm 建议的命令，并为不安全的依赖项安装特定的更新

![image](https://www.whitesourcesoftware.com/wp-content/media/2020/08/4-1.png)

4）、手动修复

- 在某些的情况下，即使漏洞仍然存在，可以继续使用该 npm 包。
- 更新依赖包。
- 自己修复漏洞，给 npm 包发 pr。

##### 1.5、优点1.5、优点

- 有大量的开源贡献者社区，他们致力于寻找和解决 npm 软件包中的漏洞。因此，npm 审核可以利用他们的努力来发现并修复代码中的安全性问题，而不必费力地手动查看项目中的依赖项以识别安全漏洞。
- 可以清楚地识别安全问题，并按照严重性级别对其进行标记。可以快速轻松地解决它们。
- 如果已发布修复程序，则它提供了开箱即用的选项来解决发现的异常。

##### 1.6、缺点1.6、缺点

- 手动处理效率不高

#### 2、GitLab 的 Dependency Scanning2、GitLab 的 Dependency Scanning

[Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/) 依赖扫描功能，GitLab 内置功能。可以扫码项目所依赖的 npm 包，发现安全漏洞问题。GitLab Ultimate 10.7 中引入。需要花钱，一个月 $99 元。

#### 3、Github Dependabot3、Github Dependabot

Github Dependabot 是一个 github 官方的工具，它可以帮助你检测你的项目， 并且做一些工作保证你项目的安全性。Dependabot 可以为你项目做的事情主要分成三大类：

- 保持所有依赖项更新
- 检测到易受攻击的依赖项会发送警报
- 停止使用易受攻击的依赖项并保持安全更新

##### 3.1、保持所有依赖项更新3.1、保持所有依赖项更新

Dependabot 除了可以帮助我们处理漏洞以外，还有一个非常重要的作用，就是帮助我们检测我们所使用的依赖包中是否有可以更新的版本，如果有，它也可以帮助我们实现自动更新。

##### 3.2、检测到漏洞依赖项会发送警报3.2、检测到漏洞依赖项会发送警报

Github 会检测漏洞依赖项，如果发现就会发出警报, 这种检测机制在以下几种情况下被触发：

1）、当 [GitHub Advisory Database](https://github.com/advisories) 中又收录了一个新的漏洞

> [GitHub Advisory Database](https://github.com/advisories) 中包含了所有目前发现的漏洞。Github 也为了方便开发者查询漏洞而开发了网站 github.com/advisories, 这里你可以浏览或搜索影响 GitHub 上开源项目的漏洞。

2）、来自 WhiteSource 的新的漏洞被处理

> WhiteSource DB 也是一个用于存储 open source security vulnerabilities 的 DB

3）、项目中中添加了新的依赖项或者升级了某一个依赖的版本。

默认情况下，Github 会检测所有的 public repo，当发现漏洞的时候 alert 仓库的维护者，alert 中会包含被影响的文件 link，以及漏洞修复的版本和信息。

#### 4、sonarqube4、sonarqube

[sonarqube](https://www.sonarqube.org/features/security/) 是一个用于代码质量管理的开源平台。其中的安全报告可快速为您提供应用程序安全性的概览，其中详细列出了您在 OWASP Top 10，CWE Top 25 2019 和 CWE Top 25 2020 以及 CWE 特定细节方面的问题。 扫描的安全漏洞主要是一些黑客漏洞，与开源项目 github 脱节。无法扫描依赖项，无法和 gitlab 集成。

### 结论结论

- Github 内置的 Dependabot 功能,漏洞扫描源自 [https://github.com/advisories。](https://github.com/advisories%E3%80%82) 实际上 Dependabot 也会发请求去检查 npm 的漏洞 [https://npmjs.com/advisories/，](https://npmjs.com/advisories/%EF%BC%8C) 因此覆盖了 npm audit 的功能。
    
- Github 内置的 Dependabot 功能，可以在发现漏洞或者依赖项新版本的时候自动发送 pr，由项目管理者选择是否合并该 pr，极大提升效率。
    

基于以上原因： **选择 Github 内置的 Dependabot 功能，与 gitlab 集成** 。

如何集成和实际例子可以参考下一篇文章 [gitlab 与 dependabot 集成](https://train.faisco.biz/rCurv) 。