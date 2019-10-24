<template>
	<ul class="list">
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
	</ul>
</template>

<script>
export default {
	name: 'cityAlphabet'
}	
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.list
	display: flex;
	flex-direction: column; 
	justify-content: center;    //垂直居中
	position: absolute;
	top: 1.58rem;
	right: 0;
	bottom: 0;
	width: .4rem;
	.item
		text-align: center;      //水平居中
		line-height: .44rem;
		color: $bgColor;
</style>