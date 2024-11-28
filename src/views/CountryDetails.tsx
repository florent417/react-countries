import { useLoaderData } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { BackButton } from '../components/common/BackButton';
import { CountryDetailsData } from '../loaders/CountryDetailsLoader';
import { CountryButton } from '../components/countries/CountryButton';

// TODO: Should there be a check for if the country has been retrieved?
export const CountryDetails = () => {
  // TODO: Should this be changed?
  const { countryData, borderCountries } =
    useLoaderData() as CountryDetailsData;

  const currencies = countryData.currencies
    ? Object.keys(countryData.currencies)
        .map((key) => countryData.currencies[key].name)
        .join(', ')
    : null;
  const languages = countryData.languages
    ? Object.values(countryData.languages).sort().join(', ')
    : null;
  const topLevelDomains = countryData.tld?.join(', ');
  // TODO: Should it be done this way?
  const nativeName = countryData.name.nativeName
    ? countryData.name.nativeName[
        Object.keys(countryData.name.nativeName).pop()!
      ].common
    : countryData.name.official;

  return (
    <div className="flex flex-col w-11/12 items-start gap-y-16 mt-8">
      <BackButton />
      <Card className="flex justify-between w-full">
        <img className="w-5/12 h-2/3 object-fill" src={countryData.flags.svg} />
        <section className="text-left p-6 w-5/12">
          <p className="text-3xl font-bold mb-6">{countryData!.name.common}</p>
          <div className="flex justify-between m-auto gap-x-10">
            <div className="flex flex-col gap-y-2">
              <p>
                <b>Native Name:</b> {nativeName}
              </p>
              <p>
                <b>Population:</b>{' '}
                {countryData.population.toLocaleString('EN-US')}
              </p>
              <p>
                <b>Region:</b> {countryData.region}
              </p>
              <p>
                <b>Sub Region:</b> {countryData.subregion}
              </p>
              <p>
                <b>Capital:</b> {countryData.capital}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>
                <b>Top Level Domain:</b> {topLevelDomains}
              </p>
              <p>
                <b>Currencies:</b> {currencies}
              </p>
              <p>
                <b>Languages:</b> {languages}
              </p>
            </div>
          </div>
          {/* TODO */}
          {borderCountries && (
            <div className="flex mt-12 gap-x-2 gap-y-4 items-center flex-wrap">
              <b className="mr-2">Border Countries:</b>
              {borderCountries.map((borderCountry) => (
                // TODO: FIxed size?
                <CountryButton
                  countryName={borderCountry.name.common}
                  key={borderCountry.name.common}
                />
              ))}
            </div>
          )}
        </section>
      </Card>
    </div>
  );
};
