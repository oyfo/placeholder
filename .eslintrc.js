'use strict';

// Gaming Promotions Squad eslint config

module.exports = {
    extends: 'airbnb-base',
    plugins: [
        'mocha',
        'markdown',
    ],
    parserOptions: {
        sourceType: 'script',
    },
    rules: {
        indent: ['error', 4],

        // set linter rules to disable one line if statements
        // set to error
        curly: 'error',

        // It's not possible to exclude function definitions from max-len,
        // so turn it off
        'max-len': ['off'],

        // mocha plugin
        'mocha/no-exclusive-tests': 'error',

        strict: ['error', 'global'],
    },
    env: {
        mocha: true, // we use Mocha testing framework in all projects
    },
};