import React from 'react'
import { useNavigate } from 'react-router-dom';
import {HeaderWrap,SettingWrap, TextWrap} from '../styles/SettingStyle';
import backBtn from '../assets/icons/back-icon.png';
import nextBtn from '../assets/icons/next-icon.png';


function Setting() {

  const navigate = useNavigate();

  const testFunction = () => {
    console.log('hello world');
  }

  return(
    <div>
      <HeaderWrap>
        <img src={backBtn} alt='backButton' onClick={ () => {
          navigate(-1)

        }} onKeyDown={testFunction} />
        <span>Setting</span>
      </HeaderWrap>
      <SettingWrap>
        <ul>
          <span>My</span>
          <li>Email</li>
          <li onClick={ () => {
            navigate('usersetting')
          }} onKeyDown={testFunction}>
            User Setting
            <img src={nextBtn} alt='nextButton' className='setting-button'/>
          </li>
          <li onClick={ () => {
            navigate('location')
          }} onKeyDown={testFunction}>
            Location
            <img src={nextBtn} alt='nextButton' className='location-button' />
          </li>
        </ul>
      </SettingWrap>
      <TextWrap>
        <ul>
          <span>Privacy</span>
          <li>
            Terms of Service
            <img src={nextBtn} alt='nextButton' className='terms-button'/>
          </li>
          <li>
            Privacy Policy
            <img src={nextBtn} alt='nextButton' className='policy-button'/>
          </li>
          <li>
            Open source attributions
            <img src={nextBtn} alt='nextButton' className='attributions-button'/>
          </li>
          <li>App version</li>
        </ul>
      </TextWrap>
    </div>
  )
}

export default Setting