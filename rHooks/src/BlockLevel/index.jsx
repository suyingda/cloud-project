import React from "react";
import {Collapse} from 'antd';
import '../css/home.css'

const {Panel} = Collapse;


export default function BlockLevel() {
    return <div>
        <Collapse accordion>
            <Panel header="HTML 块元素" key="1">
                <div className={'homeClassName'} style={{width: 'auto'}}>
                    <h2> 块元素</h2>

                    <p>大多数 HTML 元素被定义为块级元素或内联元素。</p>

                    <p>编者注：“块级元素”译为 block level element，“内联元素”译为 inline element。</p>

                    <p>块级元素在浏览器显示时，通常会以新行来开始（和结束）。</p>

                    <p>例子：&lt;div&gt;, &lt;h1&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;table&gt;</p>
                </div>
            </Panel>
            <Panel header={<h1>div</h1>} key="2">
                <div className={'homeClassName'} style={{width: 'auto'}}>
                    <h2>HTML &lt;div&gt; 元素</h2>

                    <p>HTML &lt;div&gt; 元素是块级元素，它是可用于组合其他 HTML 元素的容器。</p>

                    <p>&lt;div&gt; 元素<strong>没有特定的含义</strong>。除此之外，由于它属于块级元素，浏览器会在其前后显示<strong>折行</strong>。</p>

                    <p>如果与 CSS 一同使用，&lt;div&gt; 元素可用于对大的内容块设置样式属性。</p>


                </div>
            </Panel>
            <Panel header={<h1>header</h1>} key="3">
                <div className={'homeClassName'} style={{width: 'auto'}}>
                    <h2>HTML &lt;header&gt; 元素</h2>
                   {/* <span>header1</span>
                    <nav>header</nav>
                    <span>header2</span>*/}
                    <p>HTML &lt;header&gt; 元素是块级元素，定义页面的头部。</p>




                </div>
            </Panel>


        </Collapse>
    </div>
}
