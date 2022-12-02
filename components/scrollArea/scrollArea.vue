<template>
	<view>
		<view :style="{height: scrollHeightcell}">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "scrollArea",
		props: {
			scrollHeight: {
				type: Number,
				default: 0
			},
			removeHeight:{
				type:String,
				default:'0rpx'
			},
			tarbar: {
				type: Boolean,
				default: true
			},
			switchBar: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				statusBarHeight: 0,
			};
		},
		created() {
			let statusBarObj = this.getPhoneInfo();
			this.statusBarHeight = statusBarObj.statusBarHeight;
		},
		computed: {
			scrollHeightcell() {
				if (this.scrollHeight != 0) {
					return this.scrollHeight + 'rpx';
				}
				let height;
				if (this.tarbar) {
					// height = `calc(100vh - ${this.statusBarHeight}px - 90rpx)`
					this.switchBar ?
						height = `calc(100vh - ${this.statusBarHeight || 60}px - 90rpx - ${this.removeHeight|| 0})`:
						height =`calc(100vh - ${this.statusBarHeight}px - 90rpx - ${this.removeHeight || 0})`;
				} else {
					// height = `calc(100vh - ${this.statusBarHeight}px)`;
					this.switchBar ?
						height = `calc(100vh - ${this.statusBarHeight || 60}px) - ${this.removeHeight || 0})`:
						height = `calc(100vh - ${this.statusBarHeight}px) - ${this.removeHeight || 0})`
				}
				return height;
			}
		}
	}
</script>

<style>

</style>
