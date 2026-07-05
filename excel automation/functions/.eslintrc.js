module.exports = {
  env: {
    node: true,
    es2022: true,
  },

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "script",
  },

  extends: [
    "eslint:recommended",
    "google",
  ],

  rules: {
    // Firebase / Node ortamında sorun çıkaranlar
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",

    // String kuralları
    "quotes": ["error", "double", { allowTemplateLiterals: true }],

    // Functions template'lerinde sık çıkan gereksiz sertlikleri yumuşat
    "object-curly-spacing": ["error", "always"],
    "require-jsdoc": "off",
    "valid-jsdoc": "off",

    "max-len": ["error", { code: 120 }],
  },

  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
};
