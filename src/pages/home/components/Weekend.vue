<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendLists" :key="item.id"> 
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
	data () {
		return {
			recommendLists: [{
				id: '001',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
				title: '成都必打卡',
				desc: '成都的标志，也是现代人对老成都的记忆'
			},{
				id: '002',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
				title: '远离烧烤模式',
				desc: '与冰川里的水晶宫、“摄影家走廊”、来一场亲密的约会，艰辛会有的，可这都是值得的'
			},{
				id: '003',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',
				title: '摩崖石刻造像',
				desc: '诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选'
			},]
		}
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
		padding-bottom: 33.9%;
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