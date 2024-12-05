import { useNavigate } from 'react-router-dom';

type Props = {
  countryName: string;
};

// TODO: Add dark theme
export const CountryButton = ({ countryName }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${countryName}`);
  };

  return (
    // TODO: FIxed size?
    <button type="button" onClick={handleClick}>
      <p className="bg-white dark:bg-dark-blue rounded-sm shadow-sm px-4 py-1 hover:px-5 hover:py-2">
        {countryName}
      </p>
    </button>
  );
};
