import React, { Component } from 'react';
import { Tabs, Calendar, ActivityIndicator } from 'antd-mobile';
import styles from './Tab.scss';
import Tab_List from './component/Tab_List';
import { connect } from 'e-react-redux';
import ModuleHome from './../../module/ModuleHome'
import ModulePage from '../../module/ModulePage';

const extra = {
    '2017/07/15': { info: 'Disable', disable: true },
};
const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

Object.keys(extra).forEach((key) => {
    const info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
        extra[+date] = info;
    }
});
class Tab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goToTabStatus: 4,
            show_Calendar: false,
            show_Calendar_config: {},
        }
    }
    onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.show_Calendar_f(false);
        this.props.showProblemDetailActions({ "problemId": "1000001" });
        this.setState({
            startTime,
            endTime,
        });
    }

    onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.show_Calendar_f(false)
        this.setState({

            startTime: undefined,
            endTime: undefined,
        });
    }

    show_Calendar_f = (v, config) => {
        // console.log(v, config)
        this.setState({
            show_Calendar: v,
            show_Calendar_config: config,
        })
    }
    renderContent = tab => {
        const { showPersonDetailActions, contextDataData } = this.props;
        const context = contextDataData && contextDataData.context;
        const data = context && context.data;
        const problemDetail = data && data.problemDetail;
        const problemDetailList = problemDetail && problemDetail.problemDetail;
        let config_ = {
            problemDetailList
        };
        switch (tab.key) {
            case 1:
                config_ = {
                    ...config_,
                    title_: '问题编号',
                    change_class_scss: 'Education'
                }
                return <Tab_List {...config_} show_Calendar_f={this.show_Calendar_f} />
            case 2:
                config_ = {
                    ...config_,
                    title_: '人员姓名',
                    change_class_scss: 'PersonnelDetails',
                    showPersonDetailActions
                }
                return <Tab_List {...config_} show_Calendar_f={this.show_Calendar_f} />
            case 3:
                config_ = {
                    ...config_,
                    title_: '问题编号',
                    change_class_scss: 'Education'
                }
                return <Tab_List {...config_} show_Calendar_f={this.show_Calendar_f} />
            case 4:
                config_ = {
                    ...config_,
                    title_: '问题编号',
                    change_class_scss: 'Education'
                }
                return <div> <Tab_List {...config_} show_Calendar_f={this.show_Calendar_f} /></div>
            default:
                return <div>空</div>
        }
        return (<div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px', backgroundColor: '#fff'
        }}>
            {console.log(tab)}{tab.key}
        </div>)
    }

    changeLanguage = () => {
        this.setState({
            en: !this.state.en,
        });
    }

    onSelectHasDisableDate = (dates) => {
        console.warn('onSelectHasDisableDate', dates);
    }


    getDateExtra = date => extra[+date];
    render() {
        // console.log(this.props,'tab')
        const { contextDataData } = this.props;
        const { show_Calendar_config, show_Calendar } = this.state;
        /**
         *  problem:问题屏
            problemDetail:问题详情子屏
            person:人员屏
            personDetail：人员详情屏
            duty：勤务屏
            dutyCalendar：勤务排班屏
            dog：养犬屏
         */
        const tabs = [
            { title: '现场教育', key: 1, value: 'problem' },
            { title: '人员信息', key: 2, value: 'person' },
            { title: '勤务信息', key: 3, value: 'duty' },
            { title: '养犬服务', key: 4, value: 'dog' },

        ];

        return <div className={styles.Tab_Class}>
            {/*{   <div className={styles.loading_} >*/}
            {/*    <ActivityIndicator size="large" />*/}
            {/*</div>}*/}
            {/* <Button onClick={() => {
                this.setState({
                    goToTabStatus: 4
                })
                console.log(this.state.goToTabStatus)
            }} style={{ color: 'rgba(0, 204, 255, 0.647058823529412)' }}>{'<<'}</Button> */}
            <Tabs tabs={tabs} onTabClick={(v) => {
                this.props.exchangeScreenActions({ "screen": v.value })
            }} renderTabBar={(props, index) => <Tabs.DefaultTabBar    {...props} page={4} />}>
                {this.renderContent}
            </Tabs>

            {/* <Button style={{ color: 'rgba(0, 204, 255, 0.647058823529412)' }}>{'>>'}</Button> */}
            <Calendar
                {...show_Calendar_config}
                visible={show_Calendar}
                onCancel={this.onCancel}
                onConfirm={this.onConfirm}
                onSelectHasDisableDate={this.onSelectHasDisableDate}
                getDateExtra={this.getDateExtra}
                defaultDate={now}
                minDate={new Date(+now - 5184000000)}
                maxDate={new Date(+now + 31536000000)}
            />

        </div >
    }
}

const mapStateToProps = (state, props) => {
    // const { exchangeScreenDataLoading } = state.MODULEHOME;
    // const { contextDataData } = state.ModulePage
    return {

    }
}
const {
    exchangeScreenActions,
    showPersonDetailActions,
    showProblemDetailActions
} = ModuleHome.actions;


const mapDispatchToProps = {
    exchangeScreenActions,
    showPersonDetailActions,
    showProblemDetailActions
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Tab);
