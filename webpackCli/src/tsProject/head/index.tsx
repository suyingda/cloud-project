import React from "react";
import styles from './index.less';

function HeadTemplate() {
    return <header>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <a href="https://github.com/Microsoft/TypeScript">
                    <img
                        className="fork-me-ribbon pull-right hidden-xs"
                        src="https://www.tslang.cn/assets/images/fork_me_ribbon.svg"/>
                    <div className="collapse navbar-collapse navbar_center" id="navbar-collapse-div">
                        <ul className="nav navbar-nav">
                            <li><a href="/">起步</a></li>
                            <li className="active"><a href="/document">文档<span
                                className="sr-only">(current)</span></a></li>
                            <li><a href="/download">下载</a></li>
                            <li><a href="/relation">联系</a></li>
                            {/*<li><a href="/play/index.html">练习</a></li>*/}
                            <li><a href="/update">更新</a><span className="badge hide">&nbsp;</span></li>
                        </ul>

                    </div>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle pull-left collapsed" data-toggle="collapse"
                                data-target="#navbar-collapse-div">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="/index.html">
                            {/*<img className="navbar-logo" src="https://www.tslang.cn/assets/images/logo_nocircle.svg"/>*/}
                        </a>
                    </div>
                </a>
            </div>
        </nav>
    </header>
}

export default HeadTemplate
