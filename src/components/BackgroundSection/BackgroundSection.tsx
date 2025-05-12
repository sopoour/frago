import { FC } from 'react';

type Props = {
  children: React.ReactNode;
  id: string;
  background: string;
};

const BackgroundSection: FC<Props> = ({ children, id, background }) => {
  return (
    <section style={{ background }} id={id}>
      {children}
    </section>
  );
};

export default BackgroundSection;
