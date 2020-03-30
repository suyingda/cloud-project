import * as React from "react";

import './header.css'

export function Header(props: string | object) {
    const {content} = props || {};
    return <div className={'classcss'}>
        {content}
    </div>
}



