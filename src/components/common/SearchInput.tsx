type Props = {
  placeholder: string;
  value: string;
  className?: string;
  onChange: (event: string) => void;
};

const SearchInput = ({ placeholder, value, className, onChange }: Props) => {
  return (
    <input
      className={className}
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export { SearchInput };
