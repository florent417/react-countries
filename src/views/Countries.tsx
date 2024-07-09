import { useEffect, useState } from 'react';
import { Country } from '../models/Country';
import { CountryCard } from '../components/countries/CountryCard';
import {
  getAllCountries,
  getAllRegions,
  getCountriesByRegion,
} from '../services/CountriesService';
import { CountriesRegionFilter } from '../components/countries/CountriesRegionFilter';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  useEffect(() => {
    if (selectedRegion && selectedRegion.trim() !== '') {
      fetchCountriesByRegion();
    }
  }, [selectedRegion]);

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

  const fetchCountriesByRegion = async () => {
    const countries = await getCountriesByRegion(selectedRegion);
    setCountries(countries);
  };

  return (
    <>
      <div className="flex flex-col gap-y-8 w-11/12 mx-auto">
        <CountriesRegionFilter
          regions={regions}
          selectedRegion={selectedRegion}
          onChange={setSelectedRegion}
        />
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
