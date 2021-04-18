module.exports = {
  root: true,
  // 环境
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  // 解析器
  parser: '@typescript-eslint/parser',
  // vue
  // extends: ['plugin:vue/essential', '@vue/airbnb'],
  // react + ts
  // extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  // 插件
  // plugins: ['react', '@typescript-eslint'],
  // node + ts
  // 需安装@typescript-eslint/parser, @typescript-eslint/eslint-plugin, prettier, eslint-plugin-prettier, eslint-config-prettier, eslint
  // extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  // 配置标准的js风格 extends: 'standard',
  extends: [
    "eslint:recommended"
  ],
  // 编码规范
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // 解析器选项
  parserOptions: {
    // 指定使用额外的语言特性
    ecmaFeatures: {
      destructuring: true,
      // 允许在全局作用使用return
      globalReturn: true,
      // 启用严格模式（strict mode） >= ECMAScript 5版本；
      impliedStrict: true,
      // 启用JSX
      jsx: true,
      modules: true,
    },
  /**
   * 配置检查规则
   * "off" 或 0 - Close the rules(关闭规则)
   * "warn" 或 1 - Open the rules, level：warn (开启规则, warn)
   * "error" 或 2 - Open the rules, level：error (开启规则, erorr)
   */
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    ///////////////////
    //  javascript   //
    ///////////////////
    // 语句强制分号结尾
    semi: [2, 'always'],
    // 禁用 分号
    // semi: [2, 'never'],
    // 关闭强制使用驼峰法命名
    camelcase: 0,
    // 强制使用单引号
    quotes: [2, 'single'],
    // 强制缩进2个空格
    indent: [2, 2, { SwitchCase: 1 }],
    'block-spacing': 2,
    // Controls the Spaces before and after the comma(控制逗号前后的空格)
    'comma-spacing': [2, { before: false, after: true }],
    // 对象数组最后一个不带逗号
    'comma-dangle': [2, 'never'],
    // 使用windows的换行
    'linebreak-style': [0, 'error', 'windows'],
    // Use === instead of ==
    eqeqeq: [2, 'allow-null'],
    'class-methods-use-this': 0,
    // 强制单行代码最大长度
    'max-len': [1, 200],
    // 函数最多只能有5个参数
    'max-params': [0, 5],
    // 注释风格有空格
    'spaced-comment': 2,
    // 必须使用 if(){} 中的{}
    curly: [2, 'all'],
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    // 关闭不能有未定义的变量
    'no-undef': 0,
    // 禁止使用alert
    'no-alert': 2,
    'no-var': 2,
    'no-debugger': 0,
    'no-restricted-syntax': 0,
    // 禁用 ++
    'no-plusplus': 0,
    // 禁用代码结束后,末尾带空格
    'no-trailing-spaces': 0,
    // 声明为函数参数的变量可能会引起误解
    'no-param-reassign': 0,
    // return 语句中不能有赋值表达式
    'no-return-assign': 0,
    // 允许在表达式中使用三元运算符，类似于短路评估
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    // 允许修改只读全局变量
    'no-global-assign': 0,
    // 允许指定的标识符具有悬挂下划线
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    // 禁止 外部作用域中的变量与它所包含的作用域中的变量或参数同名
    'no-shadow': 0,
    // 代码空行 数量
    'no-multiple-empty-lines': ['error'],
    // Do not mix tabs and Spaces(禁止混用tab和空格)
    'no-mixed-spaces-and-tabs': 2,
    // 禁止修改const声明的变量
    'no-const-assign': 2,
    // 在创建对象字面量时不允许键重复
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    // Function arguments cannot be repeated(函数参数不能重复)
    'no-dupe-args': 2,
    // The contents of a block statement cannot be empty(块语句中的内容不能为空)
    'no-empty': 2,
    'no-func-assign': 2,
    // Duplicate declarations of variables are prohibited(禁止重复声明变量)
    'no-redeclare': 2,
    // 函数调用时 函数名与()之间不能有空格
    'no-spaced-func': 2,
    // 禁止重复模块导入
    'no-duplicate-imports': 2,
    'no-console': 0,
    'no-debugger': 0,
    // 禁止catch子句参数与外部作用域变量同名
    'no-catch-shadow': 2,
    // 禁止给类赋值
    'no-class-assign': 2,
    // 块语句中的内容不能为空
    'no-empty': 2,
    // 禁止使用eval
    'no-eval': 2,
    // 禁止对null使用==或!=运算符
    'no-eq-null': 2,
    // 禁止多余的冒号
    'no-extra-semi': 2,
    // 禁止比较时使用NaN，只能用isNaN()
    'use-isnan': 2,
    // 禁用 动态require
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    // 禁用文件名详细文件类型后缀
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // 禁用for in 循环
    'guard-for-in': 1,
    // 关闭箭头函数必须要return
    'consistent-return': 0,
    // 关闭禁止使用requrie
    'global-require': 0,
    // 这条规则旨在确保承诺只被Error对象拒绝
    'prefer-promise-reject-errors': 0,
    // 箭头函数参数括号，可选 always：（默认）在所有情况下都需要参数；as-needed：当只有一个参数时允许省略参数
    'arrow-parens': ['error', 'as-needed'],
    // 函数定义时括号前面要有空格
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // 对象解构不需要换行
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: {
          multiline: true
        }
      }
    ],
    // 对象字面量中冒号的前后空格
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    //行前|行后备注
    'lines-around-comment': [
      1,
      {
        beforeBlockComment: true
      }
    ],
    // 大括号内是否允许不必要的空格
    'object-curly-spacing': [0, 'never'],
    // 强制对象字面量缩写语法
    'object-shorthand': 1,
    ///////////////////
    //  typescript   //
    ///////////////////
    '@typescript-eslint/camelcase': ['off', { properties: 'always' }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-this-alias': 0,
    //////////////
    //  React   //
    //////////////
    // Verify that JSX has the key attribute in an array or iterator, turned off by default
    // 在数组或迭代器中验证JSX具有key属性
    'react/jsx-key': 2,
    // Forces the consistent use of double quotes in JSX quotes(强制在JSX属性（jsx-quotes）中一致使用双引号)
    'jsx-quotes': [2, 'prefer-double'],
    // Do not use deprecated methods(不使用弃用的方法)
    'react/no-deprecated': 1,
    'react/no-unescaped-entities': 0,
    // 关闭属性
    'react/prop-types': 0,
    // Verify that props are indented in JSX(验证JSX中的props缩进)
    'react/jsx-indent-props': [2, 2],
    // Undeclared variables are forbidden in JSX(在JSX中禁止未声明的变量)
    'react/jsx-no-undef': 1,
    // Preventing loss of React when using JSX(使用JSX时防止丢失React)
    'react/react-in-jsx-scope': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/display-name': 0
  }
};
