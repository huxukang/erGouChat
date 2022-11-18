<template>
	<view>
		<tarBarHeader title="通讯录" backgroundColor='rgb(241, 241, 241)' color='black' :left="false"/>
		<view v-if="friendsList.length > 0">
			<friendsList :friendsList="friendsList"></friendsList>
		</view>
		<view v-else>
			暂无好友
		</view>
		<showSelect :showList="friendsList" position='right'></showSelect>
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
			
		}
	}
</script>

<style>

</style>
