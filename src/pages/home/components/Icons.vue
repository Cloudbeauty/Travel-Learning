<template>
	<div class="icons">
		<swiper :options="swiperOption" v-if="showIcon">
		    <swiper-slide v-for="(page,index) in pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl">
						<!--不要忘记绑定地址属性-->
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
		    </swiper-slide>  
		    <div class="swiper-pagination"  slot="pagination"></div>
		 </swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	props: {
		list: Array
	},
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,         //使轮播插件支持循环轮播
				autoplay: false
			}
		}
	},
	computed: {
		pages () {                 //设置页码展示数据
			const pages = []
			this.list.forEach((item,index) => {
				const page = Math.floor(index / 8);
				if (!pages[page]){
					pages[page] = [];
				}
				pages[page].push(item)
			})
			return pages;
		},
		showIcon () {
			return this.list.length
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.icons >>> .swiper-container
	width: 100%;
	height: 0;
	padding-bottom: 54%;         //宽高2：1
	//overflow: hidden;    swiper-container自带
.icons >>> .swiper-pagination
	bottom: 0;
.icons
	margin-top: .1rem;
	.icon                        //小图标
		width: 25%;
		float: left;
		padding-bottom: 25%;     //宽高1：1
		overflow: hidden;
		height: 0;
		position: relative;
		.icon-img                //图标图片
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: .44rem;  //22px 预留文字位置
			box-sizing: broder-box;
			padding: 1px;
			.icon-img-content
				display: block;     //图片居中
				margin: 0 auto;
				height: 100%;
		.icon-desc                 //图标文字
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: .44rem;
			line-height: .44rem;
			text-align: center;
			color: $darkTextColor;
			ellipsis();
		
</style>