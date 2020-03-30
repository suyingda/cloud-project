import * as React from "react";


export function Header(props: object) {
    console.log(props);
    const {content} = props || {};
    return <>
        {content}
    </>
}



