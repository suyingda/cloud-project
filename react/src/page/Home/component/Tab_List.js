import React, { Component } from 'react';
import { Button, ListView, SearchBar, List, Switch, Calendar } from 'antd-mobile';
import styles from './Tab_List.scss';
const { Item } = List;

class PersonnelDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: false,
            show: false,
            config: {},
        };
    }
    renderBtn(zh, en, config = {}) {
        // config.locale = this.state.en ? enUS : zhCN;

        return (
            <List.Item arrow="horizontal"
                onClick={() => {
                    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
                    this.props.show_Calendar_f(true, config)
                    this.setState({
                        show: true,
                        config,
                    });
                }}
            >
                {this.state.en ? en : zh}
            </List.Item>
        );
    }
    render() {
        const { change_class_scss, title_, problemDetailList = [] } = this.props;
        // console.log(this.props,'tab_list')
        return <div>
            <h3>最新动态-{title_}</h3>
            <div className={styles[change_class_scss]}>
                {problemDetailList.map((element, index) => {
                    return <Button onClick={() => {
                        console.log(this.props)
                        this.props.showPersonDetailActions({ "problemId": "20190828001" })
                        this.props.show_Calendar_f(true, { showShortcut: true })
                    }} key={index} type="primary" size="small" inline style={{ marginRight: '4px' }}>{element.problemOriginCode}</Button>
                })}
                <Button onClick={() => {
                    console.log(this.props)
                    this.props.showPersonDetailActions({ "problemId": "20190828001" })
                    this.props.show_Calendar_f(true, { showShortcut: true })
                }} type="primary" size="small" inline style={{ marginRight: '4px' }}>接口</Button>
                <Button onClick={() => {
                    this.props.show_Calendar_f(true, { showShortcut: true })
                }} type="primary" size="small" inline style={{ marginRight: '4px' }}>QQ</Button>
                <Button onClick={() => {
                    this.props.show_Calendar_f(true, { showShortcut: true })
                }} type="primary" size="small" inline style={{ marginRight: '4px' }}>爱奇艺</Button>

                <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>地图展示</Button>
                <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>展示</Button>
                <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>地图展示</Button>
                <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>地图展示</Button>
                <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>地图展示</Button>
                <Button type="primary" size="small" inline style={{ marginRight: '4px' }}>地图展示</Button>
                <a style={{ marginRight: '4px' }}></a>
                <a style={{ marginRight: '4px' }}></a>
            </div>
        </div >
    }
}

export default PersonnelDetails;