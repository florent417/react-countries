import { useEffect, useState } from 'react';
import { Country } from '../models/Country';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { getAllCountries } from '../services/CountriesService';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([] as Country[]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    const countries = await getAllCountries();

    setCountries(countries);
  };

  return (
    <>
      <Header />
      <select className="bg-white">
        <option value="" disabled selected hidden>
          Select your option
        </option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <div className="flex justify-center">
        <div className="flex justify-between flex-wrap gap-x-8 gap-y-16 w-11/12">
          {countries.map((country) => (
            <Card key={country.name} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Countries };
