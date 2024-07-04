import { useEffect, useState } from 'react';
import { Country } from '../models/Country';
import { CountryCard } from '../components/countries/CountryCard';
import { getAllCountries, getAllRegions } from '../services/CountriesService';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<string[]>([]);

  useEffect(() => {
    fetchAllCountries();
    fetchAllRegions();
  }, []);

  const fetchAllCountries = async () => {
    const countries = await getAllCountries();
    setCountries(countries);
  };

  const fetchAllRegions = async () => {
    const regions = await getAllRegions();
    const regionsSet = new Set(regions);
    const sortedRegions = Array.from(regionsSet).sort();
    setRegions(sortedRegions);
  };

  return (
    <>
      <div className="flex flex-col gap-y-8 w-11/12 mx-auto">
        <select className="bg-white dark:bg-dark-blue self-end w-1/6 h-16 indent-2 text-xl rounded-md shadow-md">
          <option value="" disabled selected hidden>
            Filter by region
          </option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <div className="flex justify-between flex-wrap gap-x-8 gap-y-16 w-full">
          {countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Countries };
