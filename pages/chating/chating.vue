<template>
	<view>
		<tarBarHeader
			:title="user.name" 
			backgroundColor='rgb(241, 241, 241)' 
			color='black'
			:rightIndex='1'
			 />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{
					id:'',
					name:''
				}
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
