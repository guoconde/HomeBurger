import {
  Box,
  Button,
  Container,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/cartHook';
import Header from '../header';

export default function Cart() {
  const { cart, newCart } = useCart();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.map((el) => {
      sum += el.quantity * el.price;
    });
    setTotal(sum);
  }, []);

  function handleOrder() {
    navigate('/info');
  }

  function handleCancel() {
    const cancel = window.confirm('Você realmente deseja cancelar o pedido?');

    if (!cancel) return;

    newCart();
    navigate('/home');
  }

  return (
    <>
      <Header />
      <Container>
        <TableContainer
          component={Paper}
          sx={{
            marginTop: '20px',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align='center'>Item</StyledTableCell>
                <StyledTableCell align='center'>Quantidade</StyledTableCell>
                <StyledTableCell align='center'>Valor</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((el) => (
                <StyledTableRow key={el.name}>
                  <StyledTableCell align='center'>{el.name}</StyledTableCell>
                  <StyledTableCell align='center'>
                    {el.quantity}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {(el.price * el.quantity).toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <StyledTableCell colSpan={2} align='center'>
                  Total
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {total.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </StyledTableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: 1,
            marginTop: '10px',
          }}
        >
          <Button
            onClick={() => handleOrder()}
            sx={{ width: '100%' }}
            variant='contained'
            color='success'
          >
            próximo
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
      </Container>
    </>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: '18px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));
