import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import COLORS from '../../styles/colors'
import { FONT_STYLES } from '../../styles/font-style';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const DoneBtn = styled.button`
  width: 335px;
  height: 56px;
  background-color: ${COLORS.MainGray000};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 42px;
`;

const DoneText = styled.div`
  color: ${COLORS.White}
`;

function Location() {
  const [address, setAddress] = useState('');
  // const [isOpen, setIsOpen] = useState(false);

  const onHandleComplete = (data) => {
    console.log(data.address);
    setAddress(data.address);
  };


  return (
    <Wrapper>
    <div>
      <DaumPostcode 
        onComplete={onHandleComplete}
        style={{
          zIndex: "100",
          width: "90vw",
          height: "90vh",
        }}
        autoClose
        alwaysShowEngAddr
      />
    </div>
      <DoneBtn>
        <DoneText>Done</DoneText>
      </DoneBtn>
    </Wrapper>
  )
}

export default Location;