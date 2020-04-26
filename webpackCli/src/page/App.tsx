import * as React from "react";

// import {Header} from './Head/header'
import Header from './Head/header'
import TBody from './Body/index'
import styles from './style.less'

let list: object[] = [{
    type: 'Header',
    content: 'xxxx'
}];
let Obj: any = {
    'header': Header
};


export function App() {
    return <div className={styles.app}>
        <Header/>
        <TBody/>
        {/*  {
            list.map((items: any, i: number) => {
                const Tel = Obj[items.type];
                return <Header key={i} {...items}/>
            })
        }*/}
    </div>
}


