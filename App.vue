<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang='scss'>
	/*每个页面公共css */
	@import './static/scss/common.scss'
	/* body{
		background-color: rgb(241, 241, 241);
	}
	uni-page-body,page{
		// background-color:rgb(226, 226, 226);
		height: 100%;
	}
	#app{
		height: 100%;
	} */
</style>
