import { ISOToDate } from '@app/utils/formatDate';
import { Button, Grid, Text } from '@mantine/core';
import { FC } from 'react';
import styles from '../Live.module.scss';
import { Maybe } from '@app/services/graphql/types';
import Link from 'next/link';

type Props = {
  date?: string;
  eventType?: Maybe<string>;
  location?: Maybe<string>;
  constellation?: Maybe<string>;
  ticketLink?: Maybe<string>;
  ticketNotiz?: Maybe<string>;
};

const LiveRow: FC<Props> = ({
  date,
  location,
  eventType,
  constellation,
  ticketLink,
  ticketNotiz,
}) => {
  const gridComponent = (isLinked: boolean) => (
    <Grid
      gutter={{ base: 's', xs: 'lg' }}
      columns={3}
      className={isLinked ? `${styles.liveRowLinked} ${styles.liveRow}` : styles.liveRow}
    >
      <Grid.Col span={1}>
        <Text fw={600} c={'g-dark.9'} size="lg">
          {date && ISOToDate(date)}
        </Text>
        {constellation && (
          <Text c={'g-dark.9'} size="md">
            {constellation}
          </Text>
        )}
      </Grid.Col>
      <Grid.Col span={1}>
        <Text c={'g-dark.9'} size="md">
          {eventType},
        </Text>
        <Text c={'g-dark.9'} size="md">
          {location}
        </Text>
      </Grid.Col>
      <Grid.Col span={1} className={styles.liveRowCol}>
        {(ticketLink || ticketNotiz) &&
          (ticketLink ? (
            <Button variant="outline" pb={'xs'} pt={'xs'} component="span">
              {date && new Date(date).getDate() >= new Date().getDate() ? 'Ticket' : 'Impressions'}
            </Button>
          ) : (
            <Text c={'g-dark.9'} size="md">
              {ticketNotiz}
            </Text>
          ))}
      </Grid.Col>
    </Grid>
  );

  return (
    <>
      {ticketLink ? (
        <Link href={ticketLink} target="_blank">
          {gridComponent(true)}
        </Link>
      ) : (
        gridComponent(false)
      )}
    </>
  );
};

export default LiveRow;
