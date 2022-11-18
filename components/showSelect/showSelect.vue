<template>
	<view class="showSelect" :style="position? position + ':10rpx':'right:10rpx'">
		<view class="cell_name" v-for="item in showList" :key="item.name" @click="emitName(item.name)">{{item.name}}</view>
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
				
				let dom = document.getElementById(name);
				if(dom){
					dom.scrollIntoView()
				}
				
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
			font-size: 14rpx;
			color: #6d6d6d;
			width: 20rpx;
			text-align: center;
		}
	}
</style>
