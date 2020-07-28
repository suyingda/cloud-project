import * as React from "react";
import * as ReactDOM from "react-dom";

import {App} from './page/App'
import HomePage from './tsProject'


ReactDOM.render(
    <>
        {/*<HomePage/>*/}
        <App/>
    </>,
    document.getElementById("app")
);

// example. yarn add @types/webpack.env -D
const Module_ = module as any;
if (Module_.hot) {
    Module_.hot.accept()
    console.log('进入')
    /*Module_.hot.accept('./page/App', function () {
        console.log('更新了');
        // AppComponent(App(require("../router/router")));
    })*/
} else {
    console.log('未更新')
}
