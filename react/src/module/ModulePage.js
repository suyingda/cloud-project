import { request, generate } from '../utils/request';

const ModulePage = {
    name: 'ModulePage',
    state: {
        contextDataData: {},
    },
    reselect: {

    },
    api: {

    },
    actions: {
        contextDataActions: (data) => async (dispatch, getState) => {
            dispatch({
                types: 'contextDataData',
                data
            })
        },
    },
    reducer: {
        contextDataData(state = ModulePage.state.contextDataData, actions) {
            console.log('module hot replace')
            switch (actions.types) {
                case 'contextDataData':
                    return actions.data
                default:
                    return state;
            }
        },
    }
}
export default ModulePage





