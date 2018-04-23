import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import './css/style.css';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
