import React from 'react';
import Instrument from './Instrument';

const Home = () => {
  const dummyList = [
    {
      id: 0,
      userid: 21,
      name: 'Violen1',
      description: 'FUN TO LEARN - This mini toy violin teaches children the basics of playing violin to prepare them for a lifetime of music education and appreciation. It is not only fun, it also helps them to learn tone, rhythm and even hand-eye coordination. KID SIZED - The toy violin is the perfect size for your future musician. It features a small and light plastic body that is easy for little ones to handle. The 4 strings produce musical sounds when pressed so that little ones can pretend to play songs. REALISTIC LOOK - Kids will love the fact that this looks and feels just like a real violin! This fun kid’s violin features adjustable strings that play notes when pressed down, and the body has a woodgrain look and comes with a bow.',
      image: 'https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2020/09/German_maple_Violin-scaled.jpeg?fit=703%2C768&quality=100&strip=all&ssl=1',
      category: 'String Instrument',
      quantity: 1,
      price: 22,
    },
    {
      id: 1,
      userid: 22,
      name: 'Violen2',
      description: 'FUN TO LEARN - This mini toy violin teaches children the basics of playing violin to prepare them for a lifetime of music education and appreciation. It is not only fun, it also helps them to learn tone, rhythm and even hand-eye coordination. KID SIZED - The toy violin is the perfect size for your future musician. It features a small and light plastic body that is easy for little ones to handle. The 4 strings produce musical sounds when pressed so that little ones can pretend to play songs. REALISTIC LOOK - Kids will love the fact that this looks and feels just like a real violin! This fun kid’s violin features adjustable strings that play notes when pressed down, and the body has a woodgrain look and comes with a bow.',
      image: 'https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2020/09/German_maple_Violin-scaled.jpeg?fit=703%2C768&quality=100&strip=all&ssl=1',
      category: 'String Instrument',
      quantity: 1,
      price: 22,
    },
    {
      id: 2,
      userid: 23,
      name: 'Violen3',
      description: 'FUN TO LEARN - This mini toy violin teaches children the basics of playing violin to prepare them for a lifetime of music education and appreciation. It is not only fun, it also helps them to learn tone, rhythm and even hand-eye coordination. KID SIZED - The toy violin is the perfect size for your future musician. It features a small and light plastic body that is easy for little ones to handle. The 4 strings produce musical sounds when pressed so that little ones can pretend to play songs. REALISTIC LOOK - Kids will love the fact that this looks and feels just like a real violin! This fun kid’s violin features adjustable strings that play notes when pressed down, and the body has a woodgrain look and comes with a bow.',
      image: 'https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2020/09/German_maple_Violin-scaled.jpeg?fit=703%2C768&quality=100&strip=all&ssl=1',
      category: 'String Instrument',
      quantity: 1,
      price: 22,
    },
  ];

  return (
    <div>
      <h1>🎵🎶🎼 INSTRUMENTS 🎵🎶🎼</h1>
      <h3>Please select an instrument</h3>

      {dummyList.map((instrument) => (
        <Instrument
          key={instrument.id}
          name={instrument.name}
          id={instrument.id}
          description={instrument.description}
          image={instrument.image}
          category={instrument.image}
          price={instrument.image}
        />
      ))}
    </div>
  );
};

export default Home;
