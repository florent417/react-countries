import { Country } from '../models/Country';
type Props = {
  country: Country;
};

const Card = ({ country }: Props) => {
  return (
    <div className="bg-white rounded-md flex-[0_0_20%] flex-shrink shadow-sm pb-4">
      <img src={country.flags.svg} />
      <div className="text-left p-6">
        <p className="text-xl font-bold mb-3">{country.name.common}</p>
        <div>
          <p>
            <b>Population:</b> {country.population}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Capital:</b> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Card };
