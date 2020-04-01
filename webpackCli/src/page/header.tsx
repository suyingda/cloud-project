import React from "react";
import Ls from './style.css';
import Less from './style.less';
import Logo from './../images/1.png';
import ddc from './../assets/对讲机.png';

console.log(Logo, '\n', ddc);

export function Header(props: any) {
    const {content} = props || {};
    return <div
        className={Ls.classcss}
    >

        {content}
        {/* <div className={'lessClassTest'}>
            less
        </div>*/}
        <div className={Less.styleLess}>
            考核

        </div>
        <img src={Logo} alt={Logo}/>
        <img src={ddc} alt={ddc}/>
    </div>
}



