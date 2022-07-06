import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Header, SettingTitle, SliderWrap,SliderBar,FooterWrap} from "../styles/TimeStyle";
import backBtn from '../assets/icons/back-icon.png'
import { SetTime } from '../components/SetTime';

interface MultiRangeSliderProps {
    min: number;
    max: number;
    minVal: number;
    maxVal: number;
    startTime: (value: number) => void
    endTime: (value: number) => void
}

function SettingTime({min,max,minVal,maxVal,startTime,endTime}:MultiRangeSliderProps){
    const navigate = useNavigate()

    const onClickHandle = () => {
        navigate('/setting/location');
    }

    return (
        <div>
            <Header>
                <img src={backBtn} alt='backButton' onClick={() => {
                    navigate(-1)
                }} onKeyDown={onClickHandle}/>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span className='title'>Time</span>
                <span className='set-count'>3/4</span>
            </SettingTitle>
            <SliderWrap>
                <SetTime min={0} max={24} minVal={minVal} maxVal={maxVal} startTime={startTime} endTime={endTime} />
                <FooterWrap onClick={onClickHandle}>
                    <div>Next</div>
                </FooterWrap>
            </SliderWrap>
        </div>
    )
}

export default SettingTime;