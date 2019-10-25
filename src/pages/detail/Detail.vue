<template>
	<div>
		<detail-banner></detail-banner>
		<keep-alive>
			<detail-header></detail-header>
		</keep-alive>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>	
</template>

<script>
import detailBanner from './components/Banner'
import detailHeader from './components/Header'
import detailList from './components/List'

export default {
	name: 'detail',
	components: {
		detailBanner,
		detailHeader,
		detailList
	},
	data () {
		return {
			list: [{
				title: '成人票',
				children: [{
					title: '成人三馆联票',
					children: [{
						title: '成人三馆联票——某一连锁店销售'
					}]
				},{
					title: '成人五馆联票'
				}]
			},{
				title: '学生票'
			},{
				title: '儿童票'
			},{
				title: '特惠票'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
.content{
	height: 50rem;
}	
</style>