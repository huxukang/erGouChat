let handleMessage = (res)=>{
	console.log(res)
};
uni.onPushMessage(handleMessage);