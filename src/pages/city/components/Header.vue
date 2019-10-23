<template>
	<div class="header">
		<router-link to="/">
			<div class="iconfont city-back">&#xe624;</div>
		</router-link>
		城市选择
	</div>
</template>

<script>
export default {
	name: 'cityHeader'
}	
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

	.header 
		height: $headerHeight;
		line-height: $headerHeight;
		overflow: hidden;
		color: #fff;
		text-align: center;
		background: $bgColor;
		font-size: .32rem;
		position: relative;
		.city-back
			width: .64rem;
			text-align: center;
			font-size: .4rem;
			position: absolute;
			top: 0;
			left: 0;
			color: #fff;
</style>