<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list 
			:cities="cities" 
			:hot="hotcities" 
			:letter="letter">
		</city-list>
		<city-alphabet 
			:cities="cities" 
			@change="handleLetterChange">
		</city-alphabet>
	</div>
</template>

<script>
import cityHeader from './components/Header'
import citySearch from './components/Search'
import cityList from './components/List'
import cityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
	name: 'city',
	components: {
		cityHeader,
		citySearch,
		cityList,
		cityAlphabet
	},
	data () {
		return {
			cities: {},
			hotcities: [],
			letter: '' 
		}
	},
	methods: {
		getCityInfo () {
			axios.get('/api/city')
			.then(this.handleGetCityInfoSucc)
		},	
		handleGetCityInfoSucc(res) {
			res = res.data;
			if(res.data && res.ret) {
				const data = res.data;
				this.cities = data.cities;
				this.hotcities = data.hotCities;
			}
		},
		handleLetterChange(letter) {
			this.letter = letter;
		}
	},
	mounted () {
		this.getCityInfo()
	}
}
</script>

<style lang="stylus" scoped>
	
</style>