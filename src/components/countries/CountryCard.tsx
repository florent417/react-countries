import { Link } from 'react-router-dom';
import { Country } from '../../models/Country';
import { Card } from '../common/Card';
import { DisplayValue } from '../common/DisplayValue';

type Props = {
  country: Country;
};

export const CountryCard = ({ country }: Props) => {
  return (
    <Link to={`/country/${country.name.common.toLowerCase()}`}>
      <Card className="bg-white dark:bg-dark-blue rounded-md shadow-md h-full">
        {/* TODO: How to fit image? answer: use object-cover (css: object-fit: cover) */}
        <img
          className="object-cover w-full h-1/2 shadow-sm"
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
        />
        <section className="text-left p-6">
          <p className="text-xl font-bold mb-3">{country.name.common}</p>
          <div>
            <DisplayValue
              label="Population"
              value={country.population.toLocaleString(navigator.language)}
            />
            <DisplayValue label="Region" value={country.region} />
            <DisplayValue label="Capital" value={country.capital} />
          </div>
        </section>
      </Card>
    </Link>
  );
};
