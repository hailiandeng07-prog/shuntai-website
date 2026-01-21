# 图片占位符指南

由于图片文件暂时缺失，以下是临时解决方案：

## 临时方案：使用占位图片服务

如果暂时无法下载图片，可以使用在线占位图片服务测试页面布局：

### 方案1：使用 placeholder.com

在代码中临时替换图片路径：
```html
<img src="https://via.placeholder.com/1920x1080/359EFF/FFFFFF?text=Hero+Background" alt="Hero Background" />
```

### 方案2：使用统一的占位图

可以创建一个统一的占位图片，所有图片都使用它：
```html
<img src="/images/placeholder.jpg" alt="Placeholder" />
```

### 方案3：使用 SVG 占位符

创建一个简单的 SVG 占位符：
```html
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%23359EFF' width='1920' height='1080'/%3E%3Ctext fill='white' font-family='sans-serif' font-size='60' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EHero Background%3C/text%3E%3C/svg%3E" alt="Hero Background" />
```

## 推荐：下载真实图片

为了完全还原 Google AI Studio 原页面效果，建议下载真实的图片文件。所有图片的URL映射在 `IMAGE_MAPPING.md` 中。
