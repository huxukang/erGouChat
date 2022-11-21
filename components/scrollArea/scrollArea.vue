<template>
	<view>
		<view :style="{height:statusBarHeight+'px'}"></view>
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
					this.switchBar ?
						height = `calc(100vh - ${this.statusBarHeight}px - 90rpx - 60px)`:
						height =`calc(100vh - ${this.statusBarHeight}px - 90rpx)`;
				} else {
					this.switchBar ?
						height = `calc(100vh - ${this.statusBarHeight}px - 60px)`:
						height = `calc(100vh - ${this.statusBarHeight}px)`
				}
				return height;
			}
		}
	}
</script>

<style>

</style>
