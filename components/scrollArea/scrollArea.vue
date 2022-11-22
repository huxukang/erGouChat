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
			tarbar: {
				type: Boolean,
				default: true
			},
			switchBar: {
				type: Boolean,
				default: false
			}
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
						height = `calc(100vh - ${this.statusBarHeight || 60}px - 90rpx)`:
						height =`calc(100vh - ${this.statusBarHeight}px - 90rpx)`;
				} else {
					// height = `calc(100vh - ${this.statusBarHeight}px)`;
					this.switchBar ?
						height = `calc(100vh - ${this.statusBarHeight || 60}px)`:
						height = `calc(100vh - ${this.statusBarHeight}px)`
				}
				return height;
			}
		}
	}
</script>

<style>

</style>
