<template>
	<view class="mine">
		<tarBarHeader :type="''" backgroundColor='#fff'  ></tarBarHeader>
		<!-- <tarBarHeader title="微信" backgroundColor='rgb(248, 248, 248)' color='black' /> -->
		<headers></headers>
		<findList :findList="list"></findList>
	</view>
</template>

<script>
	import list from '../../../common/json/mine.json'
	import headers from './components/header.vue'
	export default {
		data() {
			return {
				list:list
			}
		},
		components:{
			headers,
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.mine{
	// background-color: #f0f0f0;	
	height: calc(100vh - 60px + 60rpx);
	
}
</style>
