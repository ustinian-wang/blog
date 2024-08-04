# 小程序中转页方案

## 背景说明
在代开发的小程序，不同用户小程序有自己的历史版本，需求的迭代会导致页面路径发生变化。但之前实现的对外分享的卡片，海报等的历史路径还存在，需要对旧路径的访问保留兼容重定向说明，遗留一堆空壳页面。

## 历史方案 

外部访问时：
```shell
user1 -> oldPage1--|
user2 -> oldPage2-----newPage
user3 -> oldPage3--|    |
user4 -> newPage--------|
```

对外分享时：
```shell
newPage ---> userX
```

## 新方案

访问时：
```shell
user1 -> oldPage1--|
user2 -> oldPage2-----jump---->newPage
user3 -> oldPage3--|    |
user4 -> newPage--------|

```

对外分享时：
```shell
newPage ----> jump ---> userX
```

综上所述，我们对外分享，或者历史用户访问都是使用jump，不再指定具体也没

