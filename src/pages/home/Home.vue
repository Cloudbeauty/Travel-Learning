<template>
	<div>
		<home-header :city="city"></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
import homeRecommend from './components/Recommend'
import homeWeekend from './components/Weekend'
import axios from 'axios'

export default {
	name: 'Home',
	components: {
		homeHeader,
		homeSwiper,
		homeIcons,
		homeRecommend,
		homeWeekend
	},
	data () {
		return {
			city: '',
			swiperList: [],             //swiper由空数组创建 从最后内容开始显示
			iconList: [],
			recommendList: [],
			weekendList: []
		}
	},
	methods: {
		getHomeInfo () {                     //获取ajax数据 json文件不能注释
			axios.get('/api/index')     
			//请求一个URL 返回promise对象
			.then(this.getHomeInfoSucc)      
		},
		getHomeInfoSucc (res) { 
			res = res.data;             
			if (res.ret && res.data){       //数据获取成功    
				const data = res.data; 
				this.city = data.city;
				this.swiperList = data.swiperList;
				this.iconList = data.iconList;
				this.recommendList = data.recommendList;
				this.weekendList = data.weekendList;
			};
		}             
	},
	mounted () {
		this.getHomeInfo()                   //获取ajax数据
	}
}
</script>

<style>

</style>
