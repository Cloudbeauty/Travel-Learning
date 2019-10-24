<template>
	<!--搜索框-->
	<div>
		<div class="search">
		<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
	</div>
	<!--数据显示-->
	<div class="search-content" ref="search" v-show="keyword">
		<ul>
			<li class="search-item border-bottom" 
				v-for="item in list" :key="item.id"
				@click="handleCityClick(item.name)">
				{{item.name}}
			</li>
			<li class="search-item border-bottom" v-show="hasNoDate">
				没有找到匹配数据
			</li>
		</ul>
	</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
	name: 'citySearch',
	props: {
		cities: Object
	},
	data () {
		return {
			keyword: '',
			list: [],
			timer: null
		}
	},
	computed: {
		hasNoDate () {
			return !this.list.length;
		}
	},
	methods: {
		//点击改变城市并跳转首页
		handleCityClick (city) {
			this.$store.commit('changeCity',city);
			this.$router.push('/');
		}
	},
	watch: {
		//搜索功能
		keyword () {
			if(this.timer) {
				clearTimeout(this.timer);
			}
			if(!this.keyword) {
				return this.list = [];
			}
			this.timer = setTimeout(() => {
				const result = [];
				for ( let i in this.cities) {
					this.cities[i].forEach((value) => {
						if(value.spell.indexOf(this.keyword) > -1 ||
							value.name.indexOf(this.keyword) > -1)
							result.push(value);
					})
				}
				this.list = result;
			},100)
		}
	},
	mounted () {
		//引动better-scroll滚动插件
		this.scroll = new Bscroll(this.$refs.search);
	}
}	
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

	.search
		height: .72rem;
		padding: 0 .1rem;
		background: $bgColor;
		line-height: .72rem;
		.search-input
			height: .62rem;
			line-height: .62rem;
			width: 100%;
			text-align: center;
			border-radius: .86rem;
			color: #666;
			padding: 0 .1rem;
			box-sizing: border-box;
	.search-content
		overflow: hidden;
		z-index: 1;
		position: absolute;
		top: 1.58rem;
		left: 0;
		bottom: 0;
		right: 0;
		background: #eee;
		.search-item
			line-height: .62rem;
			color: #666;
			padding-left: .2rem;
			background: #fff;
		
</style>