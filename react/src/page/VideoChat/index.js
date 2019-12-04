import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import MODULEVIDEO from "../../module/ModuleVideo";
import {connect} from 'e-react-redux';
import Su from './su'
// const fourGone = "26527";
const fourGone = "29824";
// const fourGone = "30923";
// const fourGone = "46571";
// const fourGone = "46572";
// f616db03672641ccb2d52aec8642ca04
class VideoChat extends Component {
    keysUser = () => {
        const valueKey = Math.random();
        const _ = sha256('f616db03672641ccb2d52aec8642ca04' + valueKey)
        return {
            'seq': String(valueKey),
            'sign': _,
        }
    };

    componentDidMount() {
        window.onload = () => {
            this.bindCallBackEvent();
        }


    }

    open = () => {
        let urlJson = `/thirdSystem/real_time_voice.htm?seq=${this.keysUser().seq}&sign=${this.keysUser().sign}&voiceType=0&serialNumbers=FP80005&closeCallback=${this.voiceCloseCallback}`;
        this.props.real_time_voiceActions(urlJson);
        document.getElementById("frame").src = urlJson;
    };

    voiceCloseCallback = () => {
        document.getElementById("frame").src = '';
        alert("实时对讲结束");
    };

    bindCallBackEvent = () => {
        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = window[eventMethod];
        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

        eventer(messageEvent, function (e) {
            var key = e.message ? "message" : "data";
            var data = e[key];

            console.info('closeCallback', 6666)

            if (data === 'voiceCloseCallback') {
                this.voiceCloseCallback();
            }
        }, false);
    }

    render() {

        const {queryUserInfosData, getVideoUrlData} = this.props;
        return <div style={{margin: '100px'}}>
            <Link to={'/videoChat/su'}>susususu</Link>
            <Route path={'/videoChat/su'} component={Su}>

            </Route>


            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                    'departmentId': 0,
                    'currPageIndex': 1,
                    'pageSize': 999,
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }

                this.props.queryUserInfosActions(formData);
            }}>
                <h1>查询设备列表</h1>
                <ul>
                    {queryUserInfosData && queryUserInfosData.map((items, i) => <li key={i} style={{display: 'block'}}>
                        <h4 onClick={() => {

                        }}>id：{items.id}</h4>
                    </li>)}
                </ul>
            </div>
            <br/>
            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                    'userId': fourGone,
                    'serialNumber': null,
                    // 'callBackUrl': 'http://193.112.63.2:8762/zfzh-api/api/lolaAge/receiveVideo'
                    'callBackUrl': 'http://attendance.hcfdev.cn/zfzh-api/api/lolaAge/receiveVideo'
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }
                this.props.startVideoActions(formData);
            }}>
                <h1>视频调度</h1>

            </div>
            <br/>

            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    // "seq": Math.random(),
                    "id": fourGone
                };
                // for (let i in params) {
                //     formData.append(i, params[i]);
                // }
                this.props.getVideoUrlActions(params);
            }}>
                <h1>视频调度-获取url</h1>
            </div>
            <br/>
            <div onClick={() => {
                // const w = window.open('about:blank')
                window.open(getVideoUrlData.url)
                // w.location.href = 'www.baidu.com';
            }}>
                {getVideoUrlData && getVideoUrlData.url}
            </div>
            <br/>
            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }
                this.props.queryDepartmentInfosActions(formData);
            }}>
                <h1>查询部门列表</h1>
            </div>
            <br/>
            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                    'departmentId': 0,
                    'currPageIndex': 1,
                    'pageSize': 999,
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }
                this.props.queryOnlinePosInfosActions(formData);
            }}>
                <h1>查询所有在线设备最新位置信息</h1>
            </div>
            <br/><br/>
            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                    'userId': fourGone,
                    'serialNumber': null,
                    'date': '2019-10-24',
                    'currPageIndex': 1,
                    'pageSize': 999
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }
                this.props.queryPosInfosActions(formData);
            }}>
                <h1>查询设备轨迹信息</h1>
            </div>
            <br/>
            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                    'userIds': fourGone,
                    'serialNumbers': null,
                    'content': "66666"
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }
                this.props.facadeSendBroadcastActions(formData);
            }}>
                <h1>文字广播</h1>
            </div>
            <br/>
            <br/>
            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                    'userId': fourGone,
                    'serialNumbers': null,
                    'startDate': "2019-10-24",
                    'endDate': "2019-10-24",
                    'currPageIndex': 1,
                    'pageSize': 999
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }
                this.props.queryPosInfosDateRangeActions(formData);
            }}>
                <h1>查询设备轨迹信息-根据日期范围查询(日期范围最大7天)</h1>
            </div>
            <br/>
            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                    'userId': fourGone,
                    'serialNumber': null
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }
                this.props.stopVideoActions(formData);
            }}>
                <h1>关闭终端视频</h1>
            </div>
            <br/>
            <br/>
            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                    'userId': fourGone,
                    'serialNumber': null,
                    time: 600
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }
                this.props.changeMaxTimeActions(formData);
            }}>
                <h1>延长视频时间</h1>
            </div>
            <br/>
            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                    'userId': fourGone,
                    'serialNumber': null,
                    'defintion': '1-480P'
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }
                this.props.changeDefinitionActions(formData);
            }}>
                <h1>调整视频清晰度</h1>
            </div>
            <br/>
            <div onClick={() => {
                const formData = new FormData();
                const params = {
                    ...this.keysUser(),
                    'userId': fourGone,
                    'serialNumber': null
                };
                for (let i in params) {
                    formData.append(i, params[i]);
                }
                this.props.delete_groupActions(formData);
            }}>
                <h1>群组接口-删除群组</h1>
            </div>


            <br/>
            <div onClick={() => {
                this.open()
            }}>
                <h1>语音</h1>

            </div>

            <h1>
                <Link to={'/home'}>Link</Link>
            </h1>
        </div>
    }
}

const mapStateToProps = (state, props) => {
    // console.log(state)
    const {
        getVideoUrlData,
        queryUserInfosData
    } = state.MODULEVIDEO;
    return {
        getVideoUrlData,
        queryUserInfosData
    }
};
const {
    queryUserInfosActions,
    startVideoActions,
    queryDepartmentInfosActions,
    queryOnlinePosInfosActions,
    facadeSendBroadcastActions,
    getVideoUrlActions,
    stopVideoActions,
    delete_groupActions,
    queryPosInfosActions,
    changeMaxTimeActions,
    changeDefinitionActions,
    queryPosInfosDateRangeActions,
    real_time_voiceActions,
} = MODULEVIDEO.actions;
const mapDispatchToProps = {
    queryUserInfosActions,
    startVideoActions,
    queryDepartmentInfosActions,
    queryOnlinePosInfosActions,
    facadeSendBroadcastActions,
    getVideoUrlActions,
    stopVideoActions,
    delete_groupActions,
    queryPosInfosActions,
    changeMaxTimeActions,
    changeDefinitionActions,
    queryPosInfosDateRangeActions,
    real_time_voiceActions,
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoChat);
