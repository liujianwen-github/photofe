import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios'
window.$http = Axios
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
