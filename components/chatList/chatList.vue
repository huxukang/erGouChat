<template>
	<scroll-view scroll-y class="chat">
		<view class="cell" v-for="item in userList" :key="item.id" @click="startChat(item)">
			<view class="cell_image">
				<image class="c_cell_header" :src="(item.headerImage)"></image>
			</view>
			<view class="cell_content">
				<view class="main">
					<view class="name">{{item.name}}</view>
					<view class="message">{{item.message}}</view>
				</view>
				<text class="time">{{item.time}}</text>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name: "chatList",
		props: {
			userList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			};
		},
		methods: {
			startChat(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/chating/chating?item=${encodeURIComponent(JSON.stringify(item))}`,

				})
			}
		}
	}
</script>

<style lang="scss">
	.chat {
		background-color: #fff;
		height: 100%;
	
	.cell {
			min-height: 120rpx;
			display: flex;

			// padding:0 15rpx;
			.cell_image {
				padding: 20rpx 15rpx;
				width: 110rpx;
				overflow: hidden;

				.c_cell_header {
					height: 80rpx;
					width: 80rpx;
				}
			}

			.cell_content {
				border-bottom: 0.5px solid #eaeaea;
				flex: 1;
				padding: 10rpx;

				.main {
					display: inline-block;

					width: 400rpx;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;

					font-size: 32rpx;
					font-weight: 600;
					color: #000;

					.name {
						margin-top: 10rpx;
					}

					.message {
						color: #bcbcbc;
						font-size: 24rpx;
						margin-top: 10rpx;
						font-weight: 500;
					}
				}

				.time {
					float: right;
					color: #bcbcbc;
					font-size: 22rpx;
				}
			}
		}
	}
</style>
