<template>
	<scroll-view class="friendsList" scroll-y>
		<view v-for="item in friendsList" :key="item.id" @click="gotoDetail(item.id)">
			<view >
				<view :class="item.list.length === 0 ? '':'label'" >
					<a :id='item.name'>{{item.list.length > 0 ? item.name:''}}</a>
				</view>
				<view class="cell" v-for="(ele,index) in item.list">
					<view class="header">
						<image class="img" :src="ele.headerImage"></image>
					</view>
					<view class="name" :style="index+1 === item.list.length? 'border:0':''" >
						<text>{{ele.name}}</text>
					</view>
				</view>
			</view>

		</view>
	</scroll-view>
</template>

<script>
	export default {
		name: "friendsList",
		props: {
			friendsList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			};
		},

		methods: {
			gotoDetail(id) {
				console.log()
			}
		}
	}
</script>

<style lang="scss">
	.friendsList {
		// background-color: #fff;
		height: calc(100vh - 210rpx);
		.label{
			padding:15rpx 25rpx;
			font-size: 20rpx;
			color: #5f5f5f;
			font-weight: 400;
		}

		.cell {
			background-color: #fff;
			min-height: 120rpx;
			// padding: 15rpx;
			display: flex;

			.header {
				width: 110rpx;
				padding: 20rpx 15rpx;

				.img {
					width: 80rpx;
					height: 80rpx;
				}
			}

			.name {
				flex: 1;
				line-height: 120rpx;
				border-bottom: 1px solid #dbdbdb;
				font-size: 26rpx;
				font-weight: 500;
			}
		}
	}
</style>
