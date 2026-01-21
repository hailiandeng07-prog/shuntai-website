# 舜泰汽车 - 具身智能物流专家

官方网站，展示具身智能物流机器人、智能叉车及全栈自研技术方案。

## 📋 项目说明

本项目已完成国内环境适配，所有依赖已本地化，可部署到阿里云等国内云服务器。

**已完成的适配工作：**
- ✅ 移除 Tailwind CSS CDN，使用本地构建
- ✅ 移除 Google Fonts CDN，配置本地字体
- ✅ 移除所有 Google 图片链接，使用本地图片路径
- ✅ 移除 esm.sh CDN，使用 npm 本地依赖

## 🚀 快速开始

### 本地开发

**环境要求：**
- Node.js 18+
- npm 或 yarn

**步骤：**

1. 安装依赖：
```bash
npm install
```

2. 下载资源文件（可选，如果已下载可跳过）：
   - 图片文件：根据 `public/images/IMAGE_MAPPING.md` 下载图片到 `public/images/` 目录
   - 字体文件：下载字体到 `public/fonts/` 目录（或使用国内字体CDN）

3. 启动开发服务器：
```bash
npm run dev
```

4. 访问 http://localhost:3000

### 生产构建

```bash
npm run build
```

构建产物在 `dist/` 目录，可直接部署到静态服务器。

## 📦 部署到阿里云

详细部署说明请参考 [DEPLOYMENT_CN.md](./DEPLOYMENT_CN.md)

### 快速部署步骤

1. **构建项目**
   ```bash
   npm run build
   ```

2. **上传文件**
   - 将 `dist/` 目录内容上传到服务器
   - 确保 `public/images/` 和 `public/fonts/` 中的资源文件已下载

3. **配置 Nginx**（推荐）
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

## 📁 项目结构

```
.
├── public/
│   ├── images/          # 图片资源（需要下载）
│   ├── fonts/           # 字体文件（需要下载）
│   └── ...
├── pages/               # 页面组件
├── scripts/             # 工具脚本
├── App.tsx              # 主应用组件
├── index.html           # HTML 入口
├── index.tsx            # React 入口
├── tailwind.config.js   # Tailwind 配置
└── vite.config.ts       # Vite 配置
```

## 📝 注意事项

1. **图片资源**：需要手动下载所有图片文件到 `public/images/` 目录
2. **字体文件**：需要下载字体文件到 `public/fonts/` 目录，或使用国内字体CDN替代
3. **路径配置**：所有资源使用绝对路径，确保部署后路径正确

## 🔗 相关文档

- [国内部署详细说明](./DEPLOYMENT_CN.md)
- [图片资源映射表](./public/images/IMAGE_MAPPING.md)

## 📄 License

© 2024 浙江舜泰汽车有限公司 版权所有
