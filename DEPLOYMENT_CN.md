# 国内部署说明文档

本项目已完成国内环境适配，移除了所有依赖国外CDN的资源，可以部署到阿里云等国内云服务器。

## 已完成的适配工作

### 1. Tailwind CSS 本地化
- ✅ 移除了 `cdn.tailwindcss.com` CDN依赖
- ✅ 安装 Tailwind CSS 为本地依赖
- ✅ 配置 PostCSS 和 Tailwind 构建流程
- ✅ 创建了 `tailwind.config.js` 配置文件

### 2. 字体本地化
- ✅ 移除了 Google Fonts CDN 依赖
- ✅ 配置本地字体文件（`/fonts/` 目录）
- ✅ 需要下载的字体文件：
  - Material Symbols Outlined
  - Space Grotesk (300-700)
  - Noto Sans SC (300-900)

### 3. 图片资源本地化
- ✅ 移除了所有 Google 图片链接
- ✅ 所有图片路径已改为本地路径：`/images/*.jpg`
- ✅ 需要下载的图片文件（详见 `public/images/IMAGE_MAPPING.md`）

### 4. React 依赖本地化
- ✅ 移除了 `esm.sh` CDN 依赖
- ✅ 使用 npm 本地安装的 React 依赖
- ✅ 移除了 `index.html` 中的 importmap

## 部署步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 下载资源文件

#### 方式一：手动下载
请根据 `public/images/IMAGE_MAPPING.md` 中的映射表，手动下载所有图片到 `public/images/` 目录。

#### 方式二：使用下载脚本（需要能够访问 Google）
```bash
node scripts/download-assets.js
```

#### 字体文件
字体文件需要从以下渠道获取：
- **Noto Sans SC**: 可以从 [Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans+SC) 下载，或使用思源黑体替代
- **Space Grotesk**: 可以从 [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk) 下载
- **Material Symbols**: 可以从 [Google Material Symbols](https://fonts.google.com/icons) 下载

### 3. 开发环境运行

```bash
npm run dev
```

访问 http://localhost:3000

### 4. 生产构建

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 5. 部署到阿里云

#### 选项 A：使用 Nginx

1. 将 `dist/` 目录内容上传到服务器
2. 配置 Nginx：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### 选项 B：使用 Node.js 服务器

1. 安装 PM2：`npm install -g pm2`
2. 使用 `vite preview` 或配置 Express/Koa 服务器
3. 启动：`pm2 start server.js`

## 文件结构

```
.
├── public/
│   ├── images/          # 图片资源目录
│   │   └── IMAGE_MAPPING.md
│   └── fonts/           # 字体文件目录（需要手动添加）
├── pages/               # 页面组件
├── scripts/             # 工具脚本
├── index.html           # 入口 HTML（已移除 CDN）
├── index.tsx            # React 入口
├── App.tsx              # 主应用组件
├── tailwind.config.js   # Tailwind 配置
├── postcss.config.js    # PostCSS 配置
└── vite.config.ts       # Vite 配置
```

## 注意事项

1. **图片资源**：所有图片需要手动下载到 `public/images/` 目录
2. **字体文件**：字体文件需要下载到 `public/fonts/` 目录，或使用国内字体CDN替代
3. **构建优化**：生产构建时会自动优化和压缩资源
4. **路径配置**：所有静态资源路径都使用绝对路径（如 `/images/xxx.jpg`），确保部署后路径正确

## 字体替代方案

如果无法下载 Google Fonts，可以使用以下替代方案：

### Noto Sans SC → 思源黑体
- 可以使用阿里巴巴普惠体或思源黑体
- 下载地址：[思源黑体 GitHub](https://github.com/adobe-fonts/source-han-sans)

### Space Grotesk → 系统字体
- 可以回退到系统字体栈：`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Material Symbols → Iconify
- 可以使用 [Iconify](https://iconify.design/) 或 [Tabler Icons](https://tabler.io/icons) 替代

## 技术支持

如有问题，请检查：
1. 所有资源文件是否已正确下载
2. 文件路径是否正确
3. 服务器配置是否正确支持 SPA 路由
