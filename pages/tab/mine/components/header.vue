<template>
	<view class="header">
		<view class="img_cell">
			<image class="img" src="../../../../static/headerImg/05.jpg"></image>
		</view>
		<view class="content_cell">
			<view class="title">二狗子</view>
			<view class="num">
				<text>微信号：   huxukang86</text>
				<view class="ti">
					<image class="ti-img" src="../../../../static/tarbar/bar.png"></image>
					<uni-icons type="right"  color="#878787"></uni-icons>
				</view>
			</view>
			<!-- <view class="status">二狗子</view> -->
		</view>
	</view>
</template>

<script>
	export default({
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	})
</script>

<style lang="scss">
	.header{
		padding: 30rpx;
		padding-top: 120rpx;
		display: flex;
		background-color: #fff;
		.img_cell{
			.img{
				height: 150rpx;
				width: 150rpx;
				border-radius: 10rpx;
			}
		}
		.content_cell{
			flex: 1;
			padding-left:30rpx;
			.title{
				font-size: 40rpx;
				font-weight: 700;
			}
			.num{
				padding-top: 50rpx;
				font-size: 30rpx;
				color: #878787;
				.ti{
					float: right;
					// line-height: 32rpx;
					.ti-img{
						width: 27rpx;
						height: 27rpx;
						margin-right: 35rpx;
						// padding-top: 4rpx;
						// vertical-align: middle;
					}
				}
			}
		}
	}
</style>