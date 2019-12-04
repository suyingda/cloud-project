import React, { Component } from 'react';
import { Radio, Switch, List, Modal, Icon, InputItem, Popover } from 'antd-mobile'
import styles from './homeIndex.scss';
import homeHeader from './homeHeader.scss';
import { createForm } from 'rc-form';
import { connect } from 'e-react-redux'
import HomeIndex from './Index';
import ModuleHome from './../../module/ModuleHome';



const Item = Popover.Item;
const Alert = Modal.alert;
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            PopoverStatus: false,
            Popover_show: false,
            // checked: false,
            type: 'money',
            font_: '',
        }
        setTimeout(() => {
            this.setState({
                PopoverStatus: true
            })
        }, 1000)
    }
    onClose = () => {

    }
    comfirmStatu = (status, font) => {
        const { checked } = this.state;
        this.setState({
            modal1: status,
            font_: font,
            checked: !checked
        })
    }
    submitComfir = (status) => {
        const { controlActions } = this.props;
        const { checked } = this.state;
        status && controlActions({ "controllerStatus": checked });
        this.setState({
            modal1: false,
            checked: status ? checked : !checked
        })
    }
    handleVisibleChange = (v) => {
        // console.log(v, 666)
        if (v) {
            this.setState({
                Popover_show: false
            })
        }
    }
    render() {
        // console.log(this.props, 'head')

        const { getFieldProps } = this.props.form;
        const { font_, PopoverStatus, checked } = this.state;

        return <div className={homeHeader.div_float}>

            <div className={homeHeader.div_right_font}>当前状态</div>
            <div className={homeHeader.div_Radio}>
                <List.Item
                    extra={<Switch
                        checked={checked}
                        onChange={() => {
                            this.comfirmStatu(true, !checked ? '受控状态' : '非受控状态');
                        }}
                    />}
                > </List.Item><span  >（{checked ? '受控状态' : '非受控状态'}）</span>
                {/* <Radio style={font_ === '受控状态' ? { color: 'red' } : {}} className={styles.amRadio} onChange={e => this.comfirmStatu(true, '受控状态')}>受控状态</Radio>
                <Radio style={font_ === '非受控状态' ? { color: 'red' } : {}} className={styles.amRadio} onChange={e => this.comfirmStatu(true, '非受控状态')}>非受控状态</Radio> */}
            </div>

            <div className={homeHeader.PopoverClassName}  >
                {PopoverStatus ? <Popover mask={false}
                    placement={"top"}
                    overlayClassName="fortest"
                    overlayStyle={{ color: 'currentColor' }}
                    visible={true}
                    overlay={[
                        (<Item key="4" style={{ borderRadius: '100%' }} value="scan" data-seed="logId">
                            输入屏幕轮播时间
                            </Item>),
                    ]}
                    align={{
                        overflow: { adjustY: 13, adjustX: -10 },
                        offset: [22, -10],
                    }}

                // onVisibleChange={this.handleVisibleChange}
                // onSelect={this.handleVisibleChange}
                >
                    <input type={'number'} placeholder={'请输入'} />
                </Popover> : <input placeholder={'请输入'} />}


            </div>

            <Modal
                visible={this.state.modal1}
                transparent
                maskClosable={false}
                // onClose={this.onClose('modal1')}
                className={'modalClass'}
                title="切换控制状态"
                footer={[
                    {
                        text: '取消', onPress: () => this.submitComfir(false)
                    },
                    {
                        text: '确定', onPress: () => {
                            this.submitComfir(true)
                        }
                    }
                ]}
                wrapProps={{ onTouchStart: this.onWrapTouchStart }}
            // afterClose={() => { alert('afterClose'); }}
            >
                <div className={'modalClass_'}>
                    <span>请确认是否切换 <i style={{ color: 'red' }}>{font_}</i>?</span>
                    <span style={font_ === '受控状态' ? { color: 'red' } : {}}>受控状态为人工控制;</span>
                    <span style={font_ === '非受控状态' ? { color: 'red' } : {}}>非受控状态为系统根据规则自动播放。</span>
                </div>

            </Modal>

            {/* <RadioItem key={1} checked={value === 1} value={1} onChange={this.onChange}>受控状态</RadioItem>
                <RadioItem key={2} checked={value === 2} value={2} onChange={this.onChange}>非受控状态</RadioItem> */}

        </div >
    }
}
const mapStateToProps = (state, props) => {
    return {

    }
}
const { controlActions } = ModuleHome.actions;
const mapDispatchToProps = {
    controlActions,

}
export default connect(
    mapStateToProps, mapDispatchToProps
)(createForm()(Header));
