
## PC端  
  
### 解析  
  
- 前后端分离：v-html  
- 非前后端分离:  
   - $dom.html(richText)  
   - dom.innserHTML = richText  
  
### 编辑  
统一使用UEditor，具体用法详见下方文档  
  
  
### 文件上传  
  
#### outerFunction  
  
UE文档少了对文件上传的说明，这里补充下outerFunction可以传递的参数说明  
  
| name                  | desc                      | example                                                                     |  
|-----------------------|---------------------------|-----------------------------------------------------------------------------|  
| pasteImgUploadRequest | 粘贴图片上传回调，你可以在这里写业务的文件上传逻辑 | pasteImgUploadRequest = async (file, success = noop, error = noop) : void 0 |  
| uploadImgRequest      | 点击按钮上传图片，你可以在这里写业务的文件上传逻辑 | uploadImgRequest : (files, success=noop, error=noop) : function             |  
  

## 移动端  
  
  
小程序富文本有展示和编辑的需求，可以参考下方
### 解析  
  
#### 组件  
  
| 名称   | rich-text                                                                                                       | mp-html                                                                                                         | wxParser                                                                                                        |     |
| ---- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --- |
| 描述   | uniapp官方的富文本标签                                                                                                  | 第三方封装的富文本标签                                                                                                     | 第三方封装的富文本标签                                                                                                     |     |

#### C端展示逻辑：  
- UE设置的图片有多种情况：  
   - 单独一行  
   - 多张图片并排  
   - 设置特定尺寸  
- C端表现：统一每张图片一行，且自动铺满，如图  
![[Pasted image 20240804184141.png]]
  
### 编辑  
  
| 名称                    | editor                                                                  | mp-html                                                                    |     |
| --------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- | --- |
| 描述                    | uniapp官方的富文本组件                                                          | 第三方的富文本组件                                                                  |     |
| 解析                    | 支持                                                                      | 支持                                                                         |     |
| 编辑                    | 支持                                                                      | 支持                                                                         |     |
| 业务使用                  | 推荐<br>                                                                  | -                                                                          |     |
| 使用案例                  | [官方案例](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor) | 自行查看文档                                                                     |     |
| 文档                    | [editor docs](https://en.uniapp.dcloud.io/component/editor.html#editor) | [mp-html docs](https://jin-yufeng.github.io/mp-html/#/overview/quickstart) |     |
| 工具栏UI自定义              | 支持                                                                      | 支持                                                                         |     |
| 点击获取光标，唤醒输入法弹窗        | 支持，只点击1次                                                                | 支持，但点击2次                                                                   |     |
| 插入相册里的图片或拍照点击调用插入图片接口 | 不支持：图片插入后键盘会消失，导致光标没了                                                   | 同左                                                                         |     |
| 视频                    | 不支持                                                                     | 支持                                                                         |     |
| 表格                    | 不支持                                                                     | 支持                                                                         |     |
| 音频                    | 不支持                                                                     | 支持                                                                         |     |
| 图片插入默认表现              | 不会100铺满，会自动贴左边：可以设置width，class等方式实现铺满                                   | 同左                                                                         |     |
| 文字输入                  | 支持                                                                      | 支持                                                                         |     |
| 图片排版居左中右              | 不支持                                                                     | 不支持                                                                        |     |
| 图片尺寸调整                | 支持，添加show-img, show-img-size这几个参数                                       | 支持                                                                         |     |

### 保存

主要是文本和图片，对于图片，文件流来自系统临时目录，保存时还需要实现一个文件上传流的逻辑，将tmp文件变成真实文件
