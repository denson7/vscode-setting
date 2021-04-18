module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  // vue
  // extends: ['plugin:vue/essential', '@vue/airbnb'],
  // react + ts
  // extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  // plugins: ['react', '@typescript-eslint'],
  // node + ts
  // 需安装@typescript-eslint/parser, @typescript-eslint/eslint-plugin, prettier, eslint-plugin-prettier, eslint-config-prettier, eslint
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  /**
   * "off" 或 0 - Close the rules
   * "warn" 或 1 - Open the rules，level：warn (Does not exit App),
   * "error" 或 2 - Open the rules，level：error (Exit App)
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
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'comma-spacing': [2, { before: false, after: true }],
    // "comma-dangle": [2, "never"],
    camelcase: 'off',
    // 'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],

    'no-console': 0,
    'no-debugger': 0,
    semi: ['error', 'never'], // 禁用 分号
    'no-multiple-empty-lines': ['error'], // 代码空行 数量
    'linebreak-style': [0, 'error', 'windows'], // 使用windows的换行
    'comma-dangle': [2, 'never'], //  对象数组最后一个不带逗号
    'no-trailing-spaces': 0, // 禁用 校验代码末尾带空格
    'import/no-dynamic-require': 0, // 禁用 动态require
    'import/no-unresolved': 0,
    'no-param-reassign': 0, // 声明为函数参数的变量可能会引起误解
    'max-len': ['error', 120], // 单行代码最大长度
    'guard-for-in': 0, // 禁用 禁用for in 循环
    'no-shadow': 0, // 禁用  禁止页面内相容参数名
    'object-shorthand': 0, // 禁用 禁止对象内使用带引号字符串
    'no-restricted-syntax': 0,
    'no-plusplus': 0, // 禁用 ++
    'consistent-return': 0, // 关闭箭头函数必须要return
    'no-return-assign': 0, // return 语句中不能有赋值表达式
    'global-require': 0, // 关闭禁止使用requrie
    'prefer-promise-reject-errors': 0, // 这条规则旨在确保承诺只被Error对象拒绝。
    'import/extensions': 'off', // 禁用文件名详细文件类型后缀
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'arrow-parens': ['error', 'as-needed'], // 箭头函数参数括号，可选 always：（默认）在所有情况下都需要参数；as-needed：当只有一个参数时允许省略参数
    'no-undef': 0, // 关闭显式声明全局变量的要求
    'class-methods-use-this': 0,
    'no-underscore-dangle': ['error', { allow: ['_id'] }], // 允许指定的标识符具有悬挂下划线
    camelcase: 0, // 关闭使用骆驼拼写法
    'no-global-assign': 0, // 允许修改只读全局变量,
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
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 允许在表达式中使用三元运算符，类似于短路评估
    'block-spacing': 2,
    quotes: [2, 'single'],
    // Forces 2 Spaces to be indented
    indent: [2, 2, { SwitchCase: 1 }],
    camelcase: 0,
    'no-var': 2,
    'no-unused-vars': 0,
    'no-debugger': 0,
    // A semicolon is required at the end of a statement
    semi: 2,
    'spaced-comment': 2,
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
    'no-spaced-func': 0,
    curly: [2, 'all'],
    // Controls the Spaces before and after the comma(控制逗号前后的空格)
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // Do not mix tabs and Spaces(禁止混用tab和空格)
    'no-mixed-spaces-and-tabs': 2,
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'linebreak-style': 0,
    'lines-around-comment': [
      1,
      {
        beforeBlockComment: true
      }
    ],
    // Performs consistent spacing within the braces of the object text(对象文字的大括号内执行一致的间距)
    'object-curly-spacing': [1, 'always'],
    // Use === instead of ==
    eqeqeq: [2, 'allow-null'],
    // Forces the maximum length of a row(强制一行的最大长度)
    'max-len': [1, 200],
    // Duplicate module imports are not allowed(禁止重复模块导入)
    'no-duplicate-imports': 2,
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
