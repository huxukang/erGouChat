import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import 'common/utils/onPushMessageAll.js'
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
// 支持app后台运行
// #ifdef APP
let main = plus.android.runtimeMainActivity();
plus.runtime.quit = function() {
    main.moveTaskToBack(false);
};
plus.nativeUI.toast = (function(str) {
	plus.runtime.quit();
    // if (str =='再次返回退出应用') {
    //     plus.runtime.quit();
    // } else {
    //     uni.showToast({
    //         title: '再次返回后台运行应用',
    //         icon: 'none'
    //     })
    // }
});
// #endif


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