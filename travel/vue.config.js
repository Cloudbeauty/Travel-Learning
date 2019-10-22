const path = require('path');
function resolve (dir) {
    return path.resolve(__dirname, dir)
}
//配置别名
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('styles', resolve('src/assets/styles'))
    }
}