# OpenTiny 官网

[https://opentiny.design/](https://opentiny.design/)

## 本地启动

```shell
# 同步并更新子模块
git submodule sync --recursive
git submodule update --init --recursive

#构建genui-sdk
pnpm build:genui-sdk

# 安装依赖
pnpm i

# 启动官网
pnpm dev

# 启动文档
pnpm dev:docs

# 启动TinyEngine官网
pnpm dev:engine
```
