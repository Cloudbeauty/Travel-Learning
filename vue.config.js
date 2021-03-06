const path = require('path');
const mockIndexData = require("./mock/index.json");
const mockCityData = require("./mock/city.json");
const mockDetailData = require("./mock/detail.json");

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
            .set('common', resolve('src/common'))
    },
    devServer: {                          //转发机制
      port: 8080,
      before(app) {
        app.get("/api/index", (req, res) => {
          res.json(mockIndexData);
        })
        app.get("/api/city", (req, res) => {
          res.json(mockCityData);
        })
        app.get("/api/detail", (req, res) => {
          res.json(mockDetailData);
        })
      }
  }
};