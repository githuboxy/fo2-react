import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';


console.log('Hey guys and ladies!!')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);