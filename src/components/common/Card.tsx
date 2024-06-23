type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: Props) => {
  return <article className={className}>{children}</article>;
};

export { Card };
