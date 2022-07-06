import React from 'react';
import {SelectorWrap} from "../styles/GenderStyle";
import emptyCircle from "../assets/icons/empty-circle.png";
import checkCircle from "../assets/icons/circle-icon.png";

interface GenderState {
    gender : string,
    changeGender : (value: string) => void;
}

function SetGender({gender, changeGender}: GenderState) {

    return (
        <>
            {['Male', 'Female'].map((obj) => {
                return (
                    <SelectorWrap onClick={() => {
                        changeGender(obj)
                    }} isChecked={gender === obj}>
                        <img src={emptyCircle} alt='check-icon' className='empty-circle'/>
                        <img src={checkCircle} alt='check-icon' className='check-box'/>
                        <span>{obj}</span>
                    </SelectorWrap>
                );
            })
            }
        </>
    )
}

export default SetGender;

