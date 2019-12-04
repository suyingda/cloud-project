import React, { Component } from 'react';
import styles from './homeIndex.scss';
import { List, Radio, Accordion, Button, Popover, NavBar, Icon } from 'antd-mobile';
import { connect } from 'e-react-redux';

import Header from './Header'
import Tab from './Tab'
import Pie from '../Pie/pie'
const RadioItem = Radio.RadioItem;
import ModulePage from './../../module/ModulePage'
import { person_JsonData } from './../JSON/person'
import Sockette from 'sockette';
class HomeIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,

        }
    }
    componentDidMount() {
        const { contextDataActions } = this.props;

        this.props.contextDataActions({
            context: {
                areaCode: "",	//地区码，用于区分各地区的标识，统一使用各区的区号
                areaName: "",	//地区名称
                year: "",		//年份
                currentScreen: "problem", //当前屏
                actionInstruct: "string",  		//操作指令
                controllerStatus: 0,		//受控状态
                data: {						//具体的数据
                    problem: {					//问题屏数据
                        title: "",				//屏幕名称
                        problemMapSpreadList: [{ problemLat: "经度", problemLngp: "纬度" }],
                        problemNewStaueInfoList: [{
                            problemNo: "问题编号",
                            problemOriginCode: "问题来源编号",
                            problemOrigin: "问题来源名称",
                            createTime: "登记时间",
                            busStatusName: "当前状态名称"
                        }],
                        problemRoadReginList: [{
                            depCode: "街道编码",
                            depName: "街道名称",
                            problemCount: 1
                        }],
                        problemTotalCount: {
                            year: "年度",
                            totalCount: 12
                        },
                        problemTradeList: [{
                            year: "年度",
                            month: "月份",
                            problemCount: "问题数量"
                        }],
                        problemTypeCountList: [{
                            problemType: "问题类型",
                            problemCount: "问题数量",
                            problemTypeRate: "问题类型占比"
                        }]
                    },
                    problemDetail: {
                        title: "",
                        problemDetail: person_JsonData
                    }

                }
            }

        })
        // const ws = new Sockette("ws://172.16.8.134:96/ws?userId=1001&token=" + Math.random(), {
        //     timeout: 5e3,
        //     maxAttempts: 10,
        //     onopen: e => console.log('Connected!', e),
        //     onmessage: e => {
        //         // this.props.contextDataActions(e)
        //         console.log(e, 'Received')
        //     },
        //     onreconnect: e => console.log('Reconnecting...', e),
        //     onmaximum: e => console.log('Stop Attempting!', e),
        //     onclose: e => console.log('Closed!', e),
        //     onerror: e => console.log('Error:', e)
        // });

        // var ws = new WebSocket();
        // ws.onopen = function (data) {
        //     // Web Socket 已连接上，使用 send() 方法发送数据
        //     //  ws.send("发送数据");
        //     console.log("数据发送中...", data);
        // };
        // ws.onmessage = function (evt) {
        //     var received_msg = evt.data;
        //     console.log("数据已接收...", evt);
        // };
    }
    onChange = (v) => {
        // console.log(v.target.value);
        this.setState({
            value: v.target.value
        });
    };

    render() {
        const { value } = this.state;
        // console.log(this.props, 'index')
        return <div style={{ height: '2500px' }}>
            <h2 className={styles.appClass} onClick={()=>{
                this.setState({})
            }}>
                大屏控制
            </h2>
            <Header />
            <Tab show_Calendar_f />
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Accordion defaultActiveKey="0" className="my-accordion"  >
                    <Accordion.Panel header="现场教育屏">
                        <List className="my-list">
                            <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>地图展示</Button>
                            <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>问题登记类型</Button>
                            <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>街道登记问题排名</Button>
                            <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>问题登记趋势图</Button>
                            <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>最新动态信息</Button>

                            {/* <List.Item>content 2</List.Item> */}
                            {/* <List.Item>content 3</List.Item> */}
                        </List>
                    </Accordion.Panel>
                    <Accordion.Panel header="人员展示屏" className="pad">this is panel content2 or other</Accordion.Panel>
                    <Accordion.Panel header="勤务信息屏" className="pad">
                        text text text text text text text text text text text text text text text
          </Accordion.Panel>
                </Accordion>
            </div>

            <h1>Pie</h1>
            <Pie></Pie>

        </div >
    }
}
const mapStateToProps = (state, props) => {
    // const { contextDataData } = state.ModulePage;
    return {

    }
}
const { contextDataActions } = ModulePage.actions;

const mapDispatchToProps = {
    contextDataActions,
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(HomeIndex);
