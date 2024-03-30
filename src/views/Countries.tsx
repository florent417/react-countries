import { useEffect, useState } from 'react';
import { Country } from '../models/Country';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import {
  getAllCountries,
  getCountriesBySearch,
} from '../services/CountriesService';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([] as Country[]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    if (!searchText && searchText.trim() === '') {
      fetchAllCountries();
    } else {
      fetchSearchedCountries();
    }
  }, [searchText]);

  const fetchAllCountries = async () => {
    const countries = await getAllCountries();

    setCountries(countries);
  };

  const fetchSearchedCountries = async () => {
    const timeOut = setTimeout(async () => {
      const countries = await getCountriesBySearch(searchText);
      setCountries(countries);
    }, 1000);

    return () => clearTimeout(timeOut);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col gap-y-16 w-11/12 mx-auto">
        <div>
          <input
            className="bg-white"
            value={searchText}
            type="text"
            placeholder="Search for a country..."
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-x-8 mx-auto gap-y-16">
          {countries.map((country) => (
            <Card key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Countries };
