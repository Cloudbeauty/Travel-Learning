<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
			<!--轮播-->
		    <swiper-slide v-for="item in list" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
		    <!--圆点-->
	    	<div class="swiper-pagination"  slot="pagination"></div>  
	    </swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props: {
		list: Array
	},
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true         //使轮播插件支持循环轮播
			}
		}
	},
	computed: {
		showSwiper () {
			return this.list.length      //使得真正数据进来才显示
		}
	}
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active  
	background: #fff !important;
//样式穿透 当wrapper子组件出现swiper-pagination-bullet-active这个类则应用此样式 突破scoped限制
	
.wrapper
	width: 100%;
	//height: 31.25vw //高度相对31.25%viewport的宽度 兼容性不好
	height: 0;                //解决轮播图下部件抖动问题
	overflow: hidden;
	padding-bottom: 26.67%;   //高度相对宽度自动撑开31.25% 宽高比例自适应
	background: #ccc;
	.swiper-img
		width: 100%;
</style>