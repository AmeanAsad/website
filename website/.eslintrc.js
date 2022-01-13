module.exports = {
    extends: [
        "next",
        "next/core-web-vitals",
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "plugin:react/recommended",
    ],
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/function-component-definition": [
            2,
            { namedComponents: "arrow-function" },
        ],
        "import/extensions": "off",
        "no-underscore-dangle": ["off"],
        "no-console": "warn",
        "import/order": "off",
        "react/sort-comp": "off",
        "react/react-in-jsx-scope": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": "off",
        "prefer-destructuring": "off",
        "import/prefer-default-export": "off",
        "comma-dangle": "off",
        "class-methods-use-this": "off",
        "arrow-body-style": "off",
        "react/jsx-one-expression-per-line": "off",
        "object-curly-newline": "off",
        "jsx-a11y/media-has-caption": "off",
        "prefer-template": "off",
        "operator-linebreak": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "react/prefer-stateless-function": "off",
        "array-callback-return": "off",
        "prettier/prettier": "off",
        "refer-default-export": "off",
        quotes: ["error", "double"],
        "no-restricted-properties": "off",
        "use-object-destructuring": "off",
    },
};