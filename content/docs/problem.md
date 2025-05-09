---
title: 🤕 常见问题
---

## 🤕 常见问题

**账号及登录问题**请下滑 🪿

- [🤕 常见问题](#-常见问题)
- [❓ 如何获取滑块验证码的 ticket](#-如何获取滑块验证码的-ticket)
- [账号问题](#账号问题)
  - [提示登录频繁](#提示登录频繁)
  - [提示 QQ 版本过低](#提示-qq-版本过低)
  - [提示网络异常](#提示网络异常)
  - [服务器繁忙](#服务器繁忙)
  - [群消息发送失败](#群消息发送失败)
  - [上网环境异常](#上网环境异常)
  - [提示密码已泄露](#提示密码已泄露)

> 若仍无法解决，可以[礼貌 Q 群询问](https://qm.qq.com/cgi-bin/qm/qr?k=fteC6GcYQzcT1nnaBYDVbRWCIUkpIQrk&jump_from=webapi&authKey=GlN8HuZgPU0ze6EMYWk/8ZS5OGKtKZKxWzZjrj/NWMWEXHXVGpDrxJsmZ/feQcwp)

## ❓ 如何获取滑块验证码的 ticket

在陌生设备登录时，可能会出现滑动验证码，同一设备只需通过一次，当收到滑动验证提示后，请按以下流程操作：

1️⃣ 使用浏览器访问给出的链接，并打开浏览器的开发者工具（按 F12），切换到 `Network`（网络）选项卡。

![取ticket1](/ticket1.png)

2️⃣ 滑动后会发一个请求，从响应中取出 ticket

![取ticket2](/ticket2.png)

`ticket` 输入错误会报环境异常，重复上述过程即可

## 账号问题

### 提示登录频繁

- 等待一段时间再尝试登录
- 换号登录

### 提示 QQ 版本过低

- 尝试更换签名地址（kivi.config.toml 中）
- 可网络搜索"Qsign"，找到可用的签名地址

### 提示网络异常

- 尝试切换同一网络（可使用代理）
- 尝试本地运行后，复制文件到服务器
- 尝试在 服务器 安装 官版 QQ/Tim 进行登录，再运行 KiviBot

### 服务器繁忙

Server is busy

- 尝试更改网络 DNS
- 尝试更换 api
- 119.29.29.29 / 114.114.114.114

### 群消息发送失败

- 账号被风控，需本地登录 QQ，手动在群内发送信息，解除限制。

### 上网环境异常

- 尝试切换同一网络(可使用代理)
- 尝试在 服务器 安装 官版 QQ/Tim 进行登录(可以挂几天)，再运行 KiviBot

### 提示密码已泄露

- 异地登录的原因，请打开设备锁，或修改密码
