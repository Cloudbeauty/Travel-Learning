<template>
	<!--排列字母 prevent阻止默认行为-->
	<ul class="list">
		<li class="item" 
			v-for="item in letters" 
			:key="item"
			@touchstart.prevent="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			@click="handleClick"
			:ref="item">
			{{item}}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'cityAlphabet',
	props: {
		cities: Object
	},
	computed: {
		letters () {
			const letters = [];
			for( let i in this.cities) {
				letters.push(i);
			};
			return letters;
		}
	},
	data () {
		return {
			touchStatus: false,
			startY: 0,
			timer: null
		}
	},
	updated () {
		this.startY = this.$refs['A'][0].offsetTop
	},
	methods: {
		//点击改变显示城市
		handleClick (e) {
			this.$emit('change',e.target.innerText)
		},
		//触摸改变点击城市
		handleTouchStart () {
			this.touchStatus = true;
		},
		handleTouchMove (e) {
			if(this.touchStatus) {
				if(this.timer) {
					clearTimeout(this.timer);
				}
				//函数截留 节约函数执行频率
				this.timer = setTimeout(() => {
					const touchY = e.touches[0].clientY - 79;
					const index = Math.floor((touchY - this.startY) / 20);
					if(index >= 0 && index < this.letters.length) {
						this.$emit('change',this.letters[index]);
					}	
				},16)
			}
		},
		handleTouchEnd () {
			this.touchStatus = false;
		}
	}
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