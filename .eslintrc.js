module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "always"
        ],
        "no-trailing-spaces": [
            "error",
            { "skipBlankLines": true }
        ],
        "react/display-name": 1,
        "react/jsx-boolean-value": [1, "always"],
        "react/jsx-no-undef": 1,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-multi-comp": [2, { "ignoreStateless": true } ],
        "react/react-in-jsx-scope": 1,
        "react/self-closing-comp": 1,
        "react/wrap-multilines": 1
    }
};