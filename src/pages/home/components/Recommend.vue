<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<router-link :to="'/detail/' + item.id" tag="li"
				class="item border-bottom" v-for="item in list" :key="item.id"> 
				<!--border-bottom类底部加上1像素边框-->
				<div>
					<img class="item-img" :src='item.imgUrl'>
					<!--不要忘记绑定src属性-->
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
		<div class="look">查看所有产品</div>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
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
	margin-top: .2rem;
.look 
	height: .8rem;
	line-height: .8rem;
	text-align: center;
	color: #00afc7;
.item                
	overflow: hidden;
	display: flex;
	height: 1.9rem;
	padding: .2rem;
	//margin-left: .2rem;
	.item-img
		width: 1.7rem;
		height: 1.7rem;
		padding: .1rem;	
	.item-info
		flex: 1;   //自适应屏幕宽度
		padding: .1rem;
		min-width: 0;
		.item-title
			line-height: .54rem;
			font-size: .32rem;
			ellipsis();
		.item-desc
			line-height: .4rem;
			color: #f00;
			ellipsis();
		.item-button
			line-height: .44rem;
			background: #ff9300;
			padding: 0 .2rem;
			border-radius: .06rem;
			margin-top: .16rem;
			color: #fff;
</style>