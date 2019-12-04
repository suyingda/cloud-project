// import { createStore, merge } from 'e-react-redux';
// import {connect,combineReducers} from '../e-react-redux'
import {createStore, combineReducers} from 'e-react-redux'


/***收集所有Module 文件 reudcer object */
const files = require.context('./', false, /^((?!easy|index|Index|redux).)*\.js$/);
let middleware_r = {};
files.keys().forEach(element => {
    let rq = files(element).default;
    let rq_n = rq.name;
    try {
        if (middleware_r[rq_n]) throw new Error(`exist same name -----> ${rq_n} >>>${element}`);
        middleware_r[rq_n] = rq.reducer;
        // Object.assign(middleware_r, rq.reducer)
    } catch (Error) {
        throw Error
    }
});
function utils(rootReducer, initialState = {}) {
    const store = createStore(rootReducer, initialState);
    if (module.hot) {  console.log(module,'module');
        module.hot.accept('./ModuleHome.js'), () => {

        };
    }
    return store;
};
utils(combineReducers(middleware_r));
const reducer = combineReducers(middleware_r);

let store = createStore(reducer);
export default store;
