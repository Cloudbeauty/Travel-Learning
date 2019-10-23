<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in list" :key="item.id"> 
				<!--border-bottom类底部加上1像素边框-->
				<div class="item-img-wrapper">
					<img class="item-img" :src='item.imgUrl'>
					<!--不要忘记绑定src属性-->
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

.title            //热销推荐组件
	height: .8rem;
	line-height: .8rem;
	background: #eee;
	text-indent: .2rem;
.item                
	.item-img-wrapper
		overflow: hidden;
		height: 0;
		padding-bottom: 37.09%;
	.item-img
		width: 100%;
	.item-info
		padding: .2rem;
		min-width: 0;
		.item-title
			line-height: .54rem;
			font-size: .32rem;
			ellipsis();
		.item-desc
			line-height: .4rem;
			color: #ccc;
			ellipsis();
</style>