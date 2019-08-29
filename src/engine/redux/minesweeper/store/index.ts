// import {createStore, applyMiddleware} from 'redux';
// import {createEpicMiddleware} from 'redux-observable';
// import {RootAction, RootState, Services} from 'typesafe-actions';
import {configureStore} from "redux-starter-kit";

// import {composeEnhancers} from './utils';
import {rootReducer} from './root-reducer';
// import rootEpic from './root-epic';
// import services from '../services';

// export const epicMiddleware = createEpicMiddleware<RootAction,
//     RootAction,
//     RootState,
//     Services>({
//     dependencies: services,
// });

// configure middlewares
// const middlewares = [epicMiddleware];
// compose enhancers
// const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
// const initialState = {};

// epicMiddleware.run(rootEpic);


// create store
const store = configureStore({reducer: rootReducer,});

// const store = createStore(rootReducer, initialState, enhancer);


// export store singleton instance
export default store;
