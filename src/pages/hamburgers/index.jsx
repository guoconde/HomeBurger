import { Box, Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listAll } from '../../services/itemsServices';

export default function Hamburgers() {
  const [hamburger, setHamburger] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPage() {
      const promisse = await listAll();

      const hamburgerFiltered = promisse.filter(
        (el) => el.type === 'hamburger'
      );

      setHamburger(hamburgerFiltered);
    }

    loadPage();
  }, []);

  function handleNavigate(id, path) {
    navigate(`/${path}/${id}`, { state: { id } });
  }

  if (hamburger.length === 0) return <h1>Loading...</h1>;

  return (
    <Container
      sx={{
        width: '100%',
        height: '110px',
        display: 'flex',
        overflow: 'scroll',
        gap: 1,
      }}
    >
      {hamburger.map((el) => (
        <Paper
          key={el.id}
          sx={{
            width: '170px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            padding: 2,
          }}
          onClick={() => handleNavigate(el.id, 'hamburger')}
        >
          <img src={el.picture} alt={el.name} width={50} height={50} />
          <Box>
            <Typography>{el.name}</Typography>
            <Typography>
              {el.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            </Typography>
            <Typography>{el.description}</Typography>
          </Box>
        </Paper>
      ))}
    </Container>
  );
}
