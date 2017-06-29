
import * as homeList from './home/list'
import * as city from './city/city'
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

var homeListData = ()=>setpromise(homeList.data)
var cityData = () => setpromise(city.searchdata)
export {homeListData,cityData}