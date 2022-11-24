<template>
	<scroll-view class="friendsList" scroll-y :scroll-into-view="viewId">
		<view v-for="item in friendsList" :key="item.id" @click="gotoDetail(item.id)" :id="'app_' + item.name" >
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
				viewId:'app_A'
			};
		},

		methods: {
			gotoDetail(id) {
				console.log()
			},
			scrollID(name){
				this.viewId = 'app_' + name;
				console.log(this.viewId)
			}
		}
	}
</script>

<style lang="scss">
	.friendsList {
		// background-color: #fff;
		height: 100%;
		.label{
			padding:15rpx 35rpx;
			font-size: 28rpx;
			color: #5f5f5f;
			font-weight: 400;
			background-color: #F8F8F8;
		}

		.cell {
			background-color: #fff;
			min-height: 120rpx;
			// padding: 15rpx;
			display: flex;

			.header {
				// width: 110rpx;
				padding: 20rpx 25rpx  20rpx 30rpx;

				.img {
					width: 80rpx;
					height: 80rpx;
				}
			}

			.name {
				flex: 1;
				line-height: 120rpx;
				border-bottom: 1px solid #efefef;
				font-size: 34rpx;
				font-weight: 600;
			}
		}
	}
</style>
