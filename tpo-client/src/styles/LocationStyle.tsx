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
    right: 98px;
    top: 13px;
  }
`;

export const SettingTitle = styled.div`
  margin: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 220px;

  .title{
    font-size: 12px;
    font-weight: bold;
  }

  .set-count {
    font-size: 12px;
    color: #838383;

  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 16px;

  .search-bar {
    padding-left: 40px;
    border-radius: 100px;
    border: none;
    width: 300px;
    height: 40px;
    background-color: #F9F9F9;
    outline: none;
  }

  .search-icon {
    width: 16px;
    height: 16px;
    color: #656565;
    position: relative;
    left: 34px;
    top: 13.5px;
  }

  .delete-btn {
    width: 16px;
    height: 16px;
    color: #656565;
    position: relative;
    right: 30px;
    top: 12.5px;
    cursor: pointer;
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