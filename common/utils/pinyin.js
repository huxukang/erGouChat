import pinyin from "js-pinyin";
let zhimu = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
	'V', 'W', 'X', 'Y', 'Z'
]
export function pinyinsetData(arr = []) {
	const lastData = [];
	zhimu.forEach(ele => {
		lastData.push({
			name: ele,
			list: [],
		})
	})
	arr.forEach(ele => {
		// 获取目标数组每一项的 name 值
		let name = ele.name
		// 获取每一个name值第一个字的大写首字母（传入的 name 是中文时默认得到大写字母，name 是英文时按照原字符串输出，可能是小写）
		let initial = pinyin.getCamelChars(name).substring(0, 1).toUpperCase()
		// 给数组每一项增加名为 initial 的 key，值就是第一个字的大写首字母
		// console.log(initial);
		// if(initial)
		let obj = lastData.find(el=> el.name === initial);
		if(obj){
			obj.list.push(ele)
		}
	})
	console.log(lastData)
	return lastData
}
