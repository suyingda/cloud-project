import React, {useEffect, useState} from 'react';
import Consumer from "../hRedux/Consumer";
import ModuleHeader from "../module/ModuleHeader";
import {Menu, Icon} from 'antd';
import {Link} from "react-router-dom";

const {SubMenu} = Menu;

function Header(props) {
    const [current, setCurrent] = useState('mail')
    useEffect(() => {
        // console.log(props, 'Header')
    });
    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <div className={'homePageHeader'}>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail">
                <Link to="/home"><Icon type="mail"/>首页</Link>
            </Menu.Item>
            <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                      <Icon type="setting123"/>

                           <Icon type="mail"/>
                           study Web

                    </span>
                }
            >
                <Menu.ItemGroup  >
                    <Menu.Item key="setting:111">
                        <Link to="/blockLevel">块级标签</Link>
                    </Menu.Item>
                    <Menu.Item key="setting:2222">
                        <Link to="/inlineBlock">行内标签</Link>
                    </Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="exam">
                <Link to="/exam">进入考场</Link>
            </Menu.Item>
            <Menu.Item key="game">
                <Link to="/game">game</Link>
            </Menu.Item>
        </Menu>

    </div>
}

const mapStateToProps = () => {

};
const mapDispatchToProps = {
    ...ModuleHeader.reducer
};

export default Consumer({mapStateToProps, mapDispatchToProps}, Header)
