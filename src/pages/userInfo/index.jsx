import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/cartHook';
import { sendOrder } from '../../services/ordersServices';
import Header from '../header';

export default function UserInfo() {
  const { cart, newCart } = useCart();
  const navigate = useNavigate();
  const [info, setInfo] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // function handleAdress(data) {
  //   setInfo(data);
  // }

  function handleCancel() {
    const cancel = window.confirm('Você realmente deseja cancelar o pedido?');

    if (!cancel) return;

    newCart();
    navigate('/home');
  }

  async function handleOrder(data) {
    const order = await cart.map((el) => {
      let orderMessage = '';
      const message = `${el.quantity} ${el.name}`;

      orderMessage += message;

      return orderMessage;
    });

    let message = `
      Olá, gostaria de fazer o pedido:
      ${order.join(', ')}
      Nome: ${data.name}
      Endereço: ${data.adress}
      Pagamento: ${data.payment}
    `;

    message = encodeURIComponent(message);
    const number = process.env.REACT_APP_NUMBER;

    const whatsapp = `http://wa.me/${number}?text=${message}`;
    // window.open(whatsapp, '_blank');

    // await sendOrder({ ...data, item: cart });

    window.alert('Pedido realizado com sucesso!');
    newCart();
    navigate('/home');
  }

  const onSubmit = (data) => handleOrder(data);

  return (
    <>
      <Header />
      <Container
        sx={{
          marginTop: '20px',
        }}
      >
        <Paper
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography
            fontSize='large'
            fontWeight='bold'
            sx={{
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '10px',
              marginTop: '10px',
            }}
          >
            Informações para entrega:
          </Typography>
          <Container>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <TextField
                error={!!errors.name}
                label='Nome'
                variant='outlined'
                {...register('name', { required: true })}
              />
              <TextField
                error={!!errors.adress}
                label='Endereço'
                variant='outlined'
                {...register('adress')}
              />
              <Select
                {...register('payment')}
                label='Tipo'
                defaultValue='dinheiro'
                sx={{ width: '235px' }}
              >
                <MenuItem value='credito'>Crédito</MenuItem>
                <MenuItem value='debito'>Débito</MenuItem>
                <MenuItem value='dinheiro'>Dinheiro</MenuItem>
                <MenuItem value='pix'>Pix</MenuItem>
              </Select>
            </Box>
          </Container>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: 1,
              marginTop: '10px',
            }}
          >
            <Button
              type='submit'
              onClick={() => handleOrder()}
              sx={{ width: '100%' }}
              variant='contained'
              color='success'
            >
              pedir
            </Button>
            <Button
              onClick={() => handleCancel()}
              sx={{ width: '100%' }}
              variant='contained'
              color='error'
            >
              Cancelar
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
