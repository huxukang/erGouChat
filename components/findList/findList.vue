<template>
	<scroll-view class="findList">
		<view class="big_cell" v-for="item in findList" :key="item.id">
			<view class="small_cell" v-for='ele in item.list'>
				<view class="img_cell">
					<image :src="ele.img" class="img"></image>
				</view>
				<view class="content">
					<text>{{ele.name}}</text>
					<uni-icons type="right" style='float: right;' color="#a6a6a6"></uni-icons>
				</view>
			</view >
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name:"findList",
		props:{
			findList:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.findList{
	.big_cell{
		margin-bottom: 20rpx;
		.small_cell{
			background-color: #fff;
			height: 80rpx ;
			display: flex;
			
			.img_cell{
				width: 80rpx;
				padding: 15rpx;
				padding-right: 0;
				.img{
					width: 50rpx;
					height: 50rpx;
				}
			}
			.content{
				flex:1;
				line-height: 79rpx;
				font-size: 26rpx;
				padding: 0 15rpx;
				border-bottom: 1px solid #e8e8e8;
			}
		}
	}
}
</style>