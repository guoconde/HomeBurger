import React, { useEffect, useState } from 'react';
import { listAll } from '../../services/itemsServices';

export default function Combo() {
  const [combo, setCombo] = useState([]);

  useEffect(() => {
    async function loadPage() {
      const promisse = await listAll();

      const comboFiltered = promisse.filter((el) => el.type === 'bebida');

      setCombo(comboFiltered);
    }

    loadPage();
  }, []);

  if (combo.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      {combo.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
        </div>
      ))}
    </>
  );
}
