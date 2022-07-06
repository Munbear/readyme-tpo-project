import React from 'react';
import styled from "styled-components";

interface SelectorWrapProp {
    isChecked:boolean
    onActive:string[]
}

export const Header = styled.header`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  height: 52px;

  span {
    position: relative;
    top: 13px;
  }

  img {
    width: 8px;
    cursor: pointer;
    position: relative;
    right: 108px;
    top: 13px;
  }
`;

export const SettingTitle = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 236px;
    
    .title{
        font-size: 12px;
        font-weight: bold;
    }
    
    .set-count {
        font-size: 12px;
        color: #838383;
        
    }
`;

export const SelectStyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyleOptions = styled.div<SelectorWrapProp>`
  margin: 10px;
  width: 335px;
  height: 48px;
  background-color: #F9F9F9;
  border-radius: 100px;
  cursor: pointer;


  .check-box {
    width: 16px;
    position: relative;
    top: 32%;
    left: 0.5%;
    visibility: ${props => props.isChecked ? 'visible' : 'hidden'};
  }

  .empty-box {
    width: 16px;
    position: relative;
    top: 32%;
    left: 5%;
    visibility: visible;
  }


  span {
    color: ${props => props.isChecked ? '#000000' : '#9d9d9d'};
    position: relative;
    top: 13.7px;
    left: 16px;
  }
`
export const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${props => props.onActive ? '#3A3F45' : '#dfdfdf'};
  border-radius: 100px;
  width: 80%;
  height: 52px;
  position: fixed;
  bottom: 40px;
  cursor: pointer;

  div {
    position: relative;
    font-size: 18px;
    color: white;
    top: 16px;
  }
`;