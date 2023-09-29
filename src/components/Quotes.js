import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      method: 'GET',
      headers: { 'X-Api-Key': 'WZeFsTkEbc8oAfF/xCApuQ==MomspVErh9W30zPP' },
    })
      .then((response) => response.json())
      .then((quote) => {
        setQuote(quote[0].quote);
        console.log(quote);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="quote">
      <h2>Daily inspiration</h2>
      {quote && <p>{quote}</p>}
    </div>
  );
};

export default Quotes;
