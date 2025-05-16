import { LiveEvent } from '@app/services/graphql/types';
import { Button, Flex, Text } from '@mantine/core';
import { FC, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import LiveRow from './LiveRow';
import styles from '../Live.module.scss';

type Props = {
  title: string;
  shows?: LiveEvent[];
  shownEventsNumber?: number;
  pastShows?: boolean;
};

const LiveSection: FC<Props> = ({ title, shows, shownEventsNumber = 2, pastShows = false }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const visibleShows = showAll ? shows : shows?.slice(0, shownEventsNumber);

  return (
    <>
      <Text
        size="20px"
        fw={600}
        ff="Oswald"
        c={'primary.9'}
        id="showTitle"
        component="h3"
        className={pastShows ? styles.pastShowTitle : ''}
      >
        {title}
      </Text>
      <Flex direction={'column'} className={styles.liveGridSection}>
        {visibleShows?.map((live) => (
          <LiveRow
            key={live.date}
            date={live.date}
            venue={live.venue}
            location={live.location}
            ticketLink={live.ticketLink}
            ticketNotiz={live.ticketNotiz}
          />
        ))}
        {!showAll && shows && shows?.length > shownEventsNumber && (
          <div className={styles.showMore}>
            <Button
              onClick={() => setShowAll(true)}
              variant="subtle"
              radius="md"
              rightSection={<IoIosArrowDown />}
              style={{
                color: 'var(--mantine-color-primary-9)',
                fontSize: '16px',
              }}
            >
              View all shows
            </Button>
          </div>
        )}
      </Flex>
    </>
  );
};

export default LiveSection;
