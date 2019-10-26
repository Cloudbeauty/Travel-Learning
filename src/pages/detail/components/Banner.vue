<template>
<div>
	<div class="banner" @click="handleBannerClick">
		<img class="banner-img" :src="bannerImg" />
		<div class="banner-info">
			<div class="banner-title">{{this.sightname}}</div>
			<div class="banner-number">
				<span class="iconfont banner-icon">&#xe6df;</span>
				{{this.gallaryImgs.length}}
			</div>
		</div>
	</div>
	<fade-animation>
		<common-gallary 
		:imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose">
		</common-gallary>
	</fade-animation>
</div>	
</template>

<script>
import commonGallary from 'common/gallary/Gallary'
import fadeAnimation from 'common/fade/fadeAnimation'

export default {	
	name: 'detailBanner',
	props: {
		sightname: String,
		bannerImg: String,
		gallaryImgs: Array
	},
	data () {
		return {
			showGallary: false,
		}
	},
	components: {
		commonGallary,
		fadeAnimation
	},
	methods: {
		handleBannerClick () {
			this.showGallary = true;
		},
		handleGallaryClose () {
			this.showGallary = false;
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

	.banner
		overflow: hidden;
		height: 0;
		padding-bottom: 55%;
		position: relative;
		.banner-img
			width: 100%;
		.banner-info
			display: flex;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			line-height: .6rem;
			color: #fff;
			background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8)); //渐变
			.banner-title
				flex: 1;
				font-size: .34rem;
				padding: 0 .2rem;
			.banner-number
				line-height: .36rem;
				height: .36rem;
				padding: 0 .4rem;
				background: rgba(0,0,0,.6);
				font-size: .24rem;
				margin-top: .12rem;
				border-radius: .2rem;
				margin-right: .2rem;
				.banner-icon
					font-size: .24rem;
					margin-right: .08rem;
</style>