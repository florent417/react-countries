type Props = {
  regions: string[];
  selectedRegion: string;
  // TODO: Function naming?
  onChange: (region: string) => void;
};

export const CountriesRegionSelect = ({
  regions,
  selectedRegion,
  onChange,
}: Props) => {
  return (
    <select
      className="bg-white dark:bg-dark-blue md:self-end w-1/2 md:w-1/6 h-16 pl-6 text-xl rounded-md shadow-md hover:cursor-pointer"
      onChange={(event) => onChange(event.target.value)}
      defaultValue={selectedRegion}
    >
      {/* TODO: Shoudl this be disabled and hidden? */}
      <option className="pl-6" value="" disabled hidden>
        Filter by region
      </option>
      {regions.map((region) => (
        <option className="pl-12" key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};
