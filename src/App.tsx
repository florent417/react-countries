import { useEffect, useState } from 'react';
import axios from 'axios';
import { Country } from './models/Country';
import { Card } from './components/Card';
import { Header } from './components/Header';

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
      <Header />
      <div className="flex justify-center">
        <div className="flex justify-between flex-wrap gap-x-8 gap-y-16 w-11/12">
          {countries.map((country) => (
            <Card key={country.name} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
