import { Link } from 'react-router-dom';
import { Country } from '../../models/Country';
import { Card } from '../common/Card';
type Props = {
  country: Country;
};

// TODO: Check the ordering of tags
// TODO: Should the a encompass all tags instead of div/card?
const CountryCard = ({ country }: Props) => {
  return (
    <Card className="bg-white dark:bg-dark-blue rounded-md flex-[0_0_20%] flex-shrink shadow-md overflow-hidden">
      <Link to={`/country/${country.name.common}`}>
        {/* TODO: How to fit image */}
        <img
          className="object-contain w-full h-1/2 shadow-sm"
          src={country.flags.svg}
        />
        <section className="text-left p-6">
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
        </section>
      </Link>
    </Card>
  );
};

export { CountryCard };
