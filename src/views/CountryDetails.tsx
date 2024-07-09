import { useLoaderData } from 'react-router-dom';
import { Country } from '../models/Country';
import { Card } from '../components/common/Card';
import { BackButton } from '../components/common/BackButton';

// TODO: Should there be a check for if the country has been retrieved?
export const CountryDetails = () => {
  // TODO: Should this be changed?
  const country = useLoaderData() as Country;
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="flex flex-col w-11/12 items-start gap-y-16 mt-8">
      <BackButton />
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
