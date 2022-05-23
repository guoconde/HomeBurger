import React from 'react';
import Combo from '../combos';
import Drinks from '../drinks';
import Hamburgers from '../hamburgers';
import Header from '../header';
import Portions from '../portions';
import Promotions from '../promotions';

export default function Home() {
  return (
    <>
      <Header />
      <div className='animatedFadeIn'>
        <h1>Bebidas:</h1>
        <Drinks />
        <h1>Hamburgers:</h1>
        <Hamburgers />
        <h1>Porções:</h1>
        <Portions />
        <h1>Combo:</h1>
        <Combo />
        <h1>Promoções:</h1>
        <Promotions />
      </div>
    </>
  );
}
