import React from 'react';
import {useNavigate} from "react-router-dom";
import {BackgroundWrap,IconWrap,FooterWrap} from "../styles/EndStyle";
import Logo from '../assets/icons/logo.png';


function Congratulation() {

    const navigate = useNavigate()

    const onClickPageMove = () => {
        navigate('/home');
    }

    return (
        <BackgroundWrap>
            <IconWrap>
                <img alt='logo' src={Logo}/>
                <div className='text-container'>
                    <p className='text'>Congratulation!</p>
                    <p className='second-text'>Find clothes <strong>suitable</strong> for the<br/>
                        temperature of your location <strong>Right Now!</strong></p>
                </div>
            </IconWrap>
            <FooterWrap onClick={onClickPageMove}>
                <div>Next</div>
            </FooterWrap>
        </BackgroundWrap>
    )
}


export default Congratulation;