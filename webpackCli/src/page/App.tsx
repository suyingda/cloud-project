import * as React from "react";

import {Header} from './header'

let list: object[] = [{
    type: 'Header',
    content: 'xxxx'
}];
let Obj: any = {
    'header': Header
};


export function App() {
    return <div>
        {
            list.map((items: any, i: number) => {
                const Tel = Obj[items.type];
                return <Header key={i} {...items}/>
            })
        }
    </div>
}



