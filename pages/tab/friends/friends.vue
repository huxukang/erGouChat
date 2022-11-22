<template>
	<view>
		<tarBarHeader title="通讯录" backgroundColor='rgb(241, 241, 241)' color='black' :left="false"/>
		<scrollArea :switchBar="true">
			<view v-if="friendsList.length > 0" style="height: 100%;">
				<friendsList :friendsList="friendsList" ref="scrollView"></friendsList>
			</view>
			<view v-else>
				暂无好友
			</view>
		</scrollArea>
		<showSelect :showList="friendsList" position='right' @selectAZ='selectAZ'></showSelect>
	</view>
</template>

<script>
	import friendsList from '../../../common/json/friends.json';
	import {pinyinsetData} from '../../../common/utils/pinyin.js';
	export default {
		data() {
			return {
				friendsList:[],
			}
		},
		created() {
			this.friendsList = pinyinsetData(friendsList);
		},
		methods: {
			selectAZ(name){
				this.$refs.scrollView.scrollID(name)
				// console.log(this.$refs.scrollView,name);
			}
		}
	}
</script>

<style>

</style>
