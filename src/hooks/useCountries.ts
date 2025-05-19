import { useState, useEffect } from 'react';
import { Country } from '../models/Country';
import { getAllCountries, getAllRegions } from '../services/CountriesService';

type UseCountries = {
  countries: Country[] | null;
  filteredCountries: Country[] | null;
  regions: string[] | null;
  loading: boolean;
  error: Error | null;
};

export const useCountries = (
  searchValue: string,
  selectedRegion: string | null,
): UseCountries => {
  const [regions, setRegions] = useState<string[] | null>(null);
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [filteredCountries, setFilteredCountries] = useState<Country[] | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [countriesData, regionsData] = await Promise.all([
          getAllCountries(),
          getAllRegions(),
        ]);
        setCountries(countriesData);
        setRegions(regionsData);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch data'),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue.trim() === '' && !selectedRegion) {
      setFilteredCountries(null);
      return;
    }

    if (!countries) return;

    let filtered = [...countries];

    // Filter by region if selected
    if (selectedRegion) {
      filtered = filtered.filter(
        (country) => country.region === selectedRegion,
      );
    }

    // Filter by search term if present
    if (searchValue.trim() !== '') {
      const searchTerm = searchValue.toLowerCase();
      filtered = filtered.filter(
        (country) =>
          country.name.common.toLowerCase().includes(searchTerm) ||
          country.name.official.toLowerCase().includes(searchTerm),
      );
    }

    setFilteredCountries(filtered);
  }, [searchValue, selectedRegion, countries]);

  return {
    countries,
    filteredCountries,
    regions,
    loading,
    error,
  };
};
