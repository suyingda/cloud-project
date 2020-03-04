import React from "react";

const {useContext, useReducer, createContext} = React;
export const AppContext = createContext({});
export default function createStore(params) {
    const {initialState} = {
        initialState: {},  //origin initial value
        ...params  //user introduction default value
    };

    const middlewareReducer = (lastState, action) => {
        /*switch (action.type) {
            case 'init':
                return '苏英大';
            case 'marry':
                return '陈珍珍';
            case 'son':
                return '苏惜雅';
            default:
                return 'family';
        }*/
        let nextState = null;
        if (typeof action.reducer == 'function') {
            nextState = action.reducer(lastState);
        } else {
            nextState = lastState;
        }
        return nextState;
    };
    const store = {
        _state: params,  //initial value
        dispatch: undefined,
        useContext: () => useContext(AppContext),
    };
    const Provider = props => {
        const [state, dispatch] = useReducer(middlewareReducer, initialState)
        if (!store.dispatch) {
            store.dispatch = async (action) => {
                dispatch(action)
            }
        }
        return <AppContext.Provider {...props} value={state}/>
    };
    return {
        Provider,
        store
    }
}
