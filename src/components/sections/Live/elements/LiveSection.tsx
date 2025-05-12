import { LiveEvents } from '@app/services/graphql/types';
import { Button, Grid, Text } from '@mantine/core';
import { FC, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import LiveRow from './LiveRow';
import styles from '../Live.module.scss';

type Props = {
  title: string;
  shows?: LiveEvents[];
  shownEventsNumber?: number;
  pastShows?: boolean;
};

const LiveSection: FC<Props> = ({ title, shows, shownEventsNumber = 3, pastShows = false }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const visibleShows = showAll ? shows : shows?.slice(0, shownEventsNumber);

  return (
    <>
      <Grid.Col
        span={{ base: 12, sm: 4 }}
        className={
          pastShows
            ? `${styles.liveGridPastShows} ${styles.liveGridSection}`
            : styles.liveGridSection
        }
      >
        <Text size="20px" fw={600} ff="Hind Vadodara" c={'g-dark.9'} id="showTitle" component="h3">
          {title}
        </Text>
      </Grid.Col>
      <Grid.Col
        span={{ base: 12, sm: 8 }}
        className={
          pastShows
            ? `${styles.liveGridPastShows} ${styles.liveGridSection}`
            : styles.liveGridSection
        }
      >
        {visibleShows?.map((live) => (
          <LiveRow
            key={live.date}
            date={live.date}
            constellation={live.constellation}
            eventType={live.eventType}
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
                color: 'var(--mantine-color-g-dark-9)',
                fontSize: '16px',
              }}
            >
              View all shows
            </Button>
          </div>
        )}
      </Grid.Col>
    </>
  );
};

export default LiveSection;
