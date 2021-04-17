## 调试 Typescrip

### 方法 1 使用 ts-node

```
{
  // Use IntelliSense to learn about possible Node.js debug attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program (Debug)",
      "cwd": "${workspaceRoot}/src/",
      "args": ["${workspaceRoot}/src/app.ts"],
      "env": {
        "NODE_ENV": "development"
      },
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
      "sourceMaps": true,
      "skipFiles": ["**/node_modules/**"]
    }
  ]
}
```

### 方法 2 配置自动编译

使用 vscode 的 tasks 自动将 ts 编译为 js。 添加文件.vscode/tasks.json

```
//
```

### 方法 3 使用 nodemon

在项目根目录下添加 nodemon.json

```
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/", "dist/", "coverage/"],
  "watch": ["src/"],
  "execMap": {
    "ts": "node -r ts-node/register"
  },
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json,ts"
}
```

restartable：我们可以用来手动重新启动程序的命令
ignore：不希望在更改时触发程序重新启动的文件列表
watch：更改时我们希望触发程序重新启动的路径列表
execMap：文件类型/扩展名与运行时之间的映射
env：要包含的环境变量
ext：Nodemon 监视的文件扩展名

在 package.json 文件中添加脚本命令

```
{
  "name": "typescript-nodemon",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon --config nodemon.json src/index.ts",
    "dev:debug": "nodemon --config nodemon.json --inspect-brk src/index.ts"
  },
  "devDependencies": {
    "@types/node": "^14.11.2",
    "nodemon": "^2.0.4",
    "ts-node": "^9.0.0",
    "typescript": "^4.0.3"
  }
}

```

配置 vscode

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach",
      "restart": true,
      "processId": "${command:PickProcess}"
    }
  ]
}
```
