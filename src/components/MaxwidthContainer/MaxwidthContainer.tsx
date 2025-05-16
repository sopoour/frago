import { Container, MantineSize } from '@mantine/core';
import { FC, ReactNode } from 'react';
import styles from './MaxwidthContainer.module.scss';

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  component?: React.ElementType;
  size?: MantineSize;
};

const MaxwidthContainer: FC<Props> = ({
  id,
  children,
  className,
  style,
  component,
  size = 'md',
}) => (
  <Container
    size={size}
    component={component || 'div'}
    id={id}
    className={`${styles.sectionContainer} ${className}`}
    style={style}
  >
    {children}
  </Container>
);

export default MaxwidthContainer;
