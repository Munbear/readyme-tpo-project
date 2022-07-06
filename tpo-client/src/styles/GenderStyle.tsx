import React from 'react';
import styled from "styled-components";
import { FONT_STYLES } from '../styles/font-style';
import COLORS from '../styles/colors'

interface SelectorWrapProp {
    isChecked: boolean;
}

export const Header = styled.header`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  // ${FONT_STYLES.M_16}
  height: 52px;

  span {
    position: relative;
    top: 13px;
  }

  img {
    width: 8px;
    position: relative;
    right: 108px;
    top: 13px;
  }
`;

export const SettingTitle = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 140px;
    
    .title {
        font-size: 12px;
        font-weight: bold;
        position: relative;
        left: -40px;
    }
    
    .set-count {
        font-size: 12px;
        color: #838383;
    }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  padding: 13px 16px;
  gap: 8px;

  footer {
    position: fixed;
    bottom: 40px;
    background-color: #dfdfdf; //
    color: white;
    border-radius: 30px;
    width: 80%;
    height: 60px;
    cursor: pointer;

    span {
      font-size: 18px;
      position: relative;
      top: 20px;
    }
  }
`;

export const SelectorWrap = styled.div<SelectorWrapProp>`
  width: 164px;
  height: 40px;
  background-color: #F9F9F9;
  border-radius: 30px;
  cursor: pointer;

  .check-box {
    width: 16px;
    visibility: ${(props) => props.isChecked ? 'visible' : 'hidden'};
    position: relative;
    top: 30%;
    right: 30%;
  }

  .empty-circle {
    width: 16px;
    visibility: visible;
    position: relative;
    top: 30%;
    right: 20%;
  }

  span {
    color: ${props => props.isChecked ? '#000000' : '#9d9d9d'};
    position: relative;
    top: 9.5px;
    right: 32px;
  }
`;