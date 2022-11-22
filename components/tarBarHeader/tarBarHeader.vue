<template>
	<view class="tab" :style="{'background-color':backgroundColor,color:color}">
		<view :style="{height:statusBarHeight+'px'}"></view>
		<view class="common" >
			<!-- 通用类型1 -->
			<view class='common_1' v-if="type === '1'">
				<view class="left">
					<view v-if="left" @click="onBack">
						<uni-icons type="back" size="24" color='black'></uni-icons>
					</view>
				</view>
				<view class="title">
					{{title}}
				</view>
				<view class="right">
					<view v-if="rightIndex === 0">
						<uni-icons type="search" size="24" style='margin-right:25rpx'></uni-icons>
						<uni-icons type="plus" size="24"></uni-icons>
					</view>
					<view v-else-if="rightIndex === 1">
						<uni-icons type="more-filled" size="24"></uni-icons>
					</view>
				</view>
			</view>
			<!-- 2自定义tarBar -->
			<view v-else-if="type === '2'" :class="'common_2 ' + defaultClass" :style="{height:height + 'rpx'}">
				<slot name="left"></slot>
				<slot name="title"></slot>
				<slot name="right"></slot>
			</view>
		</view>
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
			left: {
				type: Boolean,
				default: true
			},
			rightIndex: {
				type: Number,
				default: 0,
			},
			height: {
				type: Number,
				default: 110,
			},
			defaultClass: {
				type: String,
				default: '',
			}
		},
		data() {
			return {
				statusBarHeight:0,
			};
		},
		created() {
			let statusBarObj = this.getPhoneInfo();
			this.statusBarHeight = statusBarObj.statusBarHeight;
			console.log(this.statusBarHeight)
		},
		methods: {
			onBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.tab{
		position: relative;
	}
	.common {
		//注意，建议使用相对定位，因为固定定位会脱离文档流
		
		padding: 0 15rpx;

		.common_1 {
			height: 90rpx;
			line-height: 90rpx;
			display: flex;

			.left {
				flex: 1;
			}

			.title {
				flex: 1;
				text-align: center;
				font-weight: 550;
			}

			.right {
				flex: 1;
				text-align: right;
			}
		}

		common_2 {
			height: 90rpx;
			display: flex;
		}
	}
</style>
