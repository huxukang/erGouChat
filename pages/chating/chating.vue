<template>
	<view class="chating">
		<tarBarHeader :title="user.name" backgroundColor='rgb(241, 241, 241)' color='black' :rightIndex='1' />
		<scrollArea :switchBar="false" :removeHeight="removeHeight">
			<view style="height:100%;overflow: hidden">
				<chating :chatData="chatData.chatDataList" :userId='chatData.userId'></chating>
			</view>
		</scrollArea>
		<view class="text-input" ref="text-input" id="text-input">
			<textarea class="input" auto-height @keyboardheightchange='inputFoucus' :adjust-position='false'
				@input='handleInputValue'></textarea>
		</view>
	</view>
</template>

<script>
	import chatData from '../../common/json/mychat.json'
	export default {
		data() {
			return {
				user: {
					id: '',
					name: ''
				},
				chatData: chatData,
				removeHeight: '120rpx',
				textHeight: '120rpx', // 输入框的高度；
				KeyboardHeight: '0px', // 键盘的高度；
			}
		},

		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
			console.log(item);
			this.user = item
		},
		created() {
			uni.getSystemInfo({
				success(res) {
					console.log(res);
				}
			})
		},
		watch:{
			KeyboardHeight:{
				handler:function(val){
					this.handleRemoveHeight();
				},
				immediate:true,
			},
			textHeight:{
				handler:function(val){
					this.handleRemoveHeight();
				},
				immediate:true,
			}
		},
		methods: {
			inputFoucus(e) {
				let height = '0';
				if (e.detail.height) height = e.detail.height;	
				this.KeyboardHeight = height + 'px';
			},
			handleInputValue(value) {
				//	 一个是保存现在的消息，二就是计算输入框的高度存起来；
				// #ifdef APP-PLUS
				const query = uni.createSelectorQuery().in(this);
				query.select('#text-input').boundingClientRect(data => {
					// console.log(data)
					this.textHeight = data.height + 'px';
				}).exec();
				// #endif
				
				// #ifndef APP-PLUS
				this.textHeight = this.$refs['text-input'].$el.offsetHeight + 'px';
				console.log(this.textHeight);
				// #endif

			},
			handleRemoveHeight(){
				this.removeHeight = `${this.KeyboardHeight} - ${this.textHeight}`
			}
		}
	}
</script>

<style lang='scss'>
	.text-input {
		min-height: 120rpx;
		text-align: center;
		box-sizing: border-box;
		padding: 20rpx 20rpx;
		background-color: #f7f7f7;

		.input {

			display: inline-block;
			border-radius: 15rpx;
			padding: 20rpx;
			font-size: 35rpx;
			line-height: 40rpx;
			background-color: #fff;
			width: 500rpx;
			/* max-height: 240rpx;
			min-height: 40rpx; */
			text-align: left;
			padding: 20rpx 25rpx;
		}
	}
</style>
