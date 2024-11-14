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
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  useEffect(() => {
    fetchAllCountries();
    fetchAllRegions();
  }, []);

  // TODO: can we see timeouts, to be certain that they have been deleted?
  // TODO: can we use a non async timeout in this case?
  useEffect(() => {
    if (
      !searchText &&
      searchText.trim() === '' &&
      !selectedRegion &&
      selectedRegion.trim() === ''
    ) {
      setFilteredCountries([]);
      fetchAllCountries();
    } else if (
      searchText &&
      searchText.trim() !== '' &&
      selectedRegion &&
      selectedRegion.trim() !== ''
    ) {
      const timeOut = setTimeout(() => {
        fetchFilteredCountries();
      }, 1000);
      return () => clearTimeout(timeOut);
    } else if (
      !searchText &&
      searchText.trim() === '' &&
      selectedRegion &&
      selectedRegion.trim() !== ''
    ) {
      fetchCountriesByRegion();
    } else {
      const timeOut = setTimeout(() => {
        fetchSearchCountries();
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  }, [searchText, selectedRegion]);

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
    setFilteredCountries(countries);
  };

  const fetchSearchCountries = async () => {
    const countries = await getCountriesBySearch(searchText);
    setFilteredCountries(countries);
  };

  const fetchFilteredCountries = async () => {
    const countries = await getCountriesBySearch(searchText);
    const filteredByRegionCountries = countries.filter(
      (country) => country.region === selectedRegion,
    );
    setFilteredCountries(filteredByRegionCountries);
  };

  // TODO: Extend with errors or blank countries
  const countriesToShow = () =>
    filteredCountries.length > 0 ? filteredCountries : countries;

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
        {countriesToShow().map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export { Countries };
