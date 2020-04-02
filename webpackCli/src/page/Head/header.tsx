import React from "react";
import styles from './header.less';
console.log(styles);
// import Logo from '../../images/1.png';
// import ddc from '../../assets/对讲机.png';

// console.log(Logo, '\n', ddc);

export default function Header(props: any) {

    return <div
        className={styles.container}
    >
        <h1>
            2020年经济飞速增长
        </h1>
    </div>
}



