import React, { useState, useEffect } from 'react';
import DateFact from './numbers';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1989-10-30T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 7,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=1Um9eEc5kcRFBTV5fOHhC8uzNdhQl0no&ll=36.70651832810303%2C-60.14264152524834&z=3',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Thornhill, ON',
  },
  {
    key: 'date-fact',
    label: 'A fun fact about today',
    value: <DateFact />,
  },
];

export default data;
