
import * as homeList from './home/list'
import * as cityData from './city/city'
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

var homeListData = ()=>setpromise(homeList.data)
var cityData = () => setpromise(cityData.searchdata)
export {homeListData,cityData}