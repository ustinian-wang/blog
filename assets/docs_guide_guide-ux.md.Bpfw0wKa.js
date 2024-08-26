import{_ as a,o as t,c as e,a5 as l}from"./chunks/framework.Cjg1mlEg.js";const q=JSON.parse('{"title":"产品规范文档","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/guide-ux.md","filePath":"docs/guide/guide-ux.md","lastUpdated":1724652049000}'),i={name:"docs/guide/guide-ux.md"},d=l('<h1 id="产品规范文档" tabindex="-1">产品规范文档 <a class="header-anchor" href="#产品规范文档" aria-label="Permalink to &quot;产品规范文档&quot;">​</a></h1><p>概述：</p><p>通用交互规范目的是保证整站的交互体验的一致性。并且保证一些体验较好的交互方式能在各个模块中得以使用，从而保证产品设计的一致性，提升整体产品质量，减少返工成本。</p><h2 id="弹窗" tabindex="-1">弹窗 <a class="header-anchor" href="#弹窗" aria-label="Permalink to &quot;弹窗&quot;">​</a></h2><h3 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h3><ul><li>提示弹窗</li><li>确认弹窗</li><li>操作弹窗</li></ul><h3 id="提示弹窗" tabindex="-1">提示弹窗 <a class="header-anchor" href="#提示弹窗" aria-label="Permalink to &quot;提示弹窗&quot;">​</a></h3><ul><li>按钮表现： <ul><li>确认按钮：主题色</li><li>取消按钮：白色</li><li>关闭按钮：可点击</li></ul></li></ul><h3 id="确认弹窗" tabindex="-1">确认弹窗 <a class="header-anchor" href="#确认弹窗" aria-label="Permalink to &quot;确认弹窗&quot;">​</a></h3><h4 id="修改确认弹窗" tabindex="-1">修改确认弹窗 <a class="header-anchor" href="#修改确认弹窗" aria-label="Permalink to &quot;修改确认弹窗&quot;">​</a></h4><ul><li><p>文案：默认为【您的修改尚未保存，确定要离开吗?】，可根据实际情况定制</p></li><li><p>按钮表现：</p><ul><li>确认按钮：主题色</li><li>取消按钮：白色</li><li>关闭按钮：可点击</li></ul></li><li><p>取消/关闭时，前置界面状态不变更</p></li><li><p>确定时：继续下一个流程</p></li></ul><h3 id="操作弹窗" tabindex="-1">操作弹窗 <a class="header-anchor" href="#操作弹窗" aria-label="Permalink to &quot;操作弹窗&quot;">​</a></h3><h4 id="打开时" tabindex="-1">打开时 <a class="header-anchor" href="#打开时" aria-label="Permalink to &quot;打开时&quot;">​</a></h4><ul><li>按钮表现： <ul><li>确认按钮：置灰禁用</li><li>取消按钮：白色</li><li>关闭按钮：可点击</li></ul></li></ul><h4 id="保存时" tabindex="-1">保存时 <a class="header-anchor" href="#保存时" aria-label="Permalink to &quot;保存时&quot;">​</a></h4><ul><li>按钮表现： <ul><li>确认按钮： <ul><li>任务耗时： <ul><li>文案：保存中...</li><li>图标：loading</li><li>样式：置灰禁用</li></ul></li><li>任务不耗时： <ul><li>主题色</li></ul></li></ul></li><li>取消按钮：置灰禁用</li><li>关闭按钮：不可点击</li></ul></li></ul><h4 id="保存结束" tabindex="-1">保存结束 <a class="header-anchor" href="#保存结束" aria-label="Permalink to &quot;保存结束&quot;">​</a></h4><ul><li>关闭弹窗</li><li>信息回显： <ul><li>当修改产品、订单等列表时，若弹窗修改的内容包含列表字段，则需要回填修改内容。</li></ul></li></ul><h4 id="点击关闭-取消时" tabindex="-1">点击关闭/取消时 <a class="header-anchor" href="#点击关闭-取消时" aria-label="Permalink to &quot;点击关闭/取消时&quot;">​</a></h4><ul><li>按钮表现： <ul><li>确认按钮：主题色</li><li>取消按钮： <ul><li>样式：白色</li><li>点击：调用【修改确认弹窗】，沿用其规范</li></ul></li><li>关闭按钮： <ul><li>样式：可点击</li><li>点击：调用【修改确认弹窗】，沿用其规范</li></ul></li></ul></li><li>信息回显 <ul><li>当修改弹窗内容修改操作，可以直接生效而不需要点击保存按钮时，对应信息需要回填到前一个界面。</li></ul></li></ul><h2 id="数值类" tabindex="-1">数值类 <a class="header-anchor" href="#数值类" aria-label="Permalink to &quot;数值类&quot;">​</a></h2><p>对于销量，库存这类整数型数据： 加减：只能整数，最小值1，调整单位1 乘除：允许小数，最小值1，调整单位0.01</p><p>对于商城价，市场价这类允许小数类型的数据 加减：允许小数，最小值0.01，调整单位0.01 乘除：允许小数，最小值1，调整单位0.01</p><h2 id="信息展示类" tabindex="-1">信息展示类 <a class="header-anchor" href="#信息展示类" aria-label="Permalink to &quot;信息展示类&quot;">​</a></h2><h3 id="时间" tabindex="-1">时间 <a class="header-anchor" href="#时间" aria-label="Permalink to &quot;时间&quot;">​</a></h3><p>默认<code>YYYY-MM-DD hh:mm:ss</code>的格式展示，即2024-08-15 19:00:00的方式</p><h3 id="价格" tabindex="-1">价格 <a class="header-anchor" href="#价格" aria-label="Permalink to &quot;价格&quot;">​</a></h3><p>默认带货币符号，且保留2位小数，超过2位则四舍五入，例如：<code>$12.33</code></p><h3 id="数值" tabindex="-1">数值 <a class="header-anchor" href="#数值" aria-label="Permalink to &quot;数值&quot;">​</a></h3><ul><li>简化形式: <ul><li>10</li><li>100</li><li>1k: 1000</li><li>2M: 200W</li></ul></li><li>普通形式：默认保留2位小数，且抹零处理，例如：<code>11111.22</code></li></ul><h3 id="大小" tabindex="-1">大小 <a class="header-anchor" href="#大小" aria-label="Permalink to &quot;大小&quot;">​</a></h3><p>一般用于文件大小展示，如果文本，常见于如下：</p><ul><li>0.5kb</li><li>500kb</li><li>5.33MB</li><li>5.34GB</li><li>55.22TB</li></ul><h2 id="列表类" tabindex="-1">列表类 <a class="header-anchor" href="#列表类" aria-label="Permalink to &quot;列表类&quot;">​</a></h2><h3 id="状态" tabindex="-1">状态 <a class="header-anchor" href="#状态" aria-label="Permalink to &quot;状态&quot;">​</a></h3><ul><li>展示态：初始加载的状态</li><li>搜索态：通过搜索进行展示的状态</li></ul><h3 id="交互规范" tabindex="-1">交互规范 <a class="header-anchor" href="#交互规范" aria-label="Permalink to &quot;交互规范&quot;">​</a></h3><table tabindex="0"><thead><tr><th>状态</th><th>展示</th><th>搜索</th></tr></thead><tbody><tr><td>初始化</td><td>拉取初始数据</td><td>拉取搜索后的数据</td></tr><tr><td>新增</td><td>新增结束后，保持当前状态，重新拉取搜索的数据</td><td>新增结束后，保持当前状态，重新拉取搜索的数据</td></tr><tr><td>修改</td><td>修改后，同新增逻辑一致</td><td>同左</td></tr><tr><td>删除</td><td>删除后，同新增逻辑一致</td><td>同左</td></tr></tbody></table><h3 id="属性顺序" tabindex="-1">属性顺序 <a class="header-anchor" href="#属性顺序" aria-label="Permalink to &quot;属性顺序&quot;">​</a></h3><p>默认按照定义的某个维度进行排序，常见的指标有单不限于：</p><table tabindex="0"><thead><tr><th>类型</th><th>排序逻辑</th></tr></thead><tbody><tr><td>数值</td><td>根据实际场景选择asc还是desc，默认为asc，例如从上到下为1，2，3...之类的</td></tr><tr><td>时间</td><td>默认是最新在最前面，推荐按时间维度做排序</td></tr><tr><td>文本名称</td><td>中文名称拼音排名的性能不好，默认按照ASCII即可</td></tr></tbody></table><h3 id="选中时的交互" tabindex="-1">选中时的交互 <a class="header-anchor" href="#选中时的交互" aria-label="Permalink to &quot;选中时的交互&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作</th><th>是否保持选中状态</th><th>理由</th></tr></thead><tbody><tr><td>排序</td><td>取消</td><td>排序后，原先选中的项可能分散在不同的位置。不利于理解</td></tr><tr><td>切换视图类型</td><td>保持</td><td>因为此时列表项内容不变，只是展示形式变，比如从列表变成表格</td></tr><tr><td>搜索</td><td>输入框获取焦点时，保持。回车进行搜索后，取消选中</td><td>搜索结果集不确定会展示之前勾选过的选项</td></tr></tbody></table><h2 id="文件管理类" tabindex="-1">文件管理类 <a class="header-anchor" href="#文件管理类" aria-label="Permalink to &quot;文件管理类&quot;">​</a></h2><h3 id="实体" tabindex="-1">实体 <a class="header-anchor" href="#实体" aria-label="Permalink to &quot;实体&quot;">​</a></h3><ul><li>文件：普通文件</li><li>目录：包含目录和文件的目录</li></ul><h3 id="交互规范-1" tabindex="-1">交互规范 <a class="header-anchor" href="#交互规范-1" aria-label="Permalink to &quot;交互规范&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>目录</th><th>文件</th></tr></thead><tbody><tr><td>展示</td><td>当前目录展示目录和文件两种示例，子目录在前，子文件在后</td><td>文件预览图，文件名称，文件后缀</td></tr><tr><td>删除</td><td>删除后，连同其下的子目录和文件都删除</td><td>单纯删除文件即可</td></tr><tr><td>回收站</td><td>默认保留7-30天的删除记录</td><td>同左</td></tr><tr><td>修改名称</td><td>修改后静默同步数据，再更新界面名称</td><td>同左</td></tr><tr><td>移动</td><td>修改后静默同步数据，再更新界面。</td><td>同左</td></tr></tbody></table><h3 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段</th><th>目录</th><th>文件</th></tr></thead><tbody><tr><td>名称</td><td>按照ascii</td><td>同左</td></tr><tr><td>大小</td><td>默认最大</td><td>按照数值顺序</td></tr><tr><td>时间</td><td>默认最新最前面</td><td>同左</td></tr><tr><td>类型</td><td>都是目录类型，按照其他维度排序</td><td>按照类型名称的ASCII</td></tr></tbody></table><h2 id="分页类" tabindex="-1">分页类 <a class="header-anchor" href="#分页类" aria-label="Permalink to &quot;分页类&quot;">​</a></h2><p>分页应当包含如下信息：</p><table tabindex="0"><thead><tr><th>name</th><th>desc</th><th>404的场景</th></tr></thead><tbody><tr><td>页码</td><td>从1开始</td><td>1</td></tr><tr><td>页数</td><td>从1开始</td><td>1</td></tr><tr><td>一页的尺寸</td><td>默认25</td><td>同左</td></tr><tr><td>本页数量</td><td>从0开始，&lt;=一页的尺寸</td><td>0</td></tr><tr><td>共多少项</td><td>从0开始</td><td>0</td></tr><tr><td>对于404的另一种处理：隐藏掉分页</td><td></td><td></td></tr></tbody></table><h1 id="_1、场景" tabindex="-1">1、场景 <a class="header-anchor" href="#_1、场景" aria-label="Permalink to &quot;1、场景&quot;">​</a></h1><h2 id="_1-新增" tabindex="-1">（1）  新增 <a class="header-anchor" href="#_1-新增" aria-label="Permalink to &quot;（1）  新增&quot;">​</a></h2><p>管理后台新增采用【弹窗】形式</p><p>● 提交时需对必填字段进行【空值】（空格）判断</p><p>● 提交时需对主要字段进行【重复值】判断，如：会员手机号码、产品名称</p><p>● 新增内容提交失败后，须【保留用户修改的内容】，以便再次修改提交</p><p>● 新增内容提交成功返回到主页面时，主页面需【刷新】</p><p>● 遵循表单规范（即第5点）</p><h2 id="_2-修改" tabindex="-1">（2）修改 <a class="header-anchor" href="#_2-修改" aria-label="Permalink to &quot;（2）修改&quot;">​</a></h2><p>● 修改完成后须【回到原记录所在位置】，且刷新显示修改后的值</p><p>● 修改内容提交失败后，须【保留用户修改的内容】，以便再次修改提交</p><p>● 在查询条件下修改后返回，如【不满足查询条件则不显示】</p><p>● 需对主标识字段进行【重复值】、【空值】（空格）判断</p><p>● 遵循表单规范（即第5点）</p><h2 id="_3-删除" tabindex="-1">（3）删除 <a class="header-anchor" href="#_3-删除" aria-label="Permalink to &quot;（3）删除&quot;">​</a></h2><p>当删除一条或多条记录，要求：</p><p>● 必须有【确认删除】的提示信息</p><p>● 删除成功后刷新，【不显示删除的记录】</p><p>● 删除成功后，返回【原记录所在页面】，如果原记录所在页不存在时，则返回【上一页】</p><p>● 当被删除的记录与其他记录存在关联时，请示需求界面给予【不允许删除】、跟【关联提示】等信息，如以下存在有关联的删除：</p><p>i. 会员等级：关联有会员、关联用户权限，不允许删除</p><p>ii. 预约记录：未开单的预约支付订单，不允许删除</p><p>iii.订单记录：未收款、未发货、已发货的订单，不允许删除</p><p>iv.会员标签：关联用户权限，不允许删除</p><h2 id="_4-查询" tabindex="-1">（4）查询 <a class="header-anchor" href="#_4-查询" aria-label="Permalink to &quot;（4）查询&quot;">​</a></h2><p>当按照条件查询时，要求：</p><p>● 每次查询后【保留当前查询条件】</p><p>● 通过查询条件筛选出的结果，通过结果进入到详情页，再返回时【需保留筛选条件以及筛选结果】，返回至前一结果页</p><p>● 当未查询到任何记录时，需给予未查找到相关记录的提示信息</p><p>● 除了PM明确要求不需要外，列表都需提供【模糊查询】及【组合查询】功能</p><p>● 注意：目前会员端查询已接入中台，之后会员端新加查询功能也需【接入中台查询组件】</p><h2 id="_5-表单" tabindex="-1">（5）表单 <a class="header-anchor" href="#_5-表单" aria-label="Permalink to &quot;（5）表单&quot;">​</a></h2><p>● 及时提示：需对文本输入框字段格式、长度、必填等进行校验，给予【及时提示】</p><p>（ PM无明确要求，则不做自动纠正）</p><p>i. 必填字段：输入框不能为空提示，如“产品名称不能为空”</p><p>选择器/单选/多选不能为空提示，如“请选择员工职务”</p><p>ii. 字符长度：超出长度范围提示，如“产品名称最多可输入30个字”</p><p>iii. 数值范围：超出数值范围提示，如“库存不能小于0”或“库存不能大于9999999”</p><p>iv. 特定格式：特定格式（手机号、身份证等）校验，如“请输入正确的手机号码”</p><p>● 提交后提示：需对主标识字段、下拉框/上传字段必填等进行校验，给予【提交后提示】</p><p>i. 重复值：唯一性校验提示，如“产品名称已存在”</p><p>ii. 必填字段：图片、视频上传不能为空提示，如“请上传视频”</p><p>● 长表单页，提交校验表单后，需要【定位到出错的表单项】</p><h2 id="_6-跳转" tabindex="-1">（6）跳转 <a class="header-anchor" href="#_6-跳转" aria-label="Permalink to &quot;（6）跳转&quot;">​</a></h2><p>用于规范页面链接是采用新窗口打开还是本窗口打开。</p><p>● 本窗口打开：查询结果、上下翻页、内容保存、详情页面等操作在本窗口打开</p><p>● 新窗口打开： 开单页、操作引导跳转，需中断当前操作时的跳转项在新窗口打开</p><h2 id="_7-图片上传" tabindex="-1">（7）图片上传 <a class="header-anchor" href="#_7-图片上传" aria-label="Permalink to &quot;（7）图片上传&quot;">​</a></h2><p>● 图片上传限制：需限制可上传张数、图片格式jpg/bmp/png/gif，图片大小统一不超过10M</p><p>（注意：jpeg格式也要支持上传，gif为新增支持格式）</p><p>● 图片支持上传多张时，上传图片需支持单次可【多选图片进行上传】（PC和小程序同理）</p><p>● 图片上传后缩略图【等比例显示】，支持【预览】图片</p><p>● 商品类图片上传（如服务、产品、积分商品）为非必填，不填时可显示替代图片【LOGO图】，当未上传LOGO图时，显示【默认替代图】。优惠券积分商品除外，优惠券积分商品未上传时显示默认替代图</p><h2 id="_8-视频上传" tabindex="-1">（8）视频上传 <a class="header-anchor" href="#_8-视频上传" aria-label="Permalink to &quot;（8）视频上传&quot;">​</a></h2><p>● 视频上传限制：需限制上传数量、视频格式mp4，视频大小不超过300M</p><p>● 视频上传后支持【预览】视频</p><h2 id="_9-列表排序" tabindex="-1">（9）列表排序 <a class="header-anchor" href="#_9-列表排序" aria-label="Permalink to &quot;（9）列表排序&quot;">​</a></h2><p>后台列表的排序多数按照某个时间的顺序或者倒序进行排列；当然也不排除需要有其他排序条件，例如有特殊说明的数据需要置顶等</p><p>● 新增产品/服务/卡项/活动等，默认排序是按【创建时间由近到远】的顺序进行排列</p><p>● 订单/预约记录/退款记录等，默认排序按记录【生成时间由近到远】进行排列</p><h2 id="_10-导出" tabindex="-1">（10）导出 <a class="header-anchor" href="#_10-导出" aria-label="Permalink to &quot;（10）导出&quot;">​</a></h2><p>导出按钮位置统一放在列表右上角</p><p>● 导出字段，视具体需求要求而定</p><p>注意：列表字段受高级配置影响时，当字段隐藏，导出时也需去除字段</p><p>如预约记录中“服务场地”，在服务场地关闭时，列表显示和导出同步隐藏字段</p><p>● 未筛选时默认【导出全部】，筛选后导出为【筛选内容】</p><h2 id="_11-上下架" tabindex="-1">（11）上下架 <a class="header-anchor" href="#_11-上下架" aria-label="Permalink to &quot;（11）上下架&quot;">​</a></h2><p>● 服务/商品/卡项等支持上下架的数据</p><p>在新增时可以选择【保存】或【保存并上架】，修改时只保留【保存】 ● 未上架时【上架】按钮放在第一位置；上架后【下架】按钮放至更多，hover时颜色为红色</p><h2 id="_12-选择数据" tabindex="-1">（12）选择数据 <a class="header-anchor" href="#_12-选择数据" aria-label="Permalink to &quot;（12）选择数据&quot;">​</a></h2><p>● 下拉框选择数据：获取数据需支持【滚动加载】</p><p>● 列表选择数据</p><p>i. 【分页】形式展示 （PM有明确要求时除外）</p><p>ii. 不可选数据需【置灰】处理，hover提示不可选理由</p><p>iii.选择数据为多选时，需支持【跨页勾选】</p><h2 id="_13-批量操作" tabindex="-1">（13）批量操作 <a class="header-anchor" href="#_13-批量操作" aria-label="Permalink to &quot;（13）批量操作&quot;">​</a></h2><p>● 主列表的批量操作在勾选【复选框】或【批量操作】按钮时唤醒底部操作栏</p><p>● 复选框数据选择需支持【跨页勾选】，全选时可选择【全选全部】或【全选当页】</p><p>● 底部批量操作按钮需选中数据可操作时，对应按钮才显示为可用状态，操作后【只对满足操作条件的数据生效】</p><p>（PM有明确要求时除外）</p><h2 id="_14-装修-穿梭框" tabindex="-1">（14）装修-穿梭框 <a class="header-anchor" href="#_14-装修-穿梭框" aria-label="Permalink to &quot;（14）装修-穿梭框&quot;">​</a></h2><p>● 未达数量限制时，新增后数据保留为【已选数据】（即右侧）</p><p>● 达限制数量时，新增后保存提示内增加说明，且新添加数据保留到【可选数据第一条】（即左侧）</p><h2 id="_15-小程序版本兼容" tabindex="-1">（15）小程序版本兼容 <a class="header-anchor" href="#_15-小程序版本兼容" aria-label="Permalink to &quot;（15）小程序版本兼容&quot;">​</a></h2><p>新功能需发布新版本才可使用时，需做兼容处理；兼容方式分为两种，【限制功能启用】和【增加引导提示，但不限制功能启用】</p><p>● 对不涉及太多试用流程的功能，采用【限制功能启用】方式兼容，如“服务规格”</p><p>● 对高价值及会影响试用体验的功能，采用【增加引导提示，但不限制功能启用】方式兼容，如“扫码点餐”</p><h2 id="_16-直分销" tabindex="-1">（16）直分销 <a class="header-anchor" href="#_16-直分销" aria-label="Permalink to &quot;（16）直分销&quot;">​</a></h2><p>● 分销链接：注意【分销教程链接等转换】</p><p>获取oem链接接口：OemPortalWebApp.getOemViewUrl(xxxx)</p><p>代理商客户-未接域名：<a href="https://adm.webportal.top/sys/view.jsp?id=" target="_blank" rel="noreferrer">https://adm.webportal.top/sys/view.jsp?id=</a></p><p>代理商客户-已接域名：<a href="https://~/sys/view.jsp?id=" target="_blank" rel="noreferrer">https://~/sys/view.jsp?id=</a></p><p>● 分销逻辑：没有勾选账户服务时，不能出现【升级】按钮</p><h1 id="_2-文本格式" tabindex="-1">2. 文本格式 <a class="header-anchor" href="#_2-文本格式" aria-label="Permalink to &quot;2. 文本格式&quot;">​</a></h1><p>用于规范整个产品中所有不同层级不同功能的页面应该使用的标题和文字格式</p><p>● 标题名称/关键文字：超出显示范围时采用省略号显示，hover需可查看全称</p><p>● 手机号码：统一为手机号标准格式138 0000 0000，如图所示</p><p>● 日期格式：统一为2020-01-01 18:00</p><p>● 金钱格式：PC端统一为￥0.00；会员端统一为￥0，去小数点后末尾的0</p><h1 id="_3-输入限制" tabindex="-1">3. 输入限制 <a class="header-anchor" href="#_3-输入限制" aria-label="Permalink to &quot;3. 输入限制&quot;">​</a></h1><h2 id="_1-数值输入限制" tabindex="-1">（1）数值输入限制 <a class="header-anchor" href="#_1-数值输入限制" aria-label="Permalink to &quot;（1）数值输入限制&quot;">​</a></h2><p>● 金额类数字输入（如服务价格、推广员余额奖励）范围为【0.01~9999999.99】</p><p>会员端充值除外，按档位储值规则和会员端小程序充值金额限制范围为【0.01~5000】</p><p>● 数值类（如积分获取比例、虚拟成团数）数字输入范围为【1~99999】</p><h2 id="_2-文本输入限制" tabindex="-1">（2）文本输入限制 <a class="header-anchor" href="#_2-文本输入限制" aria-label="Permalink to &quot;（2）文本输入限制&quot;">​</a></h2><p>文本输入限制交互统一规范：超出字数范围可继续输入，同时出相应提示。</p><p>除PM要求，遵循以下限制规则：</p><p>● 富文本输入限制20000字</p><p>● 多行文本输入（除PM要求）限制120字</p><p>● 单行文本</p><p>i. 产品/服务/卡项等商品名称输入限制30字</p><p>ii. 进店有礼、拼团等活动名称输入限制20字</p><p>iii. 表单项单行文本输入限制10字</p><h1 id="_4-交互组件" tabindex="-1">4. 交互组件 <a class="header-anchor" href="#_4-交互组件" aria-label="Permalink to &quot;4. 交互组件&quot;">​</a></h1><h2 id="_1-提示组件类" tabindex="-1">（1）提示组件类 <a class="header-anchor" href="#_1-提示组件类" aria-label="Permalink to &quot;（1）提示组件类&quot;">​</a></h2><p>● hover提示：pc 可点击，hover有反馈的鼠标要变成手</p><p>● Tooltip文字提示：用于简短的文字提示</p><p>● Popover气泡卡片：用于较复杂或重要的进一步描述和操作</p><h2 id="_2-表单组件类" tabindex="-1">（2）表单组件类 <a class="header-anchor" href="#_2-表单组件类" aria-label="Permalink to &quot;（2）表单组件类&quot;">​</a></h2><p>● 输入框：统一加上字数限制的显示；超过字数可继续输入，但输入框需有超过字数的提示</p><p>● 输入框自动去掉前后空格</p><p>● 只能填整数的输入框键盘不允许输入小数点，像库存、预约人数这种输入框</p><h2 id="_3-弹窗" tabindex="-1">（3）弹窗 <a class="header-anchor" href="#_3-弹窗" aria-label="Permalink to &quot;（3）弹窗&quot;">​</a></h2><p>● 弹窗类型目前分为：①操作类的弹窗 ② 查看类的弹窗</p><p>● 弹窗遮罩：</p><p>① 操作类的弹窗遮罩：点击黑色遮罩不可关闭</p><p>② 查看类的弹窗遮罩：点击黑色遮罩可关闭</p><p>③ 其他遮罩：如 新手指引，示需求而定</p>',181),r=[d];function h(o,p,n,u,s,b){return t(),e("div",{"data-pagefind-body":!0},r)}const _=a(i,[["render",h]]);export{q as __pageData,_ as default};