import React from 'react';
import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  height: 52px;

  span {
    position: relative;
    top: 13px;
  }
;

  img {
    width: 8px;
    cursor: pointer;
    position: relative;
    right: 94px;
    top: 13px;
  }
`;


export const SettingTitle = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 140px;

  .title{
    font-size: 12px;
    font-weight: bold;
  }

  .set-count {
    font-size: 12px;
    color: #838383;

  }
`;

export const SliderWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px;
`;

export const SliderBar = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  .slider {
    position: relative;
    width: 200px;
  }

  .slider-track,
  .slider-range,
  .slider-left-value,
  .slider-right-value {
    position: absolute;
  }

  .slider-track,
  .slider-range{
    border-radius: 3px;
    height: 5px;
    margin-top: 1px;
  }

  .slider-track {
    background-color: #C3C4C5; // 빈색
    width: 100%;
    z-index: 1;
  }

  .slider-range {
    background-color: #3A3F45;//#3A3F45; // 버튼 사이 색
    z-index: 2;
  }

  .slider-left-value,
  .slider-right-value {
    font-size: 16px;
  }

  .slider-left-value {
    left: -40px;
    bottom: -14px;
  }

  .slider-right-value{
    right: -44px;
    bottom: -14px;
  }

  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 200px;
    outline: none;
  }

  .thumb-zindex-3 {
    z-index:3;
  }

  .thumb-zindex-4 {
    z-index: 4;
  }

  .thumb-zindex-5{
    z-index: 5;
  }

  .thumb::-webkit-slider-thumb {
      background-color:#3A3F45; // 버튼 색깔 
      border: none;
      border-radius: 50%;
      cursor: pointer;
      height: 18px;
      width: 18px;
      margin-top: 4px;
      pointer-events: all;
      position: relative;
  }
`;

export const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #3A3F45;
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
