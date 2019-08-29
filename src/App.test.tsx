import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {configureStore} from "redux-starter-kit";
import {rootReducer} from "./engine/redux/minesweeper/reducers/rootReducer";

it('renders without crashing', () => {
    const div = document.createElement('div');

    const store = configureStore({reducer: rootReducer,});

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
