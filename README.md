# 宏业电子厂解谜游戏部署指南

## 项目简介
这是一个基于React+TypeScript的解谜游戏网站，主题为"宏业电子厂解谜"。玩家需要探索工厂，解开隐藏的秘密并逃离。

## 部署到GitHub Pages

### 前提条件
1. 已安装Node.js和npm/pnpm
2. 已创建GitHub账号
3. 已安装Git

### 步骤1：创建GitHub仓库
1. 在GitHub上创建一个新的仓库（可以是公开或私有）
2. 复制仓库的URL

### 步骤2：配置项目
1. 修改`package.json`中的`homepage`字段：
   ```json
   "homepage": "https://[YOUR_USERNAME].github.io/[REPOSITORY_NAME]"
   ```
   将`[YOUR_USERNAME]`替换为您的GitHub用户名，`[REPOSITORY_NAME]`替换为您的仓库名称

2. 修改`src/main.tsx`中的`basename`变量：
   ```javascript
   const basename = process.env.NODE_ENV === 'production' 
     ? '/[REPOSITORY_NAME]' 
     : '';
   ```
   将`[REPOSITORY_NAME]`替换为您的仓库名称

### 步骤3：安装依赖
```bash
npm install
# 或
pnpm install
```

### 步骤4：构建项目
```bash
npm run build
# 或
pnpm build
```

### 步骤5：部署到GitHub Pages
```bash
npm run deploy
# 或
pnpm deploy
```

### 步骤6：查看部署结果
1. 部署完成后，访问`https://[YOUR_USERNAME].github.io/[REPOSITORY_NAME]`查看网站
2. 首次部署可能需要几分钟时间才能在GitHub Pages上显示

## 开发模式运行
```bash
npm run dev
# 或
pnpm dev
```
然后在浏览器中访问 `http://localhost:3000`

## 项目结构说明
- `src/pages/` - 包含所有页面组件
- `src/components/` - 包含可复用组件
- `src/contexts/` - 包含React Context
- `src/hooks/` - 包含自定义Hooks
- `src/lib/` - 包含工具函数

## 游戏攻略提示
1. 从首页开始游戏，进入工厂大厅
2. 探索不同的区域和线索
3. 解开密码和谜题以继续前进
4. 最终目标是找到工厂的秘密并逃离

## 注意事项
- 确保在部署前正确配置`homepage`和`basename`
- 如果在部署后遇到路由问题，检查`basename`是否正确配置
- GitHub Pages仅支持静态网站托管，不支持服务器端渲染