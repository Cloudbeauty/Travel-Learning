<template>
<div>
	<router-link 
		tag="div" to="/" 
		class="header-abs" v-if="showAbs">
		<div class="iconfont header-abs-back">&#xe624;</div>
	</router-link>
	<div class="header-fixed" v-if="!showAbs"
		:style="opacityStyle">
		<router-link to="/">
			<div class="iconfont header-fixed-back">&#xe624;</div>
		</router-link>
		景点详情
	</div>
</div>	
</template>

<script>

export default {	
	name: 'detailHearder',
	data () {
		return {
			showAbs: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll () {
			//document.documentElement.scrollTop = 0
			const top = document.body.scrollTop;
			//header渐隐渐现效果
			if (top > 50) {
				let opacity = top / 140;
				opacity = opacity > 1? 1: opacity;
				this.opacityStyle = {
					opacity
				}
				this.showAbs = false;
			}else{
				this.showAbs = true;
			}
		}
	},
	//使用activated、deactivated 需和keep-alive配合使用
	activated () {
		window.addEventListener('scroll',this.handleScroll);
	},
	//优化 解绑全局事件
	deactivated () {
		window.removeEventListener('scroll',this.handleScroll);
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header-abs
	position: absolute;
	left: .2rem;
	top: .2rem;
	width: .8rem;
	height: .8rem;
	line-height: .8rem;
	border-radius: .4rem;
	text-align: center;
	background: rgba(0,0,0,0.6);
	.header-abs-back
		color: #fff;
		font-size: .4rem;
.header-fixed
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2;
	height: $headerHeight;
	line-height: $headerHeight;
	color: #fff;
	text-align: center;
	background: $bgColor;
	font-size: .32rem;
	.header-fixed-back
		width: .64rem;
		text-align: center;
		font-size: .4rem;
		position: absolute;
		top: 0;
		left: 0;
		color: #fff;
</style>