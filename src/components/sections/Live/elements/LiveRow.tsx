import { ISOToDate, normalizeDate } from '@app/utils/formatDate';
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
  const gridComponent = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap="16px"
        justify={'space-between'}
        className={styles.liveRow}
      >
        <Flex direction={'column'} gap={{ base: '0', xs: '20px' }}>
          <Flex gap={'16px'} align={'center'} className={styles.location}>
            <Text c={'white'} size="40px" tt={'uppercase'} fw={600} ff={'Oswald'}>
              {location}
            </Text>
            <Text c={'white'} size="28px">
              {venue}
            </Text>
          </Flex>

          <Text fw={600} c={'white'} style={{ letterSpacing: '-0.1rem' }} className={styles.date}>
            {date && ISOToDate(date)}
          </Text>
        </Flex>

        <Flex>
          {(ticketLink || ticketNotiz) &&
            (ticketLink ? (
              <Button
                variant="filled"
                component="span"
                size={'lg'}
                radius={'xl'}
                className={styles.ticketButton}
              >
                {date && normalizeDate(date) >= today ? 'Ticket' : 'Impressions'}
              </Button>
            ) : (
              <Text c={'primary.9'} size="md">
                {ticketNotiz}
              </Text>
            ))}
        </Flex>
      </Flex>
    );
  };

  return (
    <>
      {ticketLink ? (
        <Link href={ticketLink} target="_blank">
          {gridComponent()}
        </Link>
      ) : (
        gridComponent()
      )}
    </>
  );
};

export default LiveRow;
