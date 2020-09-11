import * as React from "react";
import * as ReactDOM from "react-dom";
import Classify from './tsProject/ECMAScript'
import {App} from './page/App'
import HomePage from './tsProject'
// const url = Deno.args[0];
// const res = await fetch(url);

// const body = new Uint8Array(await res.arrayBuffer());
// await Deno.stdout.write(body);

Classify()
ReactDOM.render(<>
        <App/>
    </>,
    document.getElementById("root")
);

// example. yarn add @types/webpack.env -D
const Module_ = module as any;
// const Module_ = module;

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
