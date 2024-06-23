import { useEffect, useState } from 'react';
import { Country } from '../models/Country';
import { CountryCard } from '../components/countries/CountryCard';
import { Header } from '../components/Header';
import { getAllCountries } from '../services/CountriesService';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  const fetchAllCountries = async () => {
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
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Countries };
