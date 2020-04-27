let lodash = require("lodash");
let path = require("path")

module.exports = function override(config, env){
    // 删除 typescript-eslint
    lodash.remove(config.module.rules, data => String(data.test) === String(/\.(js|mjs|jsx|ts|tsx)$/) && data.enforce === "pre");

    config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, 'src')
    }
    // c.module.rules = [
    //     ...c.module.rules,
    //     {
    //         test: /\.(css|less)$/,
    //         use:['style-loader','css-loader','less-loader']
    //     }
    // ]

    console.log("@@@@@@@@@@", config)

    return config
}