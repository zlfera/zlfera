//通过vue-resources-loader 将.less文件注入到每个.less和vue文件中去
const path = require("path");
module.exports = {
    lintOnSave: false,

    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                path.join(__dirname, "/src/assets/styles/variables.less"),
                path.join(__dirname, "/src/assets/styles/mixins.less"),
            ],
        },
    },
};
