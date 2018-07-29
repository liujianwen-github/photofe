import Axios from 'axios'
export default {
	HOST: '//47.104.7.232:8001',
	// HOST: '//localhost:8001',
	axiosConf() {
		let d = Axios.defaults
		console.log(this)
		d.baseURL = this.HOST
		d.timeout = 10000
	},
}