<template>
	<div class="icons">
		<swiper :options="swiperOption">
	    <!-- slides -->
		    <swiper-slide v-for="(page,index) in pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl">
						<!--不要忘记绑定地址属性-->
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
		    </swiper-slide>  
		 </swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	data () {
		return {
			swiperOption: {},
			iconLists: [{
				id: '001',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				desc: '景点门票'
			},{
				id: '002',
				imgUrl: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
				desc: '成都海昌'
			},{
				id: '003',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
				desc: '情迷九寨'
			},{
				id: '004',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
				desc: '川剧变脸'
			},{
				id: '005',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
				desc: '一日游'
			},{
				id: '006',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
				desc: '国色天乡'
			},{
				id: '007',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
				desc: '成都欢乐谷'
			},{
				id: '008',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
				desc: '熊猫基地'
			},{
				id: '009',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/02bbb71bd1f629c2348d0c97ef82c129.png',
				desc: '青城山'
			},{
				id: '010',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/02bbb71bd1f629c2348d0c97ef82c129.png',
				desc: '都江堰'
			}]
		}
	},
	computed: {
		pages () {                 //设置页码展示数据
			const pages = []
			this.iconLists.forEach((item,index) => {
				const page = Math.floor(index / 8);
				if (!pages[page]){
					pages[page] = [];
				}
				pages[page].push(item)
			})
			return pages;
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.icons >>> .swiper-container
	width: 100%;
	height: 0;
	padding-bottom: 50%;         //宽高2：1
	//overflow: hidden;    swiper-container自带

.icon                        //小图标
	width: 25%;
	float: left;
	padding-bottom: 25%;     //宽高1：1
	overflow: hidden;
	height: 0;
	position: relative;
	.icon-img                //图标图片
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: .44rem;  //22px 预留文字位置
		box-sizing: broder-box;
		padding: 1px;
		.icon-img-content
			display: block;     //图片居中
			margin: 0 auto;
			height: 100%;
	.icon-desc                 //图标文字
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: .44rem;
		line-height: .44rem;
		text-align: center;
		color: $darkTextColor;
		ellipsis();
		
</style>