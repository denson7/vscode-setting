## vs Code 配置 Eslint 和 Prettier
vscode 格式化相关配置
```
{
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_line_length": 200,
            "wrap_attributes": "auto",
            "end_with_newline": false
        }
    },
    //分号
    "prettier.semi": false,
    "prettier.singleQuote": true, //使用单引号替代双引号
    "prettier.eslintIntegration": true,
    //函数前加空格
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "eslint.alwaysShowStatus": true,
    "eslint.autoFixOnSave": true,
    "eslint.workingDirectories": [
        ".eslintrc.js",
        {
            "mode": "auto"
        }
    ],
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "vue", "autoFix": true }
    ],
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    //默认JavaScript格式化程序(为了更美观)
    "javascript.format.enable": true,
    "prettier.arrowParens": "avoid",
}
```

eslint示例
```javascript
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  plugins: ['vue'],
  extends: ['plugin:vue/essential', 'standard'],
  rules: {
    camelcase: 'off',
    'no-console': 'error',
    'standard/no-callback-literal': 'off',
    'generator-star-spacing': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'never'
      }
    ],
    'func-call-spacing': ['error', 'never'],
    'vue/no-mutating-props': 'nerve',
    'no-debugger': 'error',
    'template-curly-spacing': 'off',
    quotes: ['error', 'single'],
    // 强制不使用分号结尾
    semi: ['error', 'never'],
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['TemplateLiteral', 'ConditionalExpression'],
        SwitchCase: 1
      }
    ]
    // end 解决eslint报错问题
  }
}
```
vscode设置
```javascript
"eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "vue", "autoFix": true }
    ],
```
