import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from './reducers/root.reducer';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose( applyMiddleware(thunk), ...enhancerList);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

module.exports = {
  initStore
};