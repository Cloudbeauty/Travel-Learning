<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendLists" :key="item.id"> 
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
			</li>
		</ul>
		<div class="look">查看所有产品</div>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	data () {
		return {
			recommendLists: [{
				id: '001',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg',
				title: '国色天乡·陆地乐园',
				desc: '镇园之宝眼镜蛇过山车'
			},{
				id: '002',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/c9/212294bb9356312f91492b31ab1bab3a.water.jpg_200x200_5d5bc10d.jpg',
				title: '成都欢乐谷',
				desc: '超级旋转过山车刺激到让你怀疑人生'
			},{
				id: '003',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
				title: '成都大熊猫繁育研究基地',
				desc: '看！熊猫宝宝在向你招手呢'
			},{
				id: '004',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
				title: '成都海昌极地海洋公园',
				desc: '蠢萌企鹅陪你嗨翻这个秋'
			},{
				id: '005',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_200x200_3f499a59.jpg',
				title: '青城山',
				desc: '青城山下白素贞，洞中千年修此身'
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