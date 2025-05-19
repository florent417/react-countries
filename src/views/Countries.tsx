import { ChangeEvent, useState } from 'react';
import { CountryCard } from '../components/countries/CountryCard';
import { CountriesSearch } from '../components/countries/CountriesSearch';
import { CountriesRegionSelect } from '../components/countries/CountriesRegionSelect';
import { useCountries } from '../hooks/useCountries';

export const Countries = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const { filteredCountries, countries, regions, loading, error } =
    useCountries(searchValue, selectedRegion);

  const onRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value === '' ? null : e.target.value;
    setSelectedRegion(region);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim());
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-y-8 w-11/12 mx-auto md:pt-8">
      <div className="flex flex-col mb-8 max-sm:gap-y-10 md:flex-row md:justify-between">
        <CountriesSearch onSearchChange={handleSearchChange} />
        <CountriesRegionSelect
          regions={regions}
          selectedRegion={selectedRegion}
          onChange={onRegionChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(filteredCountries || countries || []).map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};
