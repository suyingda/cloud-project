import React, {Component} from 'react';
import styles from './bigPage.scss'

class BigPage extends Component {
    render() {
        return <div className={styles.superPageComponent}>
            <header className={styles.superPageHead}>head</header>
            <div className={styles.superPage}>
                <article className={styles.superPageLeftClassName}>
                    <aside className={styles.leftAsideT}>
                        <div>今日执法</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </aside>
                    {/*<aside>人员信息</aside>*/}
                    <aside className={styles.leftAsideB}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </aside>
                </article>
                <div className={styles.superPageMiddleClassName}>
                    {/*<header className={styles.superPageMiddleHeader}>top</header>*/}
                    <main className={styles.superPageMiddleMain}>map</main>
                    <footer className={styles.superPageMiddleFooter}>bottom</footer>
                </div>
                <article className={styles.superPageRightClassName}>
                    <aside className={styles.superPageRightClassNameT}>勤务</aside>
                    <aside className={styles.superPageRightClassNameB}>xxx</aside>
                </article>
            </div>
        </div>
    }
}

export default BigPage;