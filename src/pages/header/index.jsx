import { Box, Button, Container, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/cartHook';
import Logo from '../../assets/logomarca.png';

export default function Header() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container
      sx={{
        width: '100%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 1,
      }}
    >
      <img src={Logo} alt='logo' width={50} />
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        {location.pathname === '/home' ? (
          ''
        ) : (
          <Button
            sx={{
              backgroundColor: '#cc3838',
              color: 'white',
              border: '1px solid white',
            }}
            variant='contained'
            onClick={() => navigate('/home')}
          >
            Voltar
          </Button>
        )}
        <ShoppingCartIcon fontSize='large' sx={{ color: 'white' }} />
        {cart.length === 0 ? (
          ''
        ) : (
          <Box
            sx={{
              width: '20px',
              height: '20px',
              backgroundColor: '#cc3838',
              borderRadius: '50%',
              position: 'absolute',
              top: '15px',
              right: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => navigate('/cart')}
          >
            <Typography fontSize='large' fontWeight='bold' color='white'>
              {cart.length}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
