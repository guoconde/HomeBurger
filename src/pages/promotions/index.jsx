import React, { useEffect, useState } from 'react';
import { listAll } from '../../services/itemsServices';

export default function Promotions() {
  const [promotion, setPromotion] = useState([]);

  useEffect(() => {
    async function loadPage() {
      const promisse = await listAll();

      const promotionFiltered = promisse.filter((el) => el.type === 'bebida');

      setPromotion(promotionFiltered);
    }

    loadPage();
  }, []);

  if (promotion.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      {promotion.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
        </div>
      ))}
    </>
  );
}
