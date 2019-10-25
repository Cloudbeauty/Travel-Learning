<template>
	<div>
		<detail-banner></detail-banner>
		<keep-alive>
			<detail-header></detail-header>
		</keep-alive>
		<div class="content"></div>
	</div>	
</template>

<script>
import detailBanner from './components/Banner'
import detailHeader from './components/Header'

export default {
	name: 'detail',
	components: {
		detailBanner,
		detailHeader
	}
}
</script>

<style lang="stylus" scoped>
.content{
	height: 50rem;
}	
</style>