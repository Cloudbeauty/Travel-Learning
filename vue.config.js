const path = require('path');
const mockIndexData = require("./mock/index.json");

function resolve (dir) {
    return path.resolve(__dirname, dir)
}

//webpack-dev-serve
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{             //配置别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('styles', resolve('src/assets/styles'))
    },
    devServer: {                          //转发机制
      port: 8080,
      before(app) {
        app.get("/api/index", (req, res) => {
          res.json(mockIndexData);
        });
      }
  }
};