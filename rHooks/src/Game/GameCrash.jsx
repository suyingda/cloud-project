import React from 'react'
import './GameCrash.css'

export default function GameCrash() {
    const getStyle = (obj, attr) => {
        console.log(obj.currentStyle, getComputedStyle(obj, false))
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr]
    }
    const getBallClass = () => {
        /**
         * todo
         * exec
         * @type {Element}
         */
        const getDomeOne = document.querySelector('.ball-1')
        const getStr = getStyle(getDomeOne, 'left');
        const patt = new RegExp(/\d+/, 'g');
        const getPoLeft = patt.exec(getStr);
        console.log(Number(getPoLeft), 'xxx', getPoLeft)
        const changeLeft = Number(getPoLeft);
        getDomeOne.style.left = changeLeft + 100 + 'px'
    }
    return <div className={'ball'}>
        <div onClick={() => {
            getBallClass()
        }} className={'ball-1'}>

        </div>
        <div className={'ball-2'}>

        </div>
    </div>

}
