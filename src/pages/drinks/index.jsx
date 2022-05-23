import React, { useEffect, useState } from 'react';
import { listAll } from '../../services/itemsServices';

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function loadPage() {
      const promisse = await listAll();

      const drinksFiltered = promisse.filter((el) => el.type === 'bebida');

      setDrinks(drinksFiltered);
    }

    loadPage();
  }, []);

  if (drinks.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      {drinks.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
        </div>
      ))}
    </>
  );
}
