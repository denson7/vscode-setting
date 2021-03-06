## setting.json 配置

### 查看所有默认配置

```
使用快捷键 Ctrl+Shift+P ，然后搜索setting，选择defaultSettings.json这个文件，打开即VSCode的所有默认配置项。
```

### 用户配置：实现 Ctrl 点击进行代码跳转 (或 F12)

搭配 插件 `JetBrains IDE Keymap` 使用。

```
{
  // =====================
  // ====设置workbench====
  // =====================
  // 控制树缩进,默认8像素
  "workbench.tree.indent": 24,
  // 目录树的位置,默认left
  "workbench.sideBar.location": "left",
  // 目录左侧菜单(Explorer, Search, Source Control, Debug, Extensions),默认为true
  "workbench.activityBar.visible": true,
  // 隐藏控制台底部状态栏,默认为true
  "workbench.statusBar.visible": false,
  // 关闭预览模式，默认true为开启预览模式，标签页字体为斜体,设置false即打开文件总是在新窗口打开
  "workbench.editor.enablePreview": false,
  "workbench.editor.enablePreviewFromQuickOpen": false,
  // 设置打开多文件时Tab方式显示,默认为true
  "workbench.editor.showTabs": true,
  // 设置Tab选项卡的大小,允许选项卡缩小,默认为fit | shrink 缩小
  "workbench.editor.tabSizing": "fit",
  // 设置在当前活动窗口的右侧打开新窗口,默认为right
  "workbench.editor.openPositioning": "right",
  "workbench.colorTheme": "Darcula Theme from IntelliJ",
  // 在没有从上一会话中恢复出信息的情况下,控制启动时显示的编辑器
  // - none: 在启动时不打开编辑器。
  // - welcomePage: 打开欢迎页面 (默认)。
  // - readme: 打开包含一个自述文件的文件夹时, 打开自述文件, 否则回退到 "欢迎页面"。
  // - newUntitledFile: 打开新的无标题文件 (仅在打开空工作区时适用)。
  // - welcomePageInEmptyWorkbench: 在打开空工作区时打开欢迎页面。
  "workbench.startupEditor": "newUntitledFile",
  // 设置目录树中隐藏的文件和文件夹
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.vscode": true,
    "**/.idea": true,
    "**/node_modules": true
  },
  // 设置行尾字符,默认auto跟随操作系统(\n:Linux | \r\n: windows | auto)
  "files.eol": "\n",
  // 配置语言的文件关联
  "files.associations": {
    "*.json": "jsonc"
  },
  // 控制已更新文件的自动保存,默认off
  "files.autoSave": "afterDelay",
  // 自动保存已更新文件的延迟时间 (毫秒), 默认1000毫秒
  "files.autoSaveDelay": 1000,
  // =====================
  // ======设置窗口========
  // =====================
  // 设置在新窗口中打开文件夹,默认为default
  "window.openFoldersInNewWindow": "on",
  // 启用后, 按Tab键,将实现 Emmet 快捷键功能,默认为false
  "emmet.triggerExpansionOnTab": true,
  // =====================
  // ======设置终端========
  // =====================
  // 设置终端光标闪烁,默认为false
  "terminal.integrated.cursorBlinking": true,
  // 设置终端光标样式,默认为block
  "terminal.integrated.cursorStyle": "line",
  // 设置终端的字号,默认为14(像素)
  "terminal.integrated.fontSize": 12,
  // 设置终端在 Windows 上使用的 Shell 的路径
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  // =====================
  // ======设置编辑区======
  // =====================
  // 开启编辑器的miniMap,默认为true
  "editor.minimap.enabled": true,
  // 显示行号, 默认on
  "editor.lineNumbers": "on",
  // 光标样式, 默认line (line|block)
  "editor.cursorStyle": "line",
  // 是否启动代码折叠,默认true
  "editor.folding": true,
  // 根据文件类型自动设置tabsize的选项,默认为true
  "editor.detectIndentation": true,
  //
  // 保存时自动格式化,默认为false
  "editor.formatOnSave": true,
  // 编辑器字体设置
  "editor.fontFamily": "Consolas,JetBrainsMono,'Courier New', monospace",
  // 设置在空白字符上显示符号的方式,默认selection (none|boundary|selection|all)
  "editor.renderWhitespace": "none",
  // 缩进,默认为4
  "editor.tabSize": 2,
  // 字体大小,默认14
  "editor.fontSize": 12,
  // 设置光标的显示方式, 默认blink (smooth | solid | blink)
  "editor.cursorBlinking": "smooth",
  // 是否启用字体连字,默认为false
  "editor.fontLigatures": true,
  // 设置行高, 默认0,根据字体自动计算
  "editor.lineHeight": 20,
  // 自动格式化粘贴内容,默认false
  "editor.formatOnPaste": true,
  // 通过鼠标添加多个光标时使用的修改键, 默认alt (ctrlCmd | alt),这里如果设置为ctrlCmd则不能使用ctrl+鼠标点击 进行代码跳转
  "editor.multiCursorModifier": "alt",
  // 设置换行的方式(on表示在视区宽度处换行),默认为off
  "editor.wordWrap": "on",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // =====================
  // ======扩展设置========
  // =====================
  // eslint保存时自动修复
  // "eslint.autoFixOnSave": true,
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // "zentabs.maximumOpenedTabs": 10
  "go.formatTool": "goimports",
  "go.useLanguageServer": true,
  "typescript.preferences.quoteStyle": "single",
  "typescript.preferences.renameShorthandProperties": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
}
```
