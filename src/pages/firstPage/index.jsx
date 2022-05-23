import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logomarca.png';

export default function FirstPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  }, []);

  return (
    <DivStyled className='animatedFadeOut'>
      <img src={Logo} alt='logo' width={250} />
    </DivStyled>
  );
}

const DivStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
