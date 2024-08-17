#  技术实现模板

## 需求背景

- 需求描述
- 功能清单
- 可以重用的部分
## 方案说明

- 有流程的情况下：流程图，时序图
- 使用的组件
- 难点
- 风险
## 接口清单

- 数据交互都要发包，需要有一个excel描述接口规格

| name        | description | method | reqField | reqField type | reqField desc | resField        | resField type | resField desc |
| ----------- | ----------- | ------ | -------- | ------------- | ------------- | --------------- | ------------- | ------------- |
| getUserInfo | 获取用户信息      | get    | userId   | number        | 用户id          | userInfo.id     | number        | 用户id          |
|             |             |        | email    | string        | 用户邮箱          | userInfo.avator | string        | 用户头像          |

## 异常点监控

- 业务异常点：pm输出
- 代码异常点：dev输出

## 工时预估

- 这里以excel输出，
- 时间预估具体到h，
- 清单具体到字号大小的这类规格

| 信息1  | 信息2  | 信息3  | 耗时h |
| ---- | ---- | ---- | --- |
| 用户信息 | 用户名称 | 字体大小 | 0.5 |
|      |      | 字体颜色 | 0.5 |
|      | 用户头像 | 头像尺寸 | 0.5 |
|      |      | 头像路径 | 2   |

## 兼容

### 浏览器
### 数据过渡
### 终端版本

## 灰度逻辑

### 灰度开关
### 灰度表现
### 灰度梯度方案

## 性能

## 数据安全

### 输入
- xss
### 输出
- 客户敏感信息
	- 身份证
	- 手机
	- 邮箱
	- 地址
	- 密码
	- 证件照
- 第三方信息
	- 微信
	- 密钥
- 防刷信息
## 会议
