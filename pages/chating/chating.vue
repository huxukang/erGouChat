<template>
	<view class="chating">
		<tarBarHeader :title="user.name" backgroundColor='rgb(241, 241, 241)' color='black' :rightIndex='1' />
		<scrollArea :switchBar="false" :removeHeight="removeHeight">
			<view style="height:100%;overflow: hidden">
				<chating :chatData="chatData.chatDataList" :userId='chatData.userId' ref="chat"></chating>
			</view>
		</scrollArea>
		<view class="text-input" ref="text-input" id="text-input">
			<view class="view_left">
				
				<image class="img" src="../../static/icon/yuyin.png"></image>
			</view>
			<view class="view_center">
				<textarea class="input" v-model="textValue" auto-height @keyboardheightchange='inputFoucus' :adjust-position='false'
					@input='handleInputValue'></textarea>
			</view>
			
			<view class="view_right" :style="{width:textValue.trim()===''? '160rpx':'200rpx'}">
				<view class="right_cell" >
					<image class="img"  src="../../static/icon/smile.png"></image>
					<uni-icons v-if="textValue.trim()===''" type="plus" size="42"></uni-icons>
					<button  @click="sendMessage" class="send" v-else>发送</button>
				</view>
			</view>
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
				time:null,
				textValue:'',
			
			}
		},

		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
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
			},
			removeHeight:{
				handler:function(val){
					// this.handleRemoveHeight();
					// this.$refs.chat.;
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
				// 优化下，节流
				if(this.time){
					
					clearTimeout(this.time);
				}
				this.time = setTimeout(()=>{
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
				},100)
				
			},
			handleRemoveHeight(){
				this.removeHeight = `${this.KeyboardHeight} - ${this.textHeight}`;
				if(this.$refs.chat){
					this.$refs.chat.scrollToBottom();
				}
				
			},
			// 发送信息
			sendMessage(){
				// 模拟一下
				this.autoFocus = true;
				// setTimeout(()=>{
				// 	this.autoFocus = false;
				// },100);
				let index = this.chatData.chatDataList.length;
				this.chatData.chatDataList.push(
					{
						"id":index,
						"userId":1,
						"content":this.textValue,
						"time":"2022-11-22 18:48"
					},
					{
						"id":index + 1,
						"userId":0,
						"content":'对不起，人工智能无法理解',
						"time":"2022-11-22 18:48"
					},
				)
				this.textValue = '';
				setTimeout(()=>{
					// 到最低布
					this.$refs.chat.scrollToBottom();
				},500)
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
		display: flex;
		.input {

			display: inline-block;
			border-radius: 15rpx;
			/* padding: 20rpx; */
			font-size: 32rpx;
			line-height: 40rpx;
			background-color: #fff;
			/* width: 410rpx; */
			width: calc(100% - 50rpx);
			/* max-height: 240rpx;
			min-height: 40rpx; */
			text-align: left;
			padding: 20rpx 25rpx;
		}
		.view_left{
			/* margin-top:20rpx; */
			position: relative;
			width:80rpx;
			
			
			.img{
				position: absolute;
				bottom: 15rpx;
				left:5rpx;
				width: 60rpx;
				height: 60rpx;
				
			}
		}
		.view_center{
			/* padding-top:10rpx; */
			width:380rpx;
			flex:1;
		}
		
		.view_right{
			
			position: relative;
			
			.right_cell{
				position: absolute;
				bottom: 2rpx;
				left:0;
				/* display: inline-block; */
				/* min-width: 160rpx; */
				.send{
					display: inline-block;
					width: 100rpx;
					height: 60rpx;
					font-size: 33rpx;
					padding: 5rpx 10rpx;
					margin-left: 10rpx;
					line-height: 50rpx;
					background-color: #07C160;
					color: #fff;
					
				}
			}
			
			.img{
				/* display: inline-block; */
				width: 60rpx;
				height: 60rpx;
				margin-left: 15rpx;
			}
		}
	}
</style>
