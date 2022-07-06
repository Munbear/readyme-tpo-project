import React from 'react';
import styled from "styled-components";


export const Container = styled.div`
  
  .name-section {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
    input {
      border-radius: 100px;
      width: 300px;
      height: 36px;
      background-color: #f9f9f9;
      border: none;
      outline: none;
      padding-left: 20px;
    }
  }
  .gender-section {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .style-section {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }

  .time-section {
    position: relative;
    right: 20px;
    margin-top: 20px;
  }
  
  .footer-button {
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
    background-color: #3A3F45;
    border-radius: 100px;
    width: 100%;
    height: 52px;
    bottom: 40px;
    cursor: pointer;

    div {
      position: relative;
      font-size: 18px;
      color: white;
      top: 16px;
    }
  }
`;

export const Header = styled.div`
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