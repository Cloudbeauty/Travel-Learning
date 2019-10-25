<template>
<div>
	<div class="banner" @click="handleBannerClick">
		<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_600x330_5aa6e477.jpg" />
		<div class="banner-info">
			<div class="banner-title">国色天乡·陆地乐园</div>
			<div class="banner-number">
				<span class="iconfont banner-icon">&#xe6df;</span>
				39
			</div>
		</div>
	</div>
	<common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
</div>	
</template>

<script>
import commonGallary from 'common/gallary/Gallary'

export default {	
	name: 'detailBanner',
	data () {
		return {
			showGallary: false,
			imgs: ['http://img1.qunarzz.com/sight/p0/1704/6e/6ee4db45bb93a129a3.img.jpg_r_800x800_f7c378e1.jpg','http://img1.qunarzz.com/sight/p0/1704/1b/1be0f5fb22aba6b4a3.img.jpg_r_800x800_9d351609.jpg','http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_r_800x800_d6a9ed62.jpg']
		}
	},
	components: {
		commonGallary
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