module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-plusplus": "off",
    "no-continue": "off",
    "no-console": "off",
    "no-loop-func": "off",
    "no-return-assign": "off",
    "no-unused-expressions": "off",
    "no-param-reassign": "off",
    "consistent-return": "off",
    "no-unreachable-loop": "off",
    "prefer-destructuring": "off",
    "array-callback-return": "off",
    "no-nested-ternary": "off",
    "prettier/prettier": "off",
    radix: ["error", "as-needed"],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],

    // treatUndefinedAsUnspecified: false,
  },
};

// parseInt()에 radix를 제공할 것. 제공하지 않으면 의도치 않게 16진수 문자열이 들어왔을때 오류가 발생할 수 있다.
// for문 사용 지양, for문은 원본을 변형하므로 루프메서드를 활용할 것
// console.log() 사용 지양
// 인덱스 값 사용을 위해 for in 루프를 사용하지 말 것
// ++ 연산자 지양. 대신 += 1 을 권장
// 매개변수로 받은 변수를 수정할당하지 말 것
// 중첩 삼항연산자 지양
