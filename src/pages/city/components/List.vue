<template>
	<div class="list" ref="wrapper">
		<div>
			<!--当前城市-->
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<router-link to="/">
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.$store.state.city}}</div>
					</div>
				</div>
				</router-link>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<!--列表循环 热门城市-->
					<div class="button-wrapper" 
						 v-for="item in hot" :key="item.id"
						 @click="handleCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<!--对象循环 按字母排列的城市-->
			<div class="area" 
				 v-for="(item,key) in cities" :key="key"
				 :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom" 
						 v-for="innerItem in item" :key="innerItem.id" 
						 @click="handleCityClick(innerItem.name)">
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>			
	</div>
</template>

<script>
import BScroll from 'better-scroll'   

export default {
	name: 'cityList',
	props: {
		cities: Object,
		hot: Array,
		letter: String
	},
	watch: {
		letter() {
			if(this.letter) {
				const element = this.$refs[this.letter][0];
				this.scroll.scrollToElement(element);        //better-scroll提供方法
			}
		} 
	},
	methods: {
		handleCityClick (city) {
			this.$store.commit('changeCity',city);
			this.$router.push('/');
		}
	},
	mounted () {
		this.scroll = new BScroll(this.$refs.wrapper);     //引用滚动插件
	}
}	
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.border-topbottom
	&:before
		border-color: #ccc;
	&:after
		border-color: #ccc;
.border-bottom
	&:before
		border-color: #ccc;
.list
	position: absolute;
	top: 1.58rem;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	.title
		line-height: .54rem;
		background: #eee;
		padding-left: .2rem;
		color: #666;
		font-size: .26rem;
	.button-list
		padding: .1rem .6rem .1rem .1rem;
		overflow: hidden;
		.button-wrapper
			width: 33.33%;
			float: left;
			.button
				text-align: center;
				border: .02rem solid #ccc;
				margin: .1rem;
				padding: .1rem 0;
				border-radius: .06rem;
				color: #666;
	.item-list
		.item
			line-height: .76rem;
			padding-left: .2rem;
		
</style>