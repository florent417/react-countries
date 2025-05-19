import { Link, useLoaderData } from 'react-router-dom';
import { BackButton } from '../components/common/BackButton';
import { CountryDetailsData } from '../loaders/CountryDetailsLoader';
import { DisplayValue } from '../components/common/DisplayValue';

// TODO: Should there be a check for if the country has been retrieved?
// Anwser: Yes. You would probably want to show a loading spinner until the contry has been fetched.
// this would be done and returned from the loader or fixed with suspense (react suspense).
export const CountryDetails = () => {
  // TODO: Should this be changed?
  // Anwser: Well you should be consistent with the way you are fetching the data across the app.
  // I would probably use a custom hook to fetch the data and then use a lib like tanstack query (react query) or read more on react routers data loaders and how they can be used to the fullest.
  const { countryData, borderCountries } =
    useLoaderData() as CountryDetailsData;

  // don't like this, but it works and i dont feel like spending the time making it prettier :D
  const currencies = countryData.currencies
    ? Object.keys(countryData.currencies)
        .map((key) => countryData.currencies[key].name)
        .join(', ')
    : null;
  const languages = countryData.languages
    ? Object.values(countryData.languages).sort().join(', ')
    : null;
  const topLevelDomains = countryData.tld?.join(', ') || null;
  const nativeName =
    Object.values(countryData.name.nativeName ?? {})[0]?.common ??
    countryData.name.official;

  return (
    <div className="w-full px-4 md:px-12 grid gap-8 md:gap-16 md:mt-8">
      <BackButton />
      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <img
          className="w-full h-auto md:h-2/3 md:object-fill justify-self-center px-4 md:px-0"
          src={countryData.flags.svg}
          alt={`Flag of ${countryData.name.common}`}
        />
        <section className="w-full justify-self-center md:justify-self-start px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            {countryData.name.common}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-10 text-sm md:text-base">
            <DisplayValue label="Native Name" value={nativeName} />
            <DisplayValue label="Top Level Domain" value={topLevelDomains} />
            <DisplayValue
              label="Population"
              value={countryData.population.toLocaleString(navigator.language)}
            />
            <DisplayValue label="Currencies" value={currencies} />
            <DisplayValue label="Region" value={countryData.region} />
            <DisplayValue label="Languages" value={languages} />
            <DisplayValue label="Sub Region" value={countryData.subregion} />
            <DisplayValue label="Capital" value={countryData.capital} />
          </div>
          {borderCountries && (
            <div className="mt-8 md:mt-12 grid gap-4">
              <b className="text-sm md:text-base">Border Countries:</b>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {borderCountries.map((borderCountry) => (
                  <Link
                    to={`/country/${borderCountry.name.common.toLowerCase()}`}
                    key={borderCountry.name.common}
                  >
                    <p className="bg-white dark:bg-dark-blue rounded-sm shadow-sm px-4 py-1 text-sm md:text-base transition-all hover:scale-110 text-center">
                      {borderCountry.name.common}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
