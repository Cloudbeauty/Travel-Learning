import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'   //轮播图插件
import 'styles/reset.css'     //重置页面样式表 统一不同手机的样式初始化
import 'styles/border.css'    //解决多倍屏里面像素边框显示多像素
import 'styles/iconfont.css'  //使用图标
import 'swiper/dist/css/swiper.css'
import fastClick from 'fastclick'      //解决移动端某些浏览器300ms点击延时

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,             //router: router
  store,
  render: h => h(App)
}).$mount('#app')

//路由就是根据网址的不同,返回不同的内容给用户