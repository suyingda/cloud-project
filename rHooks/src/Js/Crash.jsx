import React, {useEffect} from 'react';
import './index.css'

function utils(value) {
    const _RegExp = new RegExp(/\d+/, 'g');
    const getData = _RegExp.exec(value);
    if (getData) {
        return Number(getData[0])
    }
    return 0;

}

let speedX = 2;
let speedY = 0;
let status = false;

function resolution_Of_force(getX, getY, getCos) {
    const MathCos = getX / getCos;
    const MathSin = getY / getCos;
    var s1 = MathCos * speedX;
    var s2 = MathSin * speedX;
    var s11 = MathCos * s1;
    var s12 = MathSin * s1;
    var s21 = MathSin * s2;
    var s22 = MathCos * s2;
    // speedX = (s11 - s21) * -1;
    speedX = -2;
    speedY = s12 + s22;
    console.log('speedX：' + speedX, 'speedY:' + speedY);
    return {
        speedX, speedY
    }

}

export default function CrashJsx() {
    const setInterVal = () => {
        const getOne = document.querySelector('.carshOne');
        const getTwo = document.querySelector('.carshTwo');
        const f = () => {
            const getTargetLeft = utils(getComputedStyle(getOne)["left"]);
            const getTargetTop = utils(getComputedStyle(getOne)["top"]) + utils(getComputedStyle(getOne)["height"]) / 2;
            const getFixActionTop = utils(getComputedStyle(getTwo)["top"]) + utils(getComputedStyle(getTwo)["height"]) / 2;
            const getFixActionLeft = utils(getComputedStyle(getTwo)["left"]) + utils(getComputedStyle(getOne)["width"]) / 2;
            if (status) {
                if (utils(getOne.style.top) < getFixActionTop) {
                    speedY = -speedY;
                } else {
                    speedY = Math.abs(speedY);
                }
            }else{
                if (!utils(getOne.style.top)) {
                    console.log('撞墙了top')
                    speedY = -speedY
                    console.log(utils(getOne.style.top),'utils(getOne.style.top)')
                } else if (!utils(getOne.style.left)) {
                    console.log('撞墙了left')
                    speedX = -speedX

                }
            }

            getOne.style.left = utils(getOne.style.left) ? utils(getOne.style.left) + speedX + 'px' : '1px';
            getOne.style.top = utils(getOne.style.top) ? utils(getOne.style.top) + speedY + 'px' : getTargetTop + 'px';
            const getX = Math.abs(getFixActionLeft - utils(getOne.style.left));
            const getY = Math.abs(getFixActionTop - getTargetTop);
            const getCos = Math.sqrt(Math.pow(getX, 2) + Math.pow(getY, 2));

            requestAnimationFrame(f)
            if (!speedY && getCos < (utils(getComputedStyle(getOne)["width"]) + utils(getComputedStyle(getTwo)["width"])) / 2) {
                status = true
                resolution_Of_force(getX, getY, getCos)
            } else {
                status = false
            }
        };
        f()
    };
    useEffect(() => {
        setInterVal()
    }, [])
    return <div className={'carsh'}>
        <div className={'carshOne'}></div>
        <div className={'carshTwo'}></div>

        {/*    // 对speedX分解得到的两个速度
        var s1 = Math.cos(deg) * speedX var s2 = Math.sin(deg) * speedX

        // 对s1进行水平和垂直分解 var s11 = Math.cos(deg) * s1 var s12 = Math.sin(deg) * s1

        // 对s2进行水平和垂直分解 var s21 = Math.sin(deg) * s2 var s22 = Math.cos(deg) * s2 // 最终的叠加的水平速度和垂直速度 speedX = (s11 - s21) * -1 speedY = s12 + s22*/}
    </div>
}
