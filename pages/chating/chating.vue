<template>
	<view>
		<tarBarHeader
			:title="user.name" 
			backgroundColor='rgb(241, 241, 241)' 
			color='black'
			:rightIndex='1'
			 />
			 <scrollArea :switchBar="false">
				 <view style="height: 100%;">
				 	<chating :chatData="chatData.chatDataList" :userId='chatData.userId'></chating>
				 </view>
			 </scrollArea>
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

<style>

</style>
