import { useDarkMode } from '../../hooks/useDarkMode';

type Props = {
  value: string;
  onChange: (event: string) => void;
};

const CountriesSearch = ({ value, onChange }: Props) => {
  const [theme] = useDarkMode();
  const fillColor = theme === 'light' ? '#808080' : '#FFFFFF';

  return (
    <div className="flex md:md:w-1/3 gap-6 h-16 bg-white dark:bg-dark-blue shadow-md dark:text-white rounded-md overflow-hidden focus-within:border-2 focus-within:border-cyan-600 group">
      {/* TODO: Should this be a button, is that necessary in this case? */}
      <span>
        <svg
          fill={fillColor}
          className="float-left ml-6 h-full hidden group-focus-within:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          width="20"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </span>
      {/* TODO: Should this be its own shared component? */}
      <input
        className="bg-white text-xl dark:bg-dark-blue dark:text-white dark:placeholder:text-white w-full indent-2 outline-none"
        value={value}
        type="text"
        placeholder="Search for a country..."
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export { CountriesSearch };
