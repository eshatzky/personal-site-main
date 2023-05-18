import React, { useState, useEffect } from 'react';

const DateFact = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    const url = `http://numbersapi.com/${month}/${day}/date`;

    fetch(url)
      .then((response) => response.text())
      .then((data) => setFact(data))
      .catch((error) => console.error(error));
  }, []);

  return <>{fact}</>;
};

export default DateFact;
