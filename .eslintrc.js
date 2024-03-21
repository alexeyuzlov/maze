module.exports = {
    "root": true,
    "ignorePatterns": [
        "projects/**/*"
    ],
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "parserOptions": {
                "project": [
                    "tsconfig.json"
                ],
                "createDefaultProgram": true,
                "tsconfigRootDir": __dirname,
            },
            "plugins": [
                "@typescript-eslint",
            ],
            "extends": [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
            ],
            "rules": {
                ///---------------------

                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        "selector": "variable",
                        "modifiers": [
                            "const"
                        ],
                        "format": [
                            "UPPER_CASE",
                            "camelCase",
                            "PascalCase"
                        ]
                    },
                    {
                        "selector": "enumMember",
                        "format": [
                            "PascalCase"
                        ]
                    },
                    {
                        "selector": [
                            "memberLike",
                            "variableLike"
                        ],
                        "modifiers": [
                            "private"
                        ],
                        "format": [
                            "UPPER_CASE",
                            "camelCase",
                            "PascalCase"
                        ],
                        "leadingUnderscore": "require"
                    }
                ],
                "@typescript-eslint/array-type": "off",
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/ban-ts-comment": "off",
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/consistent-type-assertions": "off",
                "@typescript-eslint/dot-notation": "off",
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        "accessibility": "explicit",
                        "overrides": {
                            "accessors": "off",
                            "constructors": "no-public",
                            "methods": "explicit",
                            "properties": "explicit",
                            "parameterProperties": "explicit"
                        }
                    }
                ],
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/indent": "off",
                "@typescript-eslint/member-delimiter-style": [
                    "error",
                    {
                        "multiline": {
                            "delimiter": "semi",
                            "requireLast": true
                        },
                        "singleline": {
                            "delimiter": "comma",
                            "requireLast": false
                        }
                    }
                ],
                "@typescript-eslint/member-ordering": [
                    "error",
                    {
                        "default": {
                            "memberTypes": "never"
                        },
                        "classes": [
                            "public-static-field",
                            "protected-static-field",
                            "private-static-field",

                            "public-decorated-field",
                            "protected-decorated-field",
                            "private-decorated-field",

                            "public-instance-field",
                            "protected-instance-field",
                            "private-instance-field",
                            "public-abstract-field",
                            "protected-abstract-field",

                            "public-field",
                            "instance-field",

                            "protected-field",
                            "private-field",
                            "abstract-field",

                            "public-get",
                            "protected-get",
                            "private-get",

                            "constructor",

                            "public-static-method",
                            "protected-static-method",
                            "private-static-method",

                            "public-method",
                            "protected-method",
                            "private-method",
                        ]
                    }
                ],
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-empty-interface": "error",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-extra-non-null-assertion": "error",
                "@typescript-eslint/no-extra-semi": "error",
                "@typescript-eslint/no-floating-promises": "off",
                "@typescript-eslint/no-for-in-array": "off",
                "@typescript-eslint/no-inferrable-types": "off",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-misused-promises": "off",
                "@typescript-eslint/no-namespace": "error",
                "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-parameter-properties": "off",
                "@typescript-eslint/no-this-alias": "error",
                "@typescript-eslint/no-unnecessary-type-assertion": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-unsafe-return": "off",
                "@typescript-eslint/no-unused-expressions": "off",
                "@typescript-eslint/no-unused-vars": ["error",
                    {
                        "args": "none"
                    }
                ],
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/prefer-as-const": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/prefer-regexp-exec": "off",
                "@typescript-eslint/quotes": [
                    "error",
                    "single",
                    {
                        "allowTemplateLiterals": true
                    }
                ],
                "@typescript-eslint/require-await": "off",
                "@typescript-eslint/restrict-plus-operands": "off",
                "@typescript-eslint/restrict-template-expressions": "off",
                "@typescript-eslint/semi": [
                    "error",
                    "always"
                ],
                "@typescript-eslint/triple-slash-reference": [
                    "error",
                    {
                        "path": "always",
                        "types": "prefer-import",
                        "lib": "always"
                    }
                ],
                "@typescript-eslint/type-annotation-spacing": "error",
                "@typescript-eslint/unbound-method": "off",
                "@typescript-eslint/unified-signatures": "error",

                "prefer-spread": "off",
                "prefer-rest-params": "off",
                "no-prototype-builtins": "off",
                "no-useless-escape": "off",
                "no-extra-boolean-cast": "off",
                "no-case-declarations": "off",
                "arrow-spacing": "error",
                "arrow-body-style": "off",
                "arrow-parens": [
                    "error",
                    "always"
                ],
                "complexity": "off",
                "constructor-super": "error",
                "curly": "error",
                "default-case": "error",
                "eol-last": "error",
                "eqeqeq": [
                    "error",
                    "smart"
                ],
                "guard-for-in": "off",
                "id-blacklist": [
                    "error",
                    "any"
                ],
                "id-match": "error",
                "import/no-deprecated": "off",
                "max-classes-per-file": "off",
                "no-redeclare": "error",
                "max-len": [
                    "off",
                    {
                        "code": 140
                    }
                ],
                "new-parens": "error",
                "no-array-constructor": "error",
                "no-bitwise": "error",
                "no-caller": "error",
                "no-cond-assign": "error",
                "no-console": "off",
                "no-debugger": "error",
                "no-empty": "off",
                "no-empty-function": [
                    "error",
                    {
                        "allow": [
                            "constructors"
                        ]
                    }],
                "no-eval": "error",
                "no-extra-semi": "off",
                "no-fallthrough": "error",
                "no-invalid-this": "off",
                "no-multiple-empty-lines": [
                    "error",
                    {
                        "max": 1
                    }
                ],
                "no-new-wrappers": "error",
                "no-throw-literal": "error",
                "no-trailing-spaces": "error",
                "no-undef-init": "error",
                "no-underscore-dangle": "off",
                "no-unsafe-finally": "error",
                "no-unused-labels": "error",
                "no-unused-vars": "off",
                "no-var": "error",
                "object-shorthand": "error",
                "no-shadow": "off",
                "@typescript-eslint/no-shadow": "off",
                "one-var": [
                    "error",
                    "never"
                ],
                "prefer-const": "off",
                "quote-props": [
                    "error",
                    "as-needed"
                ],
                "radix": "error",
                "require-await": "off",
                "space-before-function-paren": [
                    "error",
                    {
                        "anonymous": "never",
                        "asyncArrow": "always",
                        "named": "never"
                    }
                ],
                "spaced-comment": [
                    "error",
                    "always"
                ],
                "space-before-blocks": "error",
                "use-isnan": "error",
                "valid-typeof": "error",
            }
        },
    ]
}
