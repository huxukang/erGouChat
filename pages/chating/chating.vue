<template>
	<view class="chating">
		<tarBarHeader
			:title="user.name" 
			backgroundColor='rgb(241, 241, 241)' 
			color='black'
			:rightIndex='1'
			 />
			 <scrollArea :switchBar="false" :removeHeight="120">
				 <view style="height:100%;overflow: hidden">
				 	<chating :chatData="chatData.chatDataList" :userId='chatData.userId' ></chating>
				 </view>
			 </scrollArea>
			 <view class="text-input">
				 <input class="input" cursor-spacing='5px'></input>
			 </view>
	</view>
</template>

<script>
	import chatData from '../../common/json/mychat.json'
	export default {
		data() {
			return {
				user:{
					id:'',
					name:''
				},
				chatData:chatData,
				scrollHeight:'calc(100% - 80rpx)',
			}
		},
	
		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
			console.log(item);
			this.user = item
		},
		methods: {
			
		}
	}
</script>

<style lang='scss'>
	.text-input{
		height: 120rpx;
		text-align: center;
		box-sizing: border-box;
		padding:20rpx 20rpx;
		background-color: #f7f7f7;
		.input{
		
			display: inline-block;
			border-radius: 15rpx;
			background-color: #fff;
			width: 500rpx;
			height: 80rpx;
			text-align: left;
			padding: 0 25rpx;
		}
	}
</style>
