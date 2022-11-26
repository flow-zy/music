module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0, // 取消组件名称校验,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-unused-vars': 0,
    camelcase: 0,
    'no-undef': 0,
    // 强制不使用分号结尾
    semi: ['error', 'never'],
    // 强制使用单引号
    quotes: ['error', 'single'],
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    'comma-dangle': [2, 'never'],
    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    'comma-style': [2, 'last'],
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 2,
    'space-before-function-paren': [2, 'never'],
    'no-multiple-empty-lines': 'error', // 限制最多出现两个空行
    'semi-spacing': 'error', // 强制分号后面有空格
    'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时，不允许写圆括号
    'arrow-spacing': 'error', // 要求箭头函数的=>前后有空格
    'no-var': 'error', // 要求使用let或const，而不是var
    'prefer-template': 'error', // 使用模板字符串，而不是字符串拼接
    'rest-spread-spacing': 'error' // 扩展运算符...和表达式之间不允许有空格
  }
}
