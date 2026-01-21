# GitHub 备份和云服务器部署指南

## 第一步：备份到 GitHub

### 1. 在 GitHub 上创建新仓库

1. 访问 https://github.com
2. 点击右上角的 "+" → "New repository"
3. 填写仓库信息：
   - Repository name: `shuntai-website` (或你喜欢的名称)
   - Description: `舜泰汽车官方网站 - 具身智能物流专家`
   - 选择 Public 或 Private
   - **不要**勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

### 2. 连接本地仓库到 GitHub

在项目目录执行以下命令（替换 `YOUR_USERNAME` 和 `YOUR_REPO_NAME`）：

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 或者使用 SSH（如果已配置 SSH key）
# git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送代码到 GitHub
git branch -M main
git push -u origin main
```

### 3. 后续更新

```bash
# 添加更改
git add .

# 提交更改
git commit -m "描述你的更改"

# 推送到 GitHub
git push
```

## 第二步：部署到云服务器

### 方式 A：使用 Vite 构建 + Nginx（推荐）

#### 1. 在本地构建项目

```bash
# 安装依赖（如果还没安装）
npm install

# 构建生产版本
npm run build
```

构建完成后，`dist/` 目录包含所有静态文件。

#### 2. 上传文件到服务器

**使用 SCP 命令：**

```bash
# 上传 dist 目录到服务器
scp -r dist/* root@your-server-ip:/var/www/html/

# 或者使用 SFTP 客户端（如 FileZilla, WinSCP）
```

**使用 rsync（更推荐）：**

```bash
rsync -avz --delete dist/ root@your-server-ip:/var/www/html/
```

#### 3. 配置 Nginx

在服务器上创建或编辑 Nginx 配置文件：

```bash
sudo nano /etc/nginx/sites-available/shuntai-website
```

配置文件内容：

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    root /var/www/html;
    index index.html;

    # 启用 gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # SPA 路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 图片资源
    location /images/ {
        expires 7d;
        add_header Cache-Control "public";
    }

    # 字体资源
    location /fonts/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

启用站点：

```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/shuntai-website /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

#### 4. 配置 HTTPS（可选但推荐）

使用 Let's Encrypt 免费 SSL 证书：

```bash
# 安装 Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

### 方式 B：使用 PM2 + Vite Preview（适合小型项目）

#### 1. 在服务器上安装 Node.js

```bash
# 使用 NodeSource 安装 Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### 2. 上传项目文件

```bash
# 使用 rsync 上传整个项目（排除 node_modules）
rsync -avz --exclude 'node_modules' --exclude 'dist' \
  . root@your-server-ip:/var/www/shuntai-website/
```

#### 3. 在服务器上安装依赖和构建

```bash
ssh root@your-server-ip
cd /var/www/shuntai-website
npm install
npm run build
```

#### 4. 使用 PM2 运行

```bash
# 安装 PM2
npm install -g pm2

# 启动预览服务器
pm2 serve dist/ 3000 --spa --name shuntai-website

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
```

#### 5. 配置 Nginx 反向代理

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 方式 C：使用 Docker（高级）

#### 1. 创建 Dockerfile

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### 2. 构建和运行

```bash
docker build -t shuntai-website .
docker run -d -p 80:80 --name shuntai shuntai-website
```

## 部署检查清单

- [ ] 已构建生产版本 (`npm run build`)
- [ ] 已上传 dist 目录到服务器
- [ ] 已配置 Nginx 服务器
- [ ] 已测试网站访问
- [ ] 已配置域名（如需要）
- [ ] 已配置 HTTPS（推荐）
- [ ] 已测试所有页面功能
- [ ] 已确认图片和字体资源正常加载

## 服务器环境要求

- **操作系统**: Ubuntu 20.04+ / CentOS 7+ / Debian 10+
- **Web服务器**: Nginx 1.18+ 或 Apache 2.4+
- **Node.js** (如使用方式B): 18.x 或更高
- **内存**: 至少 1GB
- **存储**: 至少 5GB（包含图片和字体资源）

## 常见问题

### 1. 404 错误（SPA路由问题）

确保 Nginx 配置中有：
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 2. 图片无法显示

检查：
- 图片文件是否已上传到 `/var/www/html/images/`
- 文件权限是否正确（`chmod 644`）
- Nginx 配置是否正确

### 3. 字体无法加载

检查：
- 字体文件是否已上传到 `/var/www/html/fonts/`
- CSS 中的字体路径是否正确

### 4. 静态资源加载慢

优化方案：
- 启用 Nginx gzip 压缩
- 配置静态资源缓存
- 使用 CDN（如阿里云 CDN）

## 后续更新流程

1. **本地开发** → 修改代码
2. **本地测试** → `npm run dev`
3. **构建生产版本** → `npm run build`
4. **提交到 Git** → `git add . && git commit -m "更新说明" && git push`
5. **上传到服务器** → `rsync -avz --delete dist/ user@server:/var/www/html/`
6. **验证** → 访问网站检查更新

## 自动化部署（可选）

可以设置 GitHub Actions 实现自动部署：

1. 创建 `.github/workflows/deploy.yml`
2. 配置 SSH 密钥到 GitHub Secrets
3. Push 代码时自动构建和部署

需要我帮你设置自动化部署吗？
