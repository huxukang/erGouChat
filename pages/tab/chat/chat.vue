<template>
	<view>
		<tarBarHeader 
			title="微信" 
			backgroundColor='rgb(241, 241, 241)' 
			color='black'
			:left="false"
			 />
		<scrollArea :switchBar="true">
			<view style="height: 100%;">
				<chatList :userList="userList"></chatList>
			</view>
		</scrollArea>
	</view>
</template>

<script>
	import userList from '../../../common/json/userList.json'
	export default {
		data() {
			return {
				userList:userList
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
