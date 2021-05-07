const { override, addPostcssPlugins } = require('customize-cra');

module.exports = override(
    addPostcssPlugins([ // addPostcssPlugins 是 customize-cra 提供的一个方法，传入postcss的插件列表和配置就能注入postcss相关的配置
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
            autoprefixer: {
                flexbox: 'no-2009'
            },
            stage: 3
        }),
        require('autoprefixer'),
        require('tailwindcss')
    ])
);