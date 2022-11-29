<template>
	<scroll-view scroll-y  class="chating"  scroll-top="100000000">
		<view v-for="item in chatData" :key="item.id" class="chat-cell" >
			<view v-if="item.userId===0" class="other">
				<image src="../../static/headerImg/02.jpg" class="img"></image>
				<view class="text">
					<view class="text-cell">{{item.content}}</view>
				</view>
			</view>
			<view v-else class="my">
				<view class="text">
					<view class="text-cell">{{item.content}}</view>
				</view>
				<image src="../../static/headerImg/09.jpg" class="img"></image>
			</view>
		</view>
		
	</scroll-view>
</template>

<script>

	export default {
		name:"chating",
		props:{
			chatData:{
				type:Array,
				default:()=>{
					return []
				}
			},
			userId:{
				type:Number,
				default:''
			},
			
		},
		
		created() {
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.chating{
	height: 100%;
	padding:0 30rpx;
	.chat-cell{
		// min-height: 80rpx;
		// line-height: 80rpx;
		margin-bottom: 30rpx;
		.img{
			width: 70rpx;
			height: 70rpx;
		
		}
		.text{
			
		}
		.other{
			text-align: left;
			display: flex;
			.text{
				padding: 0 25rpx;
				width: 500rpx;
			
				.text-cell{
					background-color: #fff;
					display: inline-block;
					padding: 15rpx 20rpx;
					border-radius: 8rpx;
				}
			}
			
		}
		.my{
			display: flex;
			padding-left: 80rpx;
			.text{
				padding: 0 25rpx ;
				text-align:right;
				width: 500rpx;
				.text-cell{
					background-color: #63ff20;
					display: inline-block;
					padding: 15rpx 20rpx;
					text-align: left;
					border-radius: 8rpx;
				}
			}
		}
	}
	
}
</style>