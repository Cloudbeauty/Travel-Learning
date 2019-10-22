<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide v-for="item in swiperLists" :key="item.id">
			<img class="swiper-img" :src="item.imgUrl" />
	    </swiper-slide>
	    <!--轮播-->

	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>  
	    <!--轮播圆点--> 
	    </swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true         //使轮播插件支持循环轮播
			},
			swiperLists: [{
				id: '001',
				imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/8fee092dac302ecd0f244b7b9e707462.jpg_750x200_0119e32b.jpg"
			},{
				id: '002',
				imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/78b240572657a6da67e662540c846dd6.jpg_750x200_b75c8be9.jpg"
			}]
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