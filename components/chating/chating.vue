<template>
	<scroll-view scroll-y  class="chating" >
		<view v-for="item in chatData" :key="item.id" class="chat-cell">
			<view v-if="item.userId===0" class="other">
				<image src="../../static/headerImg/02.jpg" class="img"></image>
				{{item.content}}
			</view>
			<view v-else class="my">
				{{item.content + '2222'}}
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
			}
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
		min-height: 320rpx;
		.img{
			width: 80rpx;
			height: 80rpx;
		}
	}
}
</style>