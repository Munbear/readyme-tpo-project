import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Header,SettingTitle,InputContainer} from "../styles/GenderStyle";
import backBtn from '../assets/icons/back-icon.png';
import SetGender from '../components/SetGender';

interface Gender {
    gender:string
    changeGender: (value:string) => void
}


function SettingGender({gender,changeGender}: Gender) {
    const navigate = useNavigate();

    const GENDER = {
        male: 'Male',
        female: 'Female',
    };

    const onClickHandler = () => {
        if (gender === GENDER.male || gender === GENDER.female) {
            navigate('/setting/style');
        } else {
            alert('성별을 선택해 주세요')
        }
    };

    return (
        <div>
            <Header>
                <img src={backBtn} alt='backButton'/>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span className='title'>Gender</span>
                <span className='set-count'>1/4</span>
            </SettingTitle>
            <InputContainer>
              <SetGender gender={gender} changeGender={changeGender}/>
                {
                    gender === GENDER.male || gender === GENDER.female ?
                        <footer onClick={onClickHandler} aria-hidden='true' style={{backgroundColor: '#3A3F45'}}>
                            <span>Next</span>
                        </footer> : <footer onClick={onClickHandler} aria-hidden='true'>
                            <span>Next</span>
                        </footer>
                }
            </InputContainer>
        </div>
    );
}

export default SettingGender;