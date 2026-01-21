# 修复图标显示问题的完整指南

## 问题描述
Material Symbols 图标显示为文本（如 "verified_user", "memory", "military_tech"）而不是图标。

## 解决方案

### 方案1：使用 CDN（已添加到 index.html）
已在 `index.html` 中添加了 Google Fonts CDN 链接。如果网络可以访问，图标会正常显示。

### 方案2：下载字体文件到本地（推荐用于国内部署）

1. **下载 Material Symbols 字体文件**
   - 访问：https://fonts.google.com/icons
   - 点击下载，选择 "Variable Font" 格式
   - 下载 `MaterialSymbolsOutlined[wght].woff2` 文件
   - 重命名为 `material-symbols-outlined.woff2`
   - 放入 `public/fonts/` 目录

2. **或者使用国内字体 CDN**
   
   在 `index.html` 中替换为：
   ```html
   <!-- 使用 jsDelivr CDN (国内可访问) -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@material-symbols/font-400@latest/index.css" />
   ```

3. **或者手动下载字体文件**
   
   下载链接：
   ```
   https://fonts.gstatic.com/s/materialsymbolsoutlined/v219/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2
   ```
   
   保存到：`public/fonts/material-symbols-outlined.woff2`

### 方案3：使用图标库替代（如果无法获取字体）

可以考虑使用其他图标库，如：
- Tabler Icons
- Heroicons
- Lucide Icons

但这需要修改代码，替换所有 Material Symbols 的使用。

## 验证图标是否正常显示

刷新页面后检查：
1. Logo 图标（precision_manufacturing）是否显示为图标而不是文本
2. 导航栏的聊天图标是否显示
3. 页面中的图标（verified_user, memory, military_tech 等）是否显示为图标

## 如果图标仍然不显示

1. 打开浏览器开发者工具（F12）
2. 查看 Console 是否有字体加载错误
3. 查看 Network 标签，确认字体文件是否成功加载
4. 检查字体文件路径是否正确

## 图片文件

图片文件缺失也会影响页面显示。请同时下载图片文件（参考 `IMAGE_MAPPING.md`）。
