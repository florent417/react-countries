import { useEffect, useState } from 'react';
import { Country } from '../models/Country';
import { CountryCard } from '../components/countries/CountryCard';
import {
  getAllCountries,
  getCountriesBySearch,
} from '../services/CountriesService';
import { CountriesSearch } from '../components/countries/CountriesSearch';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  // TODO: can we see timeouts, to be certain that they have been deleted?
  // TODO: cna we use a non async timeout in this case?
  useEffect(() => {
    if (!searchText && searchText.trim() === '') {
      fetchAllCountries();
    } else {
      const timeOut = setTimeout(() => {
        fetchSearchCountries();
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  }, [searchText]);

  const fetchAllCountries = async () => {
    const countries = await getAllCountries();

    setCountries(countries);
  };

  const fetchSearchCountries = async () => {
    const countries = await getCountriesBySearch(searchText);
    setCountries(countries);
  };

  return (
    <>
      <div className="flex flex-col gap-y-8 w-11/12 mx-auto">
        <CountriesSearch onChange={setSearchText} value={searchText} />
        <div className="flex flex-wrap gap-x-8 gap-y-16 justify-between">
          {countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Countries };
