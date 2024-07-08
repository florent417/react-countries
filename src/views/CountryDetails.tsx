import { useLoaderData, useNavigate } from 'react-router-dom';
import { Country } from '../models/Country';
import { Card } from '../components/common/Card';

// TODO: Should there be a check for if the country has been retrieved?
export const CountryDetails = () => {
  // TODO: Should this be changed?
  const country = useLoaderData() as Country;
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="flex flex-col w-11/12 items-start gap-y-16 mt-8">
      <button
        className="bg-white dark:bg-dark-blue rounded-md shadow-md py-2 px-8"
        onClick={goBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="24"
          width="16"
          className="float-left mr-4"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <p className="inline-block text-base">Back</p>
      </button>
      <Card className="flex flex-grow justify-between w-full m-auto">
        <img className="w-2/6" src={country!.flags.svg} />
        <section className="text-left p-6 m-auto w-auto">
          <p className="text-3xl font-bold mb-6">{country!.name.common}</p>
          <div className="flex justify-between m-auto">
            <div className="flex flex-col gap-y-4">
              <p>
                <b>Native Name:</b> {country.population}
              </p>
              <p>
                <b>Population:</b> {country.population}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Sub Region:</b> {country.subregion}
              </p>
              <p>
                <b>Capital:</b> {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <p>
                <b>Top Level Domain:</b> {country.tld[0]}
              </p>
              <p>
                <b>Currencies:</b> {Object.keys(country.currencies)[0]}
              </p>
              <p>
                <b>Languages:</b> {Object.keys(country.languages)[0]}
              </p>
            </div>
          </div>
        </section>
        {/* TODO */}
        {/* <span>
          <p><b>Border Countries:</b>{country.}</p>
        </span> */}
      </Card>
    </div>
  );
};
