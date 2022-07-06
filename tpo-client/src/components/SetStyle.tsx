import React from 'react';
import {StyleOptions} from "../styles/StylesSetStyle";
import emptyCircle from "../assets/icons/empty-circle.png";
import checkCircle from "../assets/icons/circle-icon.png";

interface UserStyle {
    myStyle: string[]
    changeStyle: (value:string[]) => void
}

function SetStyle({myStyle,changeStyle}: UserStyle) {

    const styleList = [
        'Casual',
        'Street',
        'Office',
        'Romantic',
        'Sexy/Glamorous',
        'Unique',
        'Unisex'
    ];

    const makeMyStyleList = (item) => {
        if(!myStyle.includes(item)){
            changeStyle( [...myStyle, item])
        } else {
            changeStyle(myStyle.map( n => {return n}).filter( value => value !== item))
        }
    }

    return(
        <div>
            {styleList.map((item,index) => {
                return (
                    <StyleOptions onClick={ () => {
                        makeMyStyleList(item)
                    }} isChecked={myStyle.includes(item)}>
                        <img src={emptyCircle} alt='check-icon' className='empty-box'/>
                        <img src={checkCircle} alt='check-icon' className='check-box'/>
                        <span>{item}</span>
                    </StyleOptions>
                )
            })}
        </div>
    )
}

export default SetStyle;