<template>
	<view class="cell-tooltip" ref="content" @touchstart="showMessage"  @touchend="hideMessage">
		<!-- 提示的内容 -->
		<view class="tooltip" v-if="messageShow">
			<view class="msg">
				<template v-if='$slots.content'>
					<slot ></slot>
				</template>
				<template v-else>
					<view>{{content}}</view>
				</template>
			</view>
		</view>
		<!-- 默认slot  -->
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "uni-tooltip-mine",
		props: {
			// 内容
			content: {
				type: String,
				default: ''
			},
			// 位置
			placement: {
				type: String,
				default: 'left'
			},
			// 取消	接触存在的时间
			duration: {
				type: Number,
				default: 0
			},
			// 唯一标识
			onlyOne:{
				default: ''
			}
		},

		data() {
			return {
				messageShow: false,
				showTime: null,
			};
		},
		computed: {
			// 位置限定只能是上下左右；
			myPlacement() {
				const place = ['left', 'right', 'top', 'bottom'];
				let myPlacements;
				place.includes(this.placement) ? myPlacements = this.placement : myPlacements = 'left';
				return myPlacements;
			}
		},
		methods: {
			showMessage() {
				if (this.showTime) {
					clearTimeout(this.showTime);
					this.showTime = null;
				}
				this.messageShow = true;
				this.$emit('showText',this.onlyOne || this.content);
			},
			hideMessage() {
				let time = Number(this.duration) || 0;
				this.showTime = setTimeout(() => {
					this.messageShow = false;
					this.showTime = null;
				}, this.duration)
			},
			
		}
	}
</script>

<style lang="scss">
	.cell-tooltip{
		position: relative;

		.tooltip{
			position: absolute;
			left:-110rpx;
			top:-30rpx;
			.msg{
				min-width: 100rpx;
				min-height: 100rpx;
				border-radius: 50rpx;
				background-color: #e1e1e1;
				text-align: center;
				display: inline-block;
				line-height: 100rpx;
				// left:-430rpx
			}
		}
	}
	
</style>
