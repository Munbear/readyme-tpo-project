import React from 'react'
import {useNavigate} from "react-router-dom";
import {Header,SettingTitle,SelectStyledWrapper,FooterWrap} from "../styles/StylesSetStyle";
import backBtn from '../assets/icons/back-icon.png';
import SetStyle from '../components/SetStyle';

interface UserStyle {
    myStyle: string[]
    changeStyle: (value:string[]) => void
}

function SettingStyle({myStyle, changeStyle}: UserStyle ) {

    const navigate = useNavigate();

    const onClickHandler = () => {
        if(myStyle.length >= 1){
            navigate('/setting/time');
        } else {
            alert('하나 이상 선택해 주세요')
        }

    }

    return (
        <div>
            <Header>
                <img src={backBtn} alt='backButton' onClick={() => {
                    navigate(-1);
                }} onKeyDown={onClickHandler}/>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span className='title'>Style</span>
                <span className='set-count'>2/4</span>
            </SettingTitle>
            <SelectStyledWrapper>
                <SetStyle myStyle={myStyle} changeStyle={changeStyle}/>
                <FooterWrap onClick={onClickHandler} onActive={myStyle.length >= 1}>
                    <div>Next</div>
                </FooterWrap>
            </SelectStyledWrapper>
        </div>
    )
}

export default SettingStyle;
