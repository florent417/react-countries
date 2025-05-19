type DisplayValueProps = {
  label: string;
  value: string | number | string[] | null;
};

export const DisplayValue = ({ label, value }: DisplayValueProps) => {
  const displayValue = Array.isArray(value) ? value.join(', ') : value;
  return (
    <p>
      <b>{label}:</b> {displayValue}
    </p>
  );
};
