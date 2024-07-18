import { useEffect, useState } from 'react';
import { Country } from '../models/Country';
import { CountryCard } from '../components/countries/CountryCard';
import {
  getAllCountries,
  getCountriesBySearch,
  getAllRegions,
  getCountriesByRegion,
} from '../services/CountriesService';
import { CountriesSearch } from '../components/countries/CountriesSearch';
import { CountriesRegionSelect } from '../components/countries/CountriesRegionSelect';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  useEffect(() => {
    fetchAllCountries();
    fetchAllRegions();
  }, []);

  useEffect(() => {
    if (selectedRegion && selectedRegion.trim() !== '') {
      fetchCountriesByRegion();
    }
  }, [selectedRegion]);

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

  const fetchSearchCountries = async () => {
    const countries = await getCountriesBySearch(searchText);
    setCountries(countries);
  };
  // TODO: How to make them fall to the left after search and only 1 row?
  return (
    <div className="flex flex-col gap-y-8 w-11/12 mx-auto pt-8">
      <div className="flex justify-between mb-8">
        <CountriesSearch onChange={setSearchText} value={searchText} />
        <CountriesRegionSelect
          regions={regions}
          selectedRegion={selectedRegion}
          onChange={setSelectedRegion}
        />
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-16 justify-between">
        {countries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export { Countries };
