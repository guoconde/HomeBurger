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
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../header';

export default function UserInfo() {
  const [info, setInfo] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleAdress(data) {
    setInfo(data);
  }

  console.log(info);
  const onSubmit = (data) => handleAdress(data);

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
                {...register('type')}
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
          <Button
            type='submit'
            sx={{
              display: 'flex',
              gap: 0.5,
              alignItems: 'center',
              color: 'black',
            }}
          >
            <ThumbUpAltIcon fontSize='large' color='success' />
            <Typography fontWeight='bold'>Atualizar</Typography>
          </Button>
        </Paper>
      </Container>
    </>
  );
}
