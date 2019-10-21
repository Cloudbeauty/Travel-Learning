import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'     //重置页面样式表 统一不同手机的样式初始化
import './assets/styles/border.css'    //解决多倍屏里面像素边框显示多像素
import fastClick from 'fastclick'      //解决移动端某些浏览器300ms点击延时

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,             //router: router
  store,
  render: h => h(App)
}).$mount('#app')

//路由就是根据网址的不同,返回不同的内容给用户