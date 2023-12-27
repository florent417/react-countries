import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Country } from './models/Country';

function App() {
  const [countries, setCountries] = useState<Country[]>([] as Country[]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get<Country[]>(
      'https://restcountries.com/v3.1/all',
    );

    setCountries(response.data);
  };

  return (
    <>
      <h1>HEllo</h1>
      {countries.map((country) => (
        <div key={country.name.official}>
          <p>{country.name.official}</p>
        </div>
      ))}
    </>
  );
}

export default App;
