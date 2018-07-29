import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios'
import config from './config'
config.axiosConf()
window.$http = Axios

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
