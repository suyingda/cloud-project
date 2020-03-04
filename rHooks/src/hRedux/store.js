import createStore from './index'

const {Provider, store} = createStore({
    initialState: {
        age: '100',
        name:'苏英大'
    }
});

export {
    Provider,
    store
}
