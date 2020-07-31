import React from "react";
import './../head/index.less'

function Document() {
    return <div id="content" className="container-fluid fill docs-container">
        <div className="container">
            <div className="col-md-3 toc-container">

                <nav className="docs-nav visible-md visible-lg affix-top" id="docs-navbar">
                    <ul className="nav" id="main-nav">
                        <li className="panel selected">
                            <a className="docs-home active" href="https://www.tslang.cn/docs/home.html">文档简介</a>
                        </li>
                        <li className="panel collapsed">
                            <a className="area collapsed" aria-expanded="false" href="#toc-tutorials"
                               data-toggle="collapse" data-parent="#main-nav">辅导教程</a>
                            <ul className="collapse" id="toc-tutorials" aria-expanded="false" style={{height: '12px'}}>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html">5 minute to download source</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/asp-net-core.html">ASP.NET Core</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/gulp.html">Gulp</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/migrating-from-javascript.html">JavaScript迁移</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/react-&amp;-webpack.html">React &amp; Webpack</a>
                                </li>
                            </ul>
                        </li>
                        <li className="panel collapsed">
                            <a className="area collapsed" aria-expanded="false" href="#toc-whats-new"
                               data-toggle="collapse" data-parent="#main-nav">文档版本</a>
                            <ul className="collapse" id="toc-whats-new" aria-expanded="false" style={{height: '12px'}}>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-3.1.html">gains
                                    3.1</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-3.0.html">gains
                                    3.0</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-2.9.html">gains
                                    2.9</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-2.8.html">TypeScript
                                    2.8</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-2.7.html">TypeScript
                                    2.7</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-2.6.html">TypeScript
                                    2.6</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-2.5.html">TypeScript
                                    2.5</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-2.4.html">TypeScript
                                    2.4</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-2.3.html">TypeScript
                                    2.3</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-2.2.html">TypeScript
                                    2.2</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-2.1.html">TypeScript
                                    2.1</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-2.0.html">TypeScript
                                    2.0</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-1.8.html">TypeScript
                                    1.8</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-1.7.html">TypeScript
                                    1.7</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-1.6.html">TypeScript
                                    1.6</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-1.5.html">TypeScript
                                    1.5</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-1.4.html">TypeScript
                                    1.4</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-1.3.html">TypeScript
                                    1.3</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/release-notes/typescript-1.1.html">TypeScript
                                    1.1</a></li>
                            </ul>
                        </li>
                        <li className="panel collapsed">
                            <a className="area collapsed" aria-expanded="false" href="#toc-handbook"
                               data-toggle="collapse" data-parent="#main-nav">手册指南</a>
                            <ul className="collapse" id="toc-handbook" aria-expanded="false" style={{height: '12px'}}>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/basic-types.html">基础类型</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/variable-declarations.html">变量声明</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/interfaces.html">接口</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/classes.html">类</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/functions.html">函数</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/generics.html">泛型</a></li>
                                <li className="toc-item"><a href="https://www.tslang.cn/docs/handbook/enums.html">枚举</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/type-inference.html">类型推论</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/type-compatibility.html">类型兼容性</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/advanced-types.html">高级类型</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/symbols.html">Symbols</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/iterators-and-generators.html">迭代器和生成器</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/modules.html">模块</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/namespaces.html">命名空间</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/namespaces-and-modules.html">命名空间和模块</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/module-resolution.html">模块解析</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/declaration-merging.html">声明合并</a></li>
                                <li className="toc-item"><a href="https://www.tslang.cn/docs/handbook/jsx.html">JSX</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/decorators.html">装饰器</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/mixins.html">Mixins</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/triple-slash-directives.html">三斜线指令</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/type-checking-javascript-files.html">JavaScript文件类型检查</a>
                                </li>
                            </ul>
                        </li>
                        <li className="panel collapsed">
                            <a className="area collapsed" aria-expanded="false" href="#toc-declaration-files"
                               data-toggle="collapse" data-parent="#main-nav">声明文件</a>
                            <ul className="collapse" id="toc-declaration-files" aria-expanded="false"
                                style={{height: '12px'}}>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/declaration-files/introduction.html">介绍</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/declaration-files/library-structures.html">结构</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/declaration-files/by-example.html">举例</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/declaration-files/do-s-and-don-ts.html">规范</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/declaration-files/deep-dive.html">深入</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/declaration-files/templates.html">模板</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/declaration-files/publishing.html">发布</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/declaration-files/consumption.html">使用</a>
                                </li>
                            </ul>
                        </li>
                        <li className="panel collapsed">
                            <a className="area collapsed" aria-expanded="false" href="#toc-project-config"
                               data-toggle="collapse" data-parent="#main-nav">项目配置</a>
                            <ul className="collapse" id="toc-project-config" aria-expanded="false"
                                style={{height: '12px'}}>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/tsconfig-json.html">tsconfig.json</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/error.html">错误信息列表</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/compiler-options.html">编译选项</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/project-references.html">项目引用</a></li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/compiler-options-in-msbuild.html">MSBuild编译选项</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/integrating-with-build-tools.html">构建工具集成</a>
                                </li>
                                <li className="toc-item"><a
                                    href="https://www.tslang.cn/docs/handbook/nightly-builds.html">每日构建</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="xs-toc-container visible-xs visible-sm">
                    <nav className="xs-toc">
                        <div className="toc-dropdown"><a className="btn btn-primary btn-sm dropdown-toggle"
                                                         data-toggle="dropdown" href="#">文档目录 <span
                            className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="panel selected">
                                    <a className="docs-home active" href="https://www.tslang.cn/docs/home.html">文档简介</a>
                                </li>
                                <li>
                                    <ul>
                                        <h2>辅导教程</h2>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html">5 minute to download source</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/asp-net-core.html">ASP.NET
                                            Core</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/gulp.html">Gulp</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/migrating-from-javascript.html">JavaScript迁移</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/react-&amp;-webpack.html">React &amp; Webpack</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <h2>文档版本</h2>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-3.1.html">TypeScript
                                            3.1</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-3.0.html">TypeScript
                                            3.0</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-2.9.html">TypeScript
                                            2.9</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-2.8.html">TypeScript
                                            2.8</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-2.7.html">TypeScript
                                            2.7</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-2.6.html">TypeScript
                                            2.6</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-2.5.html">TypeScript
                                            2.5</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-2.4.html">TypeScript
                                            2.4</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-2.3.html">TypeScript
                                            2.3</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-2.2.html">TypeScript
                                            2.2</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-2.1.html">TypeScript
                                            2.1</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-2.0.html">TypeScript
                                            2.0</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-1.8.html">TypeScript
                                            1.8</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-1.7.html">TypeScript
                                            1.7</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-1.6.html">TypeScript
                                            1.6</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-1.5.html">TypeScript
                                            1.5</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-1.4.html">TypeScript
                                            1.4</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-1.3.html">TypeScript
                                            1.3</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/release-notes/typescript-1.1.html">TypeScript
                                            1.1</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <h2>手册指南</h2>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/basic-types.html">基础类型</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/variable-declarations.html">变量声明</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/interfaces.html">接口</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/classes.html">类</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/functions.html">函数</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/generics.html">泛型</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/enums.html">枚举</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/type-inference.html">类型推论</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/type-compatibility.html">类型兼容性</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/advanced-types.html">高级类型</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/symbols.html">Symbols</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/iterators-and-generators.html">迭代器和生成器</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/modules.html">模块</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/namespaces.html">命名空间</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/namespaces-and-modules.html">命名空间和模块</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/module-resolution.html">模块解析</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/declaration-merging.html">声明合并</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/jsx.html">JSX</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/decorators.html">装饰器</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/mixins.html">Mixins</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/triple-slash-directives.html">三斜线指令</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/type-checking-javascript-files.html">JavaScript文件类型检查</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <h2>声明文件</h2>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/declaration-files/introduction.html">介绍</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/declaration-files/library-structures.html">结构</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/declaration-files/by-example.html">举例</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/declaration-files/do-s-and-don-ts.html">规范</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/declaration-files/deep-dive.html">深入</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/declaration-files/templates.html">模板</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/declaration-files/publishing.html">发布</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/declaration-files/consumption.html">使用</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <h2>项目配置</h2>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/tsconfig-json.html">tsconfig.json</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/error.html">错误信息列表</a></li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/compiler-options.html">编译选项</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/project-references.html">项目引用</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/compiler-options-in-msbuild.html">MSBuild编译选项</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/integrating-with-build-tools.html">构建工具集成</a>
                                        </li>
                                        <li className="toc-item"><a
                                            href="https://www.tslang.cn/docs/handbook/nightly-builds.html">每日构建</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
            <div className="col-md-9 col-xs-12 col-sm-12 doc-content-container">
                <header className="post-header">
                    <h1 className="post-title">文档简介</h1>
                </header>
                <article className="post-content">
                    <p>学习有关TypeScript的所有知识。</p>
                    <h2 id="new-to-typescript">gains new hand？</h2>
                    <ul>
                        <li>查看<a
                            href="https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html">5 minute to download source</a>
                        </li>
                        <li>从具体框架的<a href="/samples/index.html">快速入门指南</a>开始使用</li>
                    </ul>

                    <h2 id="already-familiar-with-typescript">gains熟悉使用者？</h2>
                    <ul>
                        <li>查看<a href="https://www.tslang.cn/docs/release-notes/typescript-3.1.html">最新gains版本</a>的新特性
                        </li>
                        <li>深入学习研究<a href="https://www.tslang.cn/docs/handbook/basic-types.html">gains手册指南</a></li>
                        <li>阅读<a
                            href="https://www.tslang.cn/docs/handbook/declaration-files/introduction.html">.d.ts创建指南</a>
                        </li>
                    </ul>

                    <p>找不到你想要的知识吗？<a href="https://www.surveymonkey.com/r/SN9V7R7">告诉我们</a> ，我们可以更好地帮助你！</p>
                </article>
            </div>
        </div>
    </div>
}

export default Document
