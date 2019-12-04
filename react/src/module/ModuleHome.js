import { request, generate } from '../utils/request';

const MODULEHOME = {
    name: 'MODULEHOME',
    state: {
        exchangeScreenDataLoading: false,
    },
    reselect: {
        // abc: () => MODULEHOME.reducer.MODULEHOMEData
    },
    api: {
        exchangeControllStatusApi: (params) => {
            return {
                url: '/api/v1.0/controll/screen/exchangeControllStatus',
                method: 'POST',
                data: params
            }
        },
        exchangeScreenApi: (params) => {
            return {
                url: '/api/v1.0/controll/screen/exchangeScreen',
                method: 'POST',
                data: params
            }
        },
        showPersonDetailApi: (params) => {
            return {
                url: '/api/v1.0/controll/screen/showPersonDetail',
                method: 'POST',
                data: params
            }
        },
        showProblemDetailApi: (params) => {
            return {
                url: '/api/v1.0/controll/screen/showProblemDetail',
                method: 'POST',
                data: params
            }
        }
    },
    actions: {

        controlActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEHOME.api.exchangeControllStatusApi(params),
                dispatch,
                success: 's',
                error: 'e',
                request: 'r'
            })
            // const a = await new Promise(function (resolve, reject) {
            //     setTimeout(function () {
            //         return resolve('promise return')
            //     }, 3000);
            // })
            // dispatch({
            //     types: 'aaaaaa',
            //     data: "已经修改"
            // })
            // return a
        },
        exchangeScreenActions: (params) =>  (dispatch, getState) => {
            return request({
                ...MODULEHOME.api.exchangeScreenApi(params),
                dispatch,
                ...generate("exchangeScreenApi")
            })
        },
        showPersonDetailActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEHOME.api.showPersonDetailApi(params),
                dispatch,
                success: 's',
                error: 'e',
                request: 'r'
            })
        },
        showProblemDetailActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEHOME.api.showProblemDetailApi(params),
                dispatch,
                success: 's',
                error: 'e',
                request: 'r'
            })
        },
    },
    reducer: {
        exchangeScreenDataLoading(state = MODULEHOME.state.exchangeScreenDataLoading, actions) {
            switch (actions.types) {
                case generate("exchangeScreenApi").PENDING:
                    return true;
                case generate("exchangeScreenApi").SUCCESS:
                    return false
                default:
                    return state;
            }
        },

    }

}
export default MODULEHOME





