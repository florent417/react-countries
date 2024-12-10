import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card } from '../components/common/Card';
import { BackButton } from '../components/common/BackButton';
import { CountryDetailsData } from '../loaders/CountryDetailsLoader';
import { CountryButton } from '../components/countries/CountryButton';

// TODO: Should there be a check for if the country has been retrieved?
export const CountryDetails = () => {
  // TODO: Should this be changed?
  const { countryData, borderCountries } =
    useLoaderData() as CountryDetailsData;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // Tailwind sm screen size

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className="flex flex-col w-11/12 items-start gap-y-16 md:mt-8">
      <BackButton />
      <Card className="flex flex-col md:w-full md:flex-row md:justify-between">
        <img
          className="self-center h-1/3 max-sm:w-11/12 md:w-5/12 md:h-2/3 md:object-fill"
          src={countryData.flags.svg}
        />
        <section className="text-left max-sm:self-center max-sm:mt-8 max-sm:w-11/12 md:p-6 md:w-5/12">
          <p className="font-bold text-2xl mb-4 md:mb-6 md:text-3xl">
            {countryData!.name.common}
          </p>
          <div className="flex justify-between m-auto max-sm:text-sm max-sm:flex-col max-sm:gap-y-10 md:gap-x-10">
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
            <div className="flex mt-12 gap-x-2 gap-y-4 max-sm:flex-col md:items-center md:flex-wrap">
              <b className="mr-2 max-sm:text-md">Border Countries:</b>
              {isMobile ? (
                <span className="md:hidden flex flex-wrap gap-x-2 gap-y-2">
                  {borderCountries.map((borderCountry) => (
                    // TODO: FIxed size?
                    <CountryButton
                      className="max-sm:text-sm"
                      countryName={borderCountry.name.common}
                      key={borderCountry.name.common}
                    />
                  ))}
                </span>
              ) : (
                <>
                  {borderCountries.map((borderCountry) => (
                    // TODO: FIxed size?
                    <CountryButton
                      countryName={borderCountry.name.common}
                      key={borderCountry.name.common}
                    />
                  ))}
                </>
              )}
            </div>
          )}
        </section>
      </Card>
    </div>
  );
};
