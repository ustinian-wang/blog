import{_ as l,o as i,c as a,a5 as e}from"./chunks/framework.Cjg1mlEg.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/notes/dev-guide.md","filePath":"docs/notes/dev-guide.md","lastUpdated":1722777145000}'),r={name:"docs/notes/dev-guide.md"},o=e('<h2 id="新公司生存指南" tabindex="-1">新公司生存指南 <a class="header-anchor" href="#新公司生存指南" aria-label="Permalink to &quot;新公司生存指南&quot;">​</a></h2><h3 id="_1-角色定义" tabindex="-1">1. 角色定义 <a class="header-anchor" href="#_1-角色定义" aria-label="Permalink to &quot;1. 角色定义&quot;">​</a></h3><ul><li>导师：一般是带你熟悉开发环境的那个</li><li>leader：所在团队或者小组的直接领导</li><li>新手：你</li></ul><h3 id="_2-指引流程" tabindex="-1">2. 指引流程 <a class="header-anchor" href="#_2-指引流程" aria-label="Permalink to &quot;2. 指引流程&quot;">​</a></h3><ol><li>获取各个开发环境所需要的账号、密码和连接 <ul><li>如果账号没有权限，技术类找leader解决，非技术类找行政</li></ul></li><li>安装开发所需软件 <ul><li>如果不知道哪里找，咨询导师，如果也没有，让导师提供一份软件清单</li></ul></li><li>配置开发环境 <ul><li>比如mvn镜像、npm镜像、ssh密钥等</li></ul></li><li>熟悉公司开发规范 <ul><li>css，js</li><li>java</li><li>其他开发流程</li></ul></li><li>参与新人培训，整理培训资料里面有用的部分，一般分为两个类别 <ul><li>技术类 <ul><li>比如公司的web请求流程、日志查询、db读写等</li></ul></li><li>非技术类 <ul><li>上班时间、内部IT系统操作、公积金社保等信息了解</li><li>公司业务模式、产品服务背景等</li></ul></li></ul></li><li>日常开发培训 <ul><li>比如某个功能去哪里找、怎么看知道完成某个功能，需要修改哪个代码</li></ul></li></ol><h3 id="_3-群关系" tabindex="-1">3. 群关系 <a class="header-anchor" href="#_3-群关系" aria-label="Permalink to &quot;3. 群关系&quot;">​</a></h3><p>公司会有各种群，了解他们之间的区别，有助于日后的协作、问题解决效率，一般来说可能会有如下几个群：</p><ul><li>dev group：全部开发群</li><li>frontend/backend group：职责再细分点还会有前后端专属的群</li><li>small group：小组，比如3-4人</li><li>department：部门群，囊括所有开发、测试等人员的群</li><li>features X group：XXX功能支持群，比如某个大需求需要单独拉群沟通支持，类似特别的department</li><li>issue X group：某个缺陷的相关沟通群</li><li>company/area group：整个公司或某一栋楼的群</li></ul><h3 id="_4-功能开发培训" tabindex="-1">4. 功能开发培训 <a class="header-anchor" href="#_4-功能开发培训" aria-label="Permalink to &quot;4. 功能开发培训&quot;">​</a></h3><p>有的团队，可能会给你一个模拟的需求，让你通过实现这个需求，熟悉一整套开发流程。</p><h4 id="分析需求" tabindex="-1">分析需求 <a class="header-anchor" href="#分析需求" aria-label="Permalink to &quot;分析需求&quot;">​</a></h4><p>a. 基本要求</p><ul><li>需求由哪几部分功能组成？</li><li>哪些需要拆分模块、组件。各个元素之间的数据如何流转、通信？</li><li>预计整个需求开发下来每一部分耗时多久，总共需要多久才能实现完整的需求？</li><li>对于各个部分，你打算用什么方案去实现？</li></ul><p>b. 细化要求：</p><ul><li>功能点有哪些，可以考虑用xmind等一些脑图工具自行整理下</li><li>基于整理后的结果，应该对功能的规模、难度有一个初步的了解，也方便后续估计耗时，具体的实现方案</li><li>元素之间的交互、数据结构、通信方式，可以往下不断的细分设计，尽量穷举，例如一个元素组件有如下考虑： <ol><li>有哪些参数，参数类型是什么，默认值是什么</li><li>参数是否需要做空保护</li><li>组件有哪些事件通信，对外返回什么数据类型</li></ol></li></ul><h4 id="实现需求" tabindex="-1">实现需求 <a class="header-anchor" href="#实现需求" aria-label="Permalink to &quot;实现需求&quot;">​</a></h4><h5 id="我要在哪里写代码" tabindex="-1">我要在哪里写代码？ <a class="header-anchor" href="#我要在哪里写代码" aria-label="Permalink to &quot;我要在哪里写代码？&quot;">​</a></h5><ul><li>去哪里拉取仓库代码？</li><li>怎么启动服务进行开发，流程是什么？</li></ul><h5 id="写完之后我在哪里看效果" tabindex="-1">写完之后我在哪里看效果 <a class="header-anchor" href="#写完之后我在哪里看效果" aria-label="Permalink to &quot;写完之后我在哪里看效果&quot;">​</a></h5><ul><li>前端：如果项目有工程化，那么就是简单的yarn dev这一类的本机开发</li><li>后端：如果是本机启动服务，那么就是postman这类接口调试</li></ul><h5 id="我怎么部署到目标环境" tabindex="-1">我怎么部署到目标环境？ <a class="header-anchor" href="#我怎么部署到目标环境" aria-label="Permalink to &quot;我怎么部署到目标环境？&quot;">​</a></h5><ul><li>通过ci/cd，只要你git推送就会自动生效</li><li>古老一点，你push完代码后，可能还要shell登录目标环境手动部署</li></ul><h3 id="_5-大型需求的处理方式" tabindex="-1">5. 大型需求的处理方式 <a class="header-anchor" href="#_5-大型需求的处理方式" aria-label="Permalink to &quot;5. 大型需求的处理方式&quot;">​</a></h3><p>要求其提供前期的业务逻辑资料、技术实现方案。</p><ul><li><p>若需求同时符合如下特征，则要求开短会同步下自己的方案：</p><ol><li>同时涉及B端和C端，或涉及2个及以上C端，需求开发工期超过2个版本</li><li>期间可能存在未知问题阻塞进度，且涉及细节点较多</li></ol></li><li><p>短会要求如下：</p><ol><li>会前罗列好要讨论介绍的需求点，问题清单</li><li>短会由方案介绍和问题答疑这2部分组成，预估开会时间</li><li>会议时间，控制30分钟，建议方案介绍20分钟，问题答疑10分钟。可视情况延长到40分钟。</li><li>会议未确认或讨论耗时的问题，暂停讨论，列入会议纪要，会后同步结论。</li><li>会议期间有人负责沉淀输出会议纪要，安排事项。</li></ol></li><li><p>需求上线后</p><ol><li>整理相关的文档记录，组内同步共享。</li></ol></li></ul><h3 id="_6-协作规范" tabindex="-1">6. 协作规范 <a class="header-anchor" href="#_6-协作规范" aria-label="Permalink to &quot;6. 协作规范&quot;">​</a></h3><h4 id="协作流程示意图" tabindex="-1">协作流程示意图 <a class="header-anchor" href="#协作流程示意图" aria-label="Permalink to &quot;协作流程示意图&quot;">​</a></h4><h4 id="迭代周期介绍" tabindex="-1">迭代周期介绍 <a class="header-anchor" href="#迭代周期介绍" aria-label="Permalink to &quot;迭代周期介绍&quot;">​</a></h4><ul><li>周期长度</li><li>上线日</li><li>上线时间点</li><li>上线期间 <ul><li>哪些可以做</li><li>哪些不能做</li></ul></li></ul><h3 id="_7-工时评估原则" tabindex="-1">7. 工时评估原则 <a class="header-anchor" href="#_7-工时评估原则" aria-label="Permalink to &quot;7. 工时评估原则&quot;">​</a></h3><ol><li><p>穷举功能点</p><ul><li>尽可能穷举一个功能项，分割成若干个不可分割的小功能项</li><li>越是具体就意味着预估时间越是准确</li><li>时间预估的总和时间</li></ul></li><li><p>评估参考数字</p><ul><li>需要额外考虑测试的时间及其轮数，合理的测试时间是1：1开发时间</li><li>以及开发完成后修复bug的时间一般是1：1.5</li></ul></li><li><p>其他原则</p><ul><li>方案的预估不能夹杂个人情感，需要客观给出总时间</li><li>之后PM会参考这样的文档去做功能的开发取舍</li><li>方案的预估最好结合数据流转和具体的代码结构去考虑</li><li>有可能存在组件复用来节约开发时间</li><li>当开发时间少于时间预估文档，需要及时修改并同步信息</li><li>当开发时间多于时间预估文档，需要针对多出的部分与PM协商</li></ul></li></ol><h3 id="_8-开发规范" tabindex="-1">8. 开发规范 <a class="header-anchor" href="#_8-开发规范" aria-label="Permalink to &quot;8. 开发规范&quot;">​</a></h3><ul><li>需求沟通：开发过程中，有任何疑问都需要和产品经理、设计师讨论确认</li><li>开发提测：开发完成后，需要按流程规范走：本地提测给测试，dep3验收、灰度验收、正式上线等</li><li>开发过程有疑问，无法自己解决时：严格按流程走，有疑问可询问到导师和组长</li></ul><h3 id="_9-git规范" tabindex="-1">9. git规范 <a class="header-anchor" href="#_9-git规范" aria-label="Permalink to &quot;9. git规范&quot;">​</a></h3><ul><li>开发阶段：独立测试通过=》提交代码到master，ci那边会自动同步代码到本地=》继续本地测试</li><li>封板之后的bug修复：独立测试通过=》代码提交到master并推送=》本地测试通过=》master上对应commit cherry-pickup到pre-production。</li><li>上线之后的bug修复：流程和封板之后的bug修复一样</li><li>代码提交并推送master分支后，通知导师review验收，方可继续迭代</li></ul><h3 id="_10-需求开发" tabindex="-1">10. 需求开发 <a class="header-anchor" href="#_10-需求开发" aria-label="Permalink to &quot;10. 需求开发&quot;">​</a></h3><ol><li><p>确认需求内容是否完整，提供有且不限定如下：</p><ul><li>原型、设计稿、需求文档、测试用例</li></ul></li><li><p>相关人员需要拉群沟通，导师、PM、自己拉群也可以。</p></li><li><p>先自己做准备，再跟其他人沟通需求，具体要求如下：</p><ul><li>了解需求相关的文档资料、对其有一个整体认识</li><li>整理问题清单，有针对性地对别人提问。</li></ul></li><li><p>有其他沟通结论，要沉淀文字结论，记录进文档，方便同步测试、开发。</p></li></ol><h3 id="_11-灰度控制" tabindex="-1">11. 灰度控制 <a class="header-anchor" href="#_11-灰度控制" aria-label="Permalink to &quot;11. 灰度控制&quot;">​</a></h3><p>有些需求可能需要做开关控制，我们一般可做如下操作：</p><ul><li>备注好内容 <ul><li>开关名称</li><li>如何进入灰度</li><li>如何推出灰度</li><li>灰度和非灰度如何识别</li></ul></li><li>控制逻辑</li></ul><ol><li>需求开发或技术优化，询问自己的导师，没有导师的找组长确认是否需要添加灰度控制逻辑，如果需要往下</li><li>讨论后定制具体的灰度逻辑，例如梯度开放灰度时，每个区间是多大，比如之前常用从1700W用开始测试，每一个阶段递增50W用户，例如1700-1750，1750-1800，以此类推</li><li>通知后端或自己填写好配置greyConfig文件的新key，配置逻辑详见如上</li><li>在web或res获取到这个key，进行if-else逻辑判断编写对应的逻辑。上到本地环境后，通过配置中心进行开关切换，验证恢复开关生效与否。</li><li>剩余流程跟普通开发流程一致</li><li>灰度测试完后，需要废弃掉代码里面引用开关的逻辑。</li></ol>',41),t=[o];function u(h,d,n,s,c,p){return i(),a("div",{"data-pagefind-body":!0},t)}const m=l(r,[["render",u]]);export{b as __pageData,m as default};
