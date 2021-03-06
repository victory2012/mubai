// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "comma-dangle": [1, "always-multiline"],
    'linebreak-style': ["off", "windows"],
    "func-names": 0,
    "wrap-iife": [2, "inside"],
    "one-var": 1,
    "prefer-const": 0,
    "comma-dangle": 0,
    "quotes": 0,
    "max-len": 0,
    "arrow-parens": 0,
    "no-console": 0,
    "no-param-reassign": 0,
    "object-shorthand": 0,
    "no-plusplus": 0,
    "arrow-body-style": 0,
    "consistent-return": 0,
    'no-unused-expressions': 0,
    "no-unneeded-ternary": 0,
    "no-underscore-dangle": 0,
    "no-new": 0,
    "vars-on-top": 0,
    "space-before-function-paren": 0
  }
}
