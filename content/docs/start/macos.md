---
title: Macos
---

## Macos

视频教程：[bilibili](https://www.bilibili.com/video/BV19xrkYnEEj/) 更推荐简洁的文档= =

下面演示为 Windows，Mac 步骤几乎一致，Mac 也可以使用 homebrew 安装 Nodejs。

### 1. 安装 Node.js

在 [Nodejs 官网](https://nodejs.org/zh-cn/download/)进行下载安装，版本请选择 18 以上版本，使用 LTS(长期稳定版本即可)。

下载完打开 `Nodejs` 安装包，无脑点击下一步直至安装完成。**默认情况下`Nodejs`会自动配置环境变量**

安装完成后，我们就可以创建 `空文件夹` 作为 存储 `框架目录` 的目录了。(后面可以给 `框架目录` 换位置= =)

同时通过地址栏快速打开`命令行`，**(<-Windows 支持 | Mac 请手动打开终端并用 `cd` 命令切换目录)**

<img src="/new-cmd.png" alt="image-20250225231847567"  />

接下来让我们分别输入 `node -v` 以及 `npm -v` 检测 `Nodejs` 是否安装成功：

<img src="/node-v.png" alt="image-20250225233241167"  />

如果正确显示了版本号，则说明 `Nodejs` 及附带的 `npm` 包管理工具安装成功，且环境变量自动配置好了。

接下来保留当前`命令行`窗口，让我们继续下一步。

### 2. 通过 npx 快速配置项目

> npx 是 `npm` 包管理工具的一个命令，可以自动安装 npm 包并执行某个命令。

复制下面 `命令` 到 `命令行`，并回车

接下来它会自动安装 `kivibot` 并执行 `初始化项目` 命令，根据引导创建项目

> [!Warning]
>
> 虽然框架登陆有`扫码登录` 选项，但新版本已经失效！
>
> **请改用 `密码登录` ！**框架将密码进行加密存储到 `kivi.config.toml` 中。

```shell
npx kivibot
```

![npx-kivibot](/npx-kivibot.png)

完成后它会提示你创建成功，根据下方引导启动 `KiviBot`：

> [!WARNING]
>
> **!!! 请注意不要按`命令行`中的引导操作。 直接看下面第三步**

```shell
cd C:\Users\Administrator\Desktop\MyBot\DogBot && npm i && npm start
```

> 虽然不对，但还是解释下：
>
> 这里的 `cd` 是 `切换目录` 命令，`&&` 指多个命令一起运行，`npm i` 指安装框架依赖(需要的 npm 包)，`npm start` 指启动框架。

### 3.更新版本并启动 Kivibot

请先使用 `cd` 命令切换到 `框架目录` ，

> 以 `#` 开头的内容为注释 非命令

```shell
cd C:\Users\Administrator\Desktop\MyBot\DogBot
# 绝对目录
cd DogBot
# 相对目录
```

> 为什么说不能直接按上面引导操作呢，因为默认 `npm i` 会安装 `kivibot 1.5.3`版本，而目前`1.5.3`版本已经不可用，需更换 `rc` 版本，就是额外再 `npm i` 后添加一步 `npm i kivibot@rc` 。

然后依次在 `命令行` 中输入下面 `命令` ：

```shell
npm i
# 安装所有配置模块(install)
npm i kivibot@rc
# 更新kivibot(目前需更新rc版本使用)
npm start
# 或者npm run start 这里会执行node app.js命令
```

也可以直接：

```typescript
npm i && npm i kivibot@rc && npm start
```

其中会要求 **抓取 ticket **请看: [❓ 如何获取滑块验证码的 ticket](/docs/problem)

如果显示密码错误，请从第二步重新开始配置。

如果为其他报错问题，可以看 [常见问题](/docs/problem)

### 4.启动成功

✅ 通过上面操作后，会提示“账号已成功上线”，**接下来**：

- **在 [🧩 插件文档](/docs/plugin) 查看如何启用插件**

### 后台部署(可选)

`pm2` 是一个用于后台运行的 `npm包` ，

这里加入 `-g` 用于 `全局安装` (global)，就是在所有地方都可以用 `pm2`

```shell
# 全局安装pm2
npm install pm2 -g
# 启动项目 请先确保能正确启动
pm2 start app.js
# 停止项目
pm2 stop app.js
```
