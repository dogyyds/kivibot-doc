<div align="center">
  <a href="https://github.com/KiviBotLab/KiviBot" target="_blank">
    <img width="160" src="/public/kivibot-logo.png" alt="logo">
  </a>
  <h1 id="kivibot"><a href="https://github.com/KiviBotLab/KiviBot" target="_blank">Awesome KiviBot Doc</a></h1>
  
[![downloads](https://img.shields.io/npm/dm/kivibot?style=flat-square)](https://www.npmjs.com/package/kivibot@rc)
[![GitHub](https://img.shields.io/github/license/dogyyds/kivibot-doc?style=flat-square)](https://github.com/dogyyds/kivibot-doc/blob/main/LICENSE)

</div>

# 介绍

`KiviBot` 是使用 [TypeScript](https://www.typescriptlang.org/) 语言编写的**轻量**、**优雅**、**跨平台**、**开发者友好**的 QQ 机器人框架。

这是 KiviBot QQ 机器人框架的文档网站，使用 Next.js 和 Nextra 构建。

求 Star⭐️，求 Fork🍴，求 PR🎉，求 Issue🚀

## 快速访问

[前往文档](https://kivi.dogxi.me)

## 交流与支持

- [参与讨论](https://qm.qq.com/cgi-bin/qm/qr?k=fteC6GcYQzcT1nnaBYDVbRWCIUkpIQrk)
- [支持项目](https://kivi.dogxi.me/docs/coffe)

[中文](#中文) | [English](#english)

## 中文

### 🎯 项目介绍

这是一个 KiviBot QQ 机器人框架的文档网站，使用 Next.js 和 Nextra 构建。KiviBot 是一款轻量级、高性能、跨平台的 QQ 机器人框架。

### 📁 项目结构

```
.
├── app/                   # Next.js 应用程序目录
│   ├── [[...mdxPath]]/    # 动态路由处理 MDX 文件
│   ├── icon.png           # 网站图标
│   └── layout.tsx         # 主布局组件
├── components/            # React 组件
│   ├── features.tsx       # 特性展示组件
│   ├── icons.tsx          # 图标组件
│   └── ScrollToTop.tsx    # 返回顶部组件
├── content/               # 文档内容(MDX)
│   ├── _meta.js           # 内容元数据配置
│   └── ...                # 其他内容文件
├── public/                # 静态资源
├── style/                 # 样式文件
├── next.config.ts         # Next.js 配置
└── package.json           # 项目依赖
```

### 🚀 安装与运行

#### ⚡ 前置条件

- **Node.js** 18 或更高版本
- **pnpm** (推荐) 或 npm

#### 📦 安装依赖

```bash
pnpm install
```

#### 🛠️ 本地开发

```bash
pnpm dev
```

开发服务器将在 [http://localhost:3000](http://localhost:3000) 启动。

#### 🏗️ 构建与部署

```bash
# 构建生产版本
pnpm build

# 启动生产服务
pnpm start
```

### 📝 文档编写指南

文档使用 **MDX** 格式编写，支持 Markdown 和 React 组件混合使用。

> [!TIP]
> MDX 让我们能够在 Markdown 文档中使用 React 组件，为文档增加更多交互性和可视化元素！

#### ✨ 添加新文档页面

1. 在 `content/docs` 目录下创建新的 `.mdx` 文件
2. 添加必要的前置元数据
3. 更新对应的 `_meta.js` 文件
4. 编写内容，保持与现有文档风格一致

### 🌟 如何参与贡献

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的改动 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

### 🤝 联系我们

- 👯‍♀️ **交流群**：[812789605](https://qm.qq.com/cgi-bin/qm/qr?k=fteC6GcYQzcT1nnaBYDVbRWCIUkpIQrk)
- 💬 **寻求帮助**：联系 [Dogxi](https://dogxi.me)

---

## English

### 🎯 Project Introduction

This is the documentation website for KiviBot QQ Bot Framework, built with Next.js and Nextra. KiviBot is a lightweight, high-performance, cross-platform QQ bot framework.

> A truly ideal bot should be powerful enough, unobtrusive, and ready to help efficiently when you need it. —— Viki

### 📁 Project Structure

```
.
├── app/                   # Next.js application directory
│   ├── [[...mdxPath]]/    # Dynamic routing for MDX files
│   ├── icon.png           # Website icon
│   └── layout.tsx         # Main layout component
├── components/            # React components
│   ├── features.tsx       # Features display component
│   ├── icons.tsx          # Icons component
│   └── ScrollToTop.tsx    # Scroll to top component
├── content/               # Documentation content (MDX)
│   ├── _meta.js           # Content metadata configuration
│   └── ...                # Other content files
├── public/                # Static assets
├── style/                 # Stylesheets
├── next.config.ts         # Next.js configuration
└── package.json           # Project dependencies
```

### 🚀 Installation & Running

#### ⚡ Prerequisites

- **Node.js** 18 or higher
- **pnpm** (recommended) or npm

#### 📦 Install Dependencies

```bash
pnpm install
```

#### 🛠️ Local Development

```bash
pnpm dev
```

Development server will start at [http://localhost:3000](http://localhost:3000).

#### 🏗️ Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### 📝 Documentation Guide

Documents are written in **MDX** format, supporting both Markdown and React components.

> [!TIP]
> MDX allows us to use React components within Markdown documents, adding more interactivity and visual elements to the documentation!

#### ✨ Adding New Pages

1. Create new `.mdx` files in the `content/docs` directory
2. Add necessary metadata
3. Update the corresponding `_meta.js` file
4. Write content, keeping consistent with existing documentation style

### 🌟 How to Contribute

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

### 🤝 Contact Us

- 👯‍♀️ **QQ Group**: [812789605](https://qm.qq.com/cgi-bin/qm/qr?k=fteC6GcYQzcT1nnaBYDVbRWCIUkpIQrk)
- 💬 **Get Help**: Contact [Dogxi](https://dogxi.me)
