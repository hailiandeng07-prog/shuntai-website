# 修复 HTTP2 错误

## 问题
```
fatal: unable to access 'https://github.com/hailiandeng07-prog/shuntai-website.git/': Error in the HTTP2 framing layer
```

这是 HTTP/2 协议的网络问题。

## 解决方案

已配置 Git 使用 HTTP/1.1 替代 HTTP/2：

```bash
# 配置 Git 使用 HTTP/1.1
git config --global http.version HTTP/1.1

# 增加 POST 缓冲区大小（可选，帮助大文件推送）
git config --global http.postBuffer 524288000
```

## 现在可以重新推送

```bash
git push -u origin main
```

## 如果还是失败

### 方法1：使用 SSH（推荐）

如果你有 SSH key，可以使用 SSH 方式：

```bash
# 更改远程仓库地址为 SSH
git remote set-url origin git@github.com:hailiandeng07-prog/shuntai-website.git

# 推送
git push -u origin main
```

### 方法2：使用 Git LFS（如果文件很大）

```bash
# 安装 Git LFS
git lfs install

# 跟踪大文件
git lfs track "*.jpg"
git lfs track "*.png"
git lfs track "*.woff2"

# 添加并提交
git add .gitattributes
git commit -m "添加 Git LFS 支持"

# 推送
git push -u origin main
```

### 方法3：检查网络连接

```bash
# 测试 GitHub 连接
ping github.com

# 如果网络正常，重试推送
git push -u origin main
```
