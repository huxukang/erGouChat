<template>
	<view class="showSelect" :style="position? position + ':20rpx':'right:20rpx'">
		<view class="cell_name" v-for="item in showList" :key="item.name">
			<uni-tooltip-mine :content="item.name" placement="right" :duration="0" @showText='showText'>
				<text>{{item.name}}</text>
			</uni-tooltip-mine>	
		</view>
	</view>
</template>

<script>
	export default {
		name: "showSelect",
		props: {
			showList: {
				type: Array,
				default: []
			},
			position: {
				type: String,
				default: 'left'
			}
		},
		data() {
			return {

			};
		},
		methods:{
			emitName(name){
				try{
					// dom
					let dom = document.getElementById(name);
					if(dom){
						console.log(dom);
						dom.scrollIntoView();
					}
				}catch(err){
					// app
					this.$emit('selectAZ',name)
					// const dom = uni.createSelectorQuery().in(this);
					// console.log(dom)
					// const key = '#' + name
					// dom.select(key).boundingClientRect(data=>{
					// 	console.log(data)
					// });
				}
				
				
			},
			showText(name){
				this.emitName(name);
			}
		}
	}
</script>

<style lang="scss">
	.showSelect {
		position: fixed;
		right: 15rpx;
		display: inline-block;
		transform: translate(0,-50%);
		top:50%;
		
		.cell_name{
			font-size: 24rpx;
			color: #6d6d6d;
			// min-width: 20rpx;
			text-align: center;
		}
	}
</style>
