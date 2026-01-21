# 问题排查指南

## 当前发现的问题

### 1. ⚠️ 图片文件缺失

**问题：** `public/images/` 目录下没有图片文件，导致页面中所有图片无法显示。

**解决方案：**
根据 `public/images/IMAGE_MAPPING.md` 中的映射表，下载所有图片文件：
- hero-background.jpg
- smart-forklift.jpg
- logistics-solution.jpg
- chassis-platform.jpg
- petrochemical-case.jpg
- automotive-case.jpg
- cold-chain-case.jpg
- team-member.jpg

**快速测试：**
在浏览器开发者工具（F12）的 Console 标签中会看到 404 错误，提示找不到图片文件。

### 2. ⚠️ 字体文件缺失

**问题：** `public/fonts/` 目录为空，导致：
- Material Symbols 图标无法显示（显示为空白）
- 某些字体样式可能回退到系统字体

**解决方案A：下载字体文件**
1. Material Symbols: 从 [Google Material Symbols](https://fonts.google.com/icons) 下载
2. Space Grotesk: 从 [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk) 下载
3. Noto Sans SC: 从 [Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans+SC) 下载

**解决方案B：使用字体回退（已实现）**
已经配置了字体回退方案，如果没有字体文件，会自动使用系统字体，但图标可能无法正常显示。

### 3. ✅ 已修复的问题

- 添加了字体回退方案
- 添加了 `font-display: swap` 优化字体加载
- 增强了字体栈，包括中文字体回退

## 检查清单

### 浏览器开发者工具检查

1. **打开开发者工具（F12）**

2. **Console 标签**
   - 检查是否有 404 错误（图片、字体文件）
   - 检查是否有 JavaScript 错误

3. **Network 标签**
   - 刷新页面（Ctrl+R 或 Cmd+R）
   - 查看失败的请求（红色）
   - 重点关注：
     - `/images/*.jpg` 图片文件
     - `/fonts/*.woff2` 字体文件

4. **Elements 标签**
   - 检查 CSS 是否正确加载
   - 查看元素的计算样式，确认 Tailwind CSS 类是否生效

## 快速诊断命令

在项目根目录运行：

```bash
# 检查图片文件
ls -la public/images/

# 检查字体文件
ls -la public/fonts/

# 检查依赖是否安装
npm list tailwindcss postcss autoprefixer
```

## 临时解决方案

### 如果暂时无法下载图片

可以在浏览器中临时禁用图片加载来测试其他功能：
1. 打开开发者工具（F12）
2. 进入 Network 标签
3. 勾选 "Disable cache"
4. 在页面元素中，将 `<img>` 标签的 `src` 属性临时注释或使用占位符

### 如果暂时无法下载字体

Material Symbols 图标会显示为空白，但不影响其他功能。可以考虑：
1. 使用 Unicode 字符替代（如 ✓、✗、→ 等）
2. 使用 SVG 图标替代
3. 使用其他图标库（如 Font Awesome、Iconify）

## 完整解决方案

### 步骤 1: 下载图片（必需）

所有图片的 URL 映射在 `public/images/IMAGE_MAPPING.md` 中。你可以：

**方法A：手动下载**
1. 打开 `IMAGE_MAPPING.md`
2. 复制每个图片的 URL
3. 在浏览器中打开并保存
4. 将文件重命名为对应的文件名（如 `hero-background.jpg`）
5. 放入 `public/images/` 目录

**方法B：使用下载脚本**
如果有能够访问 Google 的网络环境：
```bash
node scripts/download-assets.js
```

### 步骤 2: 下载字体（可选但推荐）

1. 访问 Google Fonts
2. 下载需要的字体文件
3. 放入 `public/fonts/` 目录

或者使用国内字体 CDN 作为替代（需要修改 CSS）。

## 验证修复

修复后，检查：

1. ✅ 所有图片正常显示
2. ✅ Material Symbols 图标正常显示
3. ✅ 字体样式正确
4. ✅ 浏览器 Console 无 404 错误
5. ✅ 页面布局和样式完整

## 仍然有问题？

如果按照以上步骤操作后仍有问题，请提供：
1. 浏览器 Console 的错误信息
2. Network 标签中失败的请求
3. 具体的 UI 问题描述（最好有截图）
