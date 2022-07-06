import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgData from '../utils/imgData'
import backBtn from '../assets/icons/back-icon.png';
import dummyImg from '../assets/img-dummy-card.png';
import ImgData from '../utils/imgData';



export const HeaderWrap = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  height: 52px;
  margin-top: 20px;

  span {
    position: relative;
    top: 13px;
  }

  img {
    width: 8px;
    position: relative;
    right: 144px;
    top: 13px;
    cursor: pointer;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 12px;
  
  img {
    width: 108px;
    height: 144px;
    border-radius: 4px;
    background-color: darkturquoise;
    margin: 2px;
  }
`;


function MoreContents() {

  const navigate = useNavigate()
  const testFuc = () => {
    console.log('hello world');
  }

  return(
    <div>
      <HeaderWrap>
        <img src={backBtn} alt='backButton' onClick={ () => {
          navigate(-1)

        }} onKeyDown={testFuc}/>
        <span>Top</span>
      </HeaderWrap>
      <CardContainer>
        {ImgData.map( (obj) => {
          return(
            <img src={obj.img} alt='dummy-img'/>
          )
        })}
      </CardContainer>
    </div>
  )
}

export default MoreContents;