import { ISOToDate } from '@app/utils/formatDate';
import { Button, Flex, Text } from '@mantine/core';
import { FC } from 'react';
import styles from '../Live.module.scss';
import { Maybe } from '@app/services/graphql/types';
import Link from 'next/link';

type Props = {
  date?: string;
  venue?: Maybe<string>;
  location?: Maybe<string>;
  constellation?: Maybe<string>;
  ticketLink?: Maybe<string>;
  ticketNotiz?: Maybe<string>;
};

const LiveRow: FC<Props> = ({ date, location, venue, ticketLink, ticketNotiz }) => {
  const gridComponent = (isLinked: boolean) => (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap="20px"
      justify={'space-between'}
      className={styles.liveRow}
    >
      <Flex direction={'column'} gap={{ base: '8px', sm: '20px' }}>
        <Flex gap={'8px'} align={'center'} className={styles.location}>
          <Text c={'primary.9'} size="40px" tt={'uppercase'} fw={600} ff={'Oswald'}>
            {location},
          </Text>
          <Text c={'primary.7'} size="28px">
            {venue}
          </Text>
        </Flex>

        <Text fw={600} c={'primary.9'} size="24px" style={{ letterSpacing: '-0.1rem' }}>
          {date && ISOToDate(date)}
        </Text>
      </Flex>

      <Flex>
        {(ticketLink || ticketNotiz) &&
          (ticketLink ? (
            <Button
              variant="filled"
              style={{ padding: '4px 48px' }}
              component="span"
              size={'md'}
              radius={'xl'}
              className={styles.ticketButton}
            >
              {date && new Date(date).getDate() >= new Date().getDate() ? 'Ticket' : 'Impressions'}
            </Button>
          ) : (
            <Text c={'primary.9'} size="md">
              {ticketNotiz}
            </Text>
          ))}
      </Flex>
    </Flex>
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
