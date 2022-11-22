<template>
	<view class="mine">
		<tarBarHeader :type="''" ></tarBarHeader>
		<!-- <tarBarHeader title="微信" backgroundColor='rgb(248, 248, 248)' color='black' /> -->
		<view class="header">
			
		</view>
		<findList :findList="list"></findList>
	</view>
</template>

<script>
	import list from '../../../common/json/mine.json'
	export default {
		data() {
			return {
				list:list
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.mine{
	.header{
		padding-bottom: 25rpx;
	}
}
</style>
