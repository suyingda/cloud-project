import * as React from "react";

// import {Header} from './Head/header'
// import Header from './Head/header'
import TBody from './Body/index'
import styles from './style.less'
import Map from './../map/index'
import Ts from './../tsProject/';
import {useState} from "react";

// let list: object[] = [{
//     type: 'Header',
//     content: 'xxxx'
// }];
// let Obj: any = {
//     'header': Header
// };


export function App() {
    const [count, setCount] = useState(100000);

    const aaaaaa = () => {

        setCount(count + 9999);

        // setTimeout(() => {
        //     debugger
        //     console.log(count)
        // }, 2000)
        debugger;
    }
    return <div className={styles.app} onClick={aaaaaa}>
        6666**{count}
        {/*<Ts/>*/}
        {/*<Map/>*/}
        {/*<Header/>*/}
        {/*<TBody/>*/}
    </div>
}



