<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>			
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>

<script>

export default {
	name: 'homeHeader',
	props: {
		city: String
	}
}
</script>

<style lang="stylus" scoped>
//1rem = html font-size = 50px  
	@import '~styles/varibles.styl'      
	//css中引用使用 ~@ 到达src目录 ~styles到达styles目录
	.header
		display: flex;
		height: $headerHeight;     //二倍图 86px/100 ——→ 43px /50
		background: $bgColor;
		color: #fff;
		line-height: $headerHeight;
		.header-left
			width: .64rem;      //64px/100 32px/50
			float: left;
			.back-icon
				text-align: center;
				font-size: .4rem;
		.header-input
			flex: 1        //自适应
			background: #fff;
			border-radius: 5px;
			margin-top: .12rem;
			height: .62rem;
			margin-left: .2rem;
			color: #ccc;
			line-height: .62rem;
			padding-left: .2rem;
		.header-right
			width: 1.24rem;          //124px/100 62px/50
			float: right;
			color: #fff;
			text-align: center;
			.arrow-icon
				margin-left: -.04rem;
				font-size: .24rem;
</style>
