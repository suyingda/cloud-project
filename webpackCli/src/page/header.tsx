import React from "react";
import Ls from './style.css';
import Less from './style.less';
import Logo from './../images/1.png';
 
export function Header(props: object) {
    // const { content } = props || {};
    return <div
        className={Ls.classcss}
    >
        1
        {/* {content} */}
        {/* <div className={'lessClassTest'}>
            less
        </div>*/}
        <div className={Less.styleLess}>
            Less
        </div>
        <img src={Logo} alt={Logo} />
    </div>
}



