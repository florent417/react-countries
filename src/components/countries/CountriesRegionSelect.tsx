import { ChangeEvent } from 'react';

type Props = {
  regions: string[] | null;
  selectedRegion: string | null;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const CountriesRegionSelect = ({
  regions,
  selectedRegion,
  onChange,
}: Props) => {
  return (
    <select
      className="bg-white dark:bg-dark-blue md:self-end w-fit h-16 px-6 text-xl rounded-md shadow-md hover:cursor-pointer"
      onChange={(e) => onChange(e)}
      defaultValue={selectedRegion || ''} // if no selectedRegion is null we default to "All regions"
    >
      {/* Might have diviated from the design here, but I think it's a better user experience to have the first option be "All regions" so we can go back to the original view. */}
      <option value="">All regions</option>
      {regions?.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};
