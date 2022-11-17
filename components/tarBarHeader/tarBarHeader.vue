<template>
	<view class="common" 
	:style="{'background-color':backgroundColor,color:color}"
	>
		<!-- 自己自定义类型1 -->
		<view class='common_1' v-if="type === '1'">
			<view class="left">
				<view v-if="left">
					<uni-icons type="arrow-left" size="24" color='black'></uni-icons>
				</view>
			</view>
			<view class="title">
				{{title}}
			</view>
			<view class="right">
				<uni-icons type="search" size="24" style='margin-right:25rpx'></uni-icons>
				<uni-icons type="plus" size="24"></uni-icons>
			</view>
		</view>
		<!-- 2 -->
		<view v-else-if="type === '2'">2</view>
	</view>
</template>

<script>
	export default {
		name: "tarBarHeader",
		props: {
			type: {
				type: String,
				default: '1',
			},
			title: {
				type: String,
				default: '二狗',
			},
			backgroundColor: {
				type: String,
				default: '#fff',
			},
			color: {
				type: String,
				default: 'black',
			},
			left:{
				type:Boolean,
				default:true
			}
		},
		mounted(){
			console.log(this.backgroundColor)
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.common {
		position: relative; //注意，建议使用相对定位，因为固定定位会脱离文档流
		height: 90rpx;
		padding: 0 15rpx;

		.common_1 {
			line-height: 90rpx;
			display: flex;

			.left {
				flex: 1;
			}

			.title {
				flex: 1;
				text-align: center;
				font-weight: 600;
			}

			.right {
				flex: 1;
				text-align: right;
			}
		}
	}
</style>
