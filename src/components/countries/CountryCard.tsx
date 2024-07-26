import { Country } from '../../models/Country';
import { Card } from '../common/Card';
type Props = {
  country: Country;
};

const CountryCard = ({ country }: Props) => {
  return (
    <Card className="bg-white dark:bg-dark-blue rounded-md flex-[0_0_20%] shadow-md overflow-hidden">
      <div className="h-1/2 shadow-sm">
        <img
          className="h-full m-auto"
          src={country.flags.png}
          alt={country.name.common}
        />
      </div>
      <section className="h-1/2 text-left p-6">
        <p className="text-xl font-bold mb-3">{country.name.common}</p>
        {/* TODO: Check on this */}
        <div>
          <p>
            <b>Population:</b> {country.population.toLocaleString('EN-US')}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Capital:</b> {country.capital}
          </p>
        </div>
      </section>
    </Card>
  );
};

export { CountryCard };
