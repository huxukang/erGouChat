<template>
	<view >
		<tarBarHeader title="发现" backgroundColor='rgb(241, 241, 241)' color='black' :left="false" />
		<findList :findList="list"></findList>
	</view>
</template>

<script>
	import list from '../../../common/json/find.json'
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

<style>

</style>
