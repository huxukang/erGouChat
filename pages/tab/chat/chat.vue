<template>
	<view>
		<tarBarHeader 
			title="微信" 
			backgroundColor='rgb(241, 241, 241)' 
			color='black'
			:left="false"
			 />
		<view >
			<chatList :userList="userList"></chatList>
		</view>
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
