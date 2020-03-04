import React from "react";
import {Collapse} from 'antd';
import '../css/home.css'

const {Panel} = Collapse;

export default function InlineBlock() {
    return <div>
        <Collapse accordion>
            <Panel header="HTML 内联元素" key="1">
                <div className={'homeClassName'} style={{width: 'auto'}}>
                    <h2> 内联元素</h2>

                    <p>内联元素在显示时通常不会以新行开始。</p>

                    <p>例子：&lt;b&gt;, &lt;td&gt;, &lt;a&gt;, &lt;img&gt;</p>
                </div>
            </Panel>
            <Panel header={<h1>span</h1>} key="2">
                <div className={'homeClassName'} style={{width: 'auto'}}>
                    <h2>HTML &lt;span&gt; 元素</h2>

                    <p>HTML &lt;span&gt; 元素是内联元素，可用作文本的容器。</p>

                    <p>&lt;span&gt; 元素<strong>也没有特定的含义</strong>。</p>

                    <p>当与 CSS 一同使用时，&lt;span&gt; 元素可用于为部分文本设置样式属性。</p>
                </div>
            </Panel>
        </Collapse>
    </div>
}
