import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import './css/style.css';
const store = configureStore();
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <Route path='/' component={Home} />
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();