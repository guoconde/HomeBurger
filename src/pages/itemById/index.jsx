import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useLocation, useNavigate } from 'react-router-dom';
import { listOne } from '../../services/itemsServices';
import useCart from '../../hooks/cartHook';
import Header from '../header';

export default function ItemById() {
  const { id } = useLocation().state;
  const navigate = useNavigate();
  const [item, setItem] = useState();
  const [quantity, setQuantity] = useState(0);
  const { cart, insertOnCart } = useCart();

  useEffect(() => {
    async function loadPage() {
      const promisse = await listOne(id);

      setItem(promisse);
    }

    loadPage();
  }, []);

  function handleCart() {
    const data = { quantity, name: item.name, price: item.price };
    if (data.quantity === 0) return;

    insertOnCart(data);

    navigate(-1);
  }

  if (!item) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <Container className='animatedFadeIn'>
        <Paper
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 3,
            padding: 2,
            marginTop: '20px',
          }}
        >
          <img src={item.picture} alt={item.name} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Typography fontSize={20} fontWeight='bold'>
              {item.name}
            </Typography>
            <Typography>{item.description}</Typography>
            <Typography>
              <strong>Preço:</strong>
              {` ${item.price.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })}`}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 5,
                alignItems: 'center',
              }}
            >
              <AddBoxIcon
                color='success'
                onClick={() => setQuantity(quantity + 1)}
                fontSize='large'
              />
              <Typography fontSize='large' fontWeight='bold'>
                {quantity < 0 ? setQuantity(0) : quantity}
              </Typography>
              <IndeterminateCheckBoxIcon
                fontSize='large'
                color='error'
                onClick={() => setQuantity(quantity - 1)}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 5,
                alignItems: 'center',
              }}
            >
              <Typography fontSize='large' fontWeight='bold'>
                Valor Total:
              </Typography>
              <Typography fontSize='large' fontWeight='bold'>
                {(quantity * item.price).toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                })}
              </Typography>
            </Box>
          </Box>
          <Button onClick={() => handleCart()} variant='contained'>
            Adicionar ao carrinho
          </Button>
        </Paper>
      </Container>
    </>
  );
}
