import {request, generate} from '../utils/request';

const MODULEVIDEO = {
    name: 'MODULEVIDEO',
    state: {
        queryUserInfosData: [],
        getVideoUrlData: [],
        exchangeScreenDataLoading: false,
    },
    reselect: {
        // abc: () => MODULEHOME.reducer.MODULEHOMEData
    },
    api: {
        //查询设备列表
        queryUserInfosApi: (params) => {
            return {
                url: '/queryUserInfos',
                method: 'POST',
                data: params
            }
        },
        // 查询部门列表
        queryDepartmentInfosApi: (params) => {
            return {
                url: '/queryDepartmentInfos',
                method: 'POST',
                data: params
            }
        },
        // 查询所有在线设备最新位置信息
        queryOnlinePosInfosApi: (params) => {
            return {
                url: '/queryOnlinePosInfos',
                method: 'POST',
                data: params
            }
        },
        // 	查询设备轨迹信息
        queryPosInfosApi: (params) => {
            return {
                url: '/queryPosInfos',
                method: 'POST',
                data: params
            }
        },
        //查询设备轨迹信息-根据日期范围查询(日期范围最大7天)
        queryPosInfosDateRangeApi: (params) => {
            return {
                url: '/queryPosInfosDateRange',
                method: 'POST',
                data: params
            }
        },
        //文字广播
        facadeSendBroadcastApi: (params) => {
            return {
                url: '/facadeSendBroadcast',
                method: 'POST',
                data: params
            }
        },
        //视频调度
        startVideoApi: (params) => {
            return {
                url: '/startVideo',
                method: 'POST',
                data: params
            }
        },
        //视频调度URL
        getVideoUrlApi: (params) => {
            return {
                url: '/zfzh-service/webapi/resourceMap/getVideoUrl',
                method: 'POST',
                data: params
            }
        },
        //关闭
        stopVideoApi: (params) => {
            return {
                url: '/stopVideo',
                method: 'POST',
                data: params
            }
        },
        //延长视频时间
        changeMaxTimeApi: (params) => {
            return {
                url: '/changeMaxTime',
                method: 'POST',
                data: params
            }
        },
        //调整视频清晰度
        changeDefinitionApi: (params) => {
            return {
                url: '/changeDefinition',
                method: 'POST',
                data: params
            }
        },

        //群组接口
        delete_groupApi: (params) => {
            return {
                url: '/possecu_cs/thirdSystem/delete_group.htm',
                method: 'POST',
                data: params
            }
        },
        //群组接口
        real_time_voiceApi: (params) => {
            return {
                url: '/thirdSystem/real_time_voice.htm',
                method: 'GET',
                data: params
            }
        },
    },
    actions: {
        queryUserInfosActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.queryUserInfosApi(params),
                dispatch,
                ...generate('queryUserInfosApi')
            })
        },
        startVideoActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.startVideoApi(params),
                dispatch,
                ...generate('startVideoApi')
            })
        },
        queryDepartmentInfosActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.queryDepartmentInfosApi(params),
                dispatch,
                ...generate('queryDepartmentInfosApi')
            })
        },
        queryOnlinePosInfosActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.queryOnlinePosInfosApi(params),
                dispatch,
                ...generate('queryOnlinePosInfosApi')
            })
        },
        queryPosInfosActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.queryPosInfosApi(params),
                dispatch,
                ...generate('queryPosInfosApi')
            })
        },
        queryPosInfosDateRangeActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.queryPosInfosDateRangeApi(params),
                dispatch,
                ...generate('queryPosInfosDateRangeApi')
            })
        },
        facadeSendBroadcastActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.facadeSendBroadcastApi(params),
                dispatch,
                ...generate('facadeSendBroadcastApi')
            })
        },
        getVideoUrlActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.getVideoUrlApi(params),
                dispatch,
                ...generate('getVideoUrlApi')
            })
        },
        stopVideoActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.stopVideoApi(params),
                dispatch,
                ...generate('stopVideoApi')
            })
        },
        changeMaxTimeActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.changeMaxTimeApi(params),
                dispatch,
                ...generate('changeMaxTimeApi')
            })
        },
        changeDefinitionActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.changeDefinitionApi(params),
                dispatch,
                ...generate('changeDefinitionApi')
            })
        },
        delete_groupActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.delete_groupApi(params),
                dispatch,
                ...generate('delete_groupApi')
            })
        },
        real_time_voiceActions: (params) => async (dispatch, getState) => {
            return request({
                ...MODULEVIDEO.api.real_time_voiceApi(params),
                dispatch,
                ...generate('real_time_voiceApi')
            })
        },
    },
    reducer: {
        queryUserInfosData(state = MODULEVIDEO.state.queryUserInfosData, actions) {
            switch (actions.types) {
                case generate('queryUserInfosApi').SUCCESS:
                    return actions.data.userInfos;
                default:
                    return state;
            }
        },
        getVideoUrlData(state = MODULEVIDEO.state.getVideoUrlData, actions) {
            switch (actions.types) {
                case generate('getVideoUrlApi').SUCCESS:
                    return actions.data.data;
                default:
                    return state;
            }
        },

    }

}
export default MODULEVIDEO





