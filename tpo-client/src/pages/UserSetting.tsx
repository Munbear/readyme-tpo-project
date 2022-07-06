import React from 'react'
import {useNavigate} from "react-router-dom";
import SetGender from "../components/SetGender";
import SetStyle from "../components/SetStyle";
import {SetTime} from "../components/SetTime";
import {Container, Header} from "../styles/MyPageStyle";
import backBtn from "../assets/icons/back-icon.png";

interface PropsData {
  gender: string
  changeGender: (value: string) => void
  myStyle: string[]
  changeStyle: (value: string[]) => void
  startTime: (value: number) => void
  endTime: (value: number) => void
  minVal: number,
  maxVal: number,
  min:number,
  max:number,
  userName:string
  getUserName: (value: string) => void
}

function UserSetting({gender,changeGender,myStyle,changeStyle,startTime,endTime,minVal,maxVal,min,max,userName,getUserName} : PropsData) {

    const navigate = useNavigate()

    const goBackPage = () => {
        navigate(-1)
    }

    return(
        <Container>
            <Header>
                <img src={backBtn} alt='backButton' onClick={ () => {
                    goBackPage()
                }} onKeyDown={goBackPage}/>
                <span>User Setting</span>
            </Header>
            <div className='name-section'>
              <input type='text' placeholder='Name' onChange={ (e) => {
                const getValue = e.target.value
                getUserName(getValue)
              }}/>
            </div>
            <div className='gender-section'>
                <SetGender gender={gender} changeGender={changeGender}/>
            </div>
            <div className='style-section'>
                <SetStyle myStyle={myStyle} changeStyle={changeStyle}/>
            </div>
            <div className='time-section'>
                <SetTime minVal={minVal} maxVal={maxVal} startTime={startTime} endTime={endTime} min={0} max={24}/>
            </div>
            <div className='footer-button'>
                <footer>
                    <div>Done</div>
                </footer>
            </div>
        </Container>
    )
}

export default UserSetting;