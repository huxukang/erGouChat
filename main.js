import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.getPhoneInfo = function(){
	const phoneInfo = uni.getSystemInfoSync();// 获取手机系统信息
	let statusBarObj = {
		statusBarHeight: 0/* 状态栏默认高度 */
		//如果自己有需要其他属性的话，可以往这里添加
	}
	// 设置状态栏高度（H5顶部无状态栏小程序有状态栏需要撑起高度）
	statusBarObj.statusBarHeight = phoneInfo.statusBarHeight;
	return statusBarObj;
}
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif