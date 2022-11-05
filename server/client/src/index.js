import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import store from "./store";
import App from './components/App';

const container = document.getElementById('root');
console.log(process.env)
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <App/>
    </Provider>);

/*ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);*/
