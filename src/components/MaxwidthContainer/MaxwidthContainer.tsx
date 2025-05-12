import { Container } from '@mantine/core';
import { FC, ReactNode } from 'react';
import styles from './MaxwidthContainer.module.scss';

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  component?: React.ElementType;
};

const MaxwidthContainer: FC<Props> = ({ id, children, className, style, component }) => (
  <Container
    size={'md'}
    component={component || 'div'}
    id={id}
    className={`${styles.sectionContainer} ${className}`}
    style={style}
  >
    {children}
  </Container>
);

export default MaxwidthContainer;
