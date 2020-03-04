import React from 'react';
import './css/home.css'

function Home() {
    return <div>
        <hr/>
        <div className={'homeClassName'}>
            <h2>什么是 HTML？</h2>
            <p>HTML 是用来描述网页的一种语言。</p>
            <ul>
                <li>HTML 指的是超文本标记语言 (<b>H</b>yper <b>T</b>ext <b>M</b>arkup <b>L</b>anguage)</li>
                <li>HTML 不是一种编程语言，而是一种<em>标记语言</em> (markup language)</li>
                <li>标记语言是一套<em>标记标签</em> (markup tag)</li>
                <li>HTML 使用<em>标记标签</em>来描述网页</li>
            </ul>
        </div>
        <div className={'homeClassName'}>
            <h2>HTML 标签</h2>

            <p>HTML 标记标签通常被称为 HTML 标签 (HTML tag)。</p>

            <ul>
                <li>HTML 标签是由<em>尖括号</em>包围的关键词，比如 &lt;html&gt;</li>
                <li>HTML 标签通常是<em>成对出现</em>的，比如 &lt;b&gt; 和 &lt;/b&gt;</li>
                <li>标签对中的第一个标签是<em>开始标签</em>，第二个标签是<em>结束标签</em></li>
                <li>开始和结束标签也被称为<em>开放标签</em>和<em>闭合标签</em></li>
            </ul>
        </div>
        <div className={'homeClassName'}>
            <h2>HTML 文档 = 网页</h2>

            <ul>
                <li>HTML 文档<em>描述网页</em></li>
                <li>HTML 文档<em>包含 HTML 标签</em>和纯文本</li>
                <li>HTML 文档也被称为<em>网页</em></li>
            </ul>

            <p>Web 浏览器的作用是读取 HTML 文档，并以网页的形式显示出它们。浏览器不会显示 HTML 标签，而是使用标签来解释页面的内容：</p>

            <pre>&lt;html&gt;<br/>
                &lt;head&gt;<br/>
                    &nbsp;&nbsp; &lt;title&gt; study 前端&lt;/title&gt;  <br/>
                &lt;/head&gt;<br/>
                &lt;body&gt;<br/><br/>

                &lt;h1&gt;我的第一个标题&lt;/h1&gt;<br/><br/>

                &lt;p&gt;我的第一个段落。&lt;/p&gt;<br/><br/>

                &lt;/body&gt;<br/>
                &lt;/html&gt;<br/>
</pre>

            <h3>例子解释</h3>

            <ul>
                <li>&lt;html&gt; 与 &lt;/html&gt; 之间的文本描述网页</li>
                <li>&lt;head&gt; 与 &lt;/head&gt; 之间的文本描述网页头部信息</li>
                <li>&lt;title&gt; 与 &lt;/title&gt; 之间的文本描述网页标题</li>
                <li>&lt;body&gt; 与 &lt;/body&gt; 之间的文本是可见的页面内容</li>
                <li>&lt;h1&gt; 与 &lt;/h1&gt; 之间的文本被显示为标题</li>
                <li>&lt;p&gt; 与 &lt;/p&gt; 之间的文本被显示为段落</li>
            </ul>
        </div>

    </div>
}

export default Home;
