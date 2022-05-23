import React, { useEffect, useState } from 'react';
import { listAll } from '../../services/itemsServices';

export default function Portions() {
  const [portion, setPortion] = useState([]);

  useEffect(() => {
    async function loadPage() {
      const promisse = await listAll();

      const portionFiltered = promisse.filter((el) => el.type === 'bebida');

      setPortion(portionFiltered);
    }

    loadPage();
  }, []);

  if (portion.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      {portion.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
        </div>
      ))}
    </>
  );
}
