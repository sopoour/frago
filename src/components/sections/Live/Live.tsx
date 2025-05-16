import { Flex, Grid, VisuallyHidden } from '@mantine/core';
import { FC } from 'react';
import useSWR from 'swr';
import { LiveEvent } from '@app/services/graphql/types';
import { fetcher } from '@app/hooks/fetch/useFetch';
import LiveSection from './elements/LiveSection';
import MaxwidthContainer from '@app/components/MaxwidthContainer/MaxwidthContainer';
import BackgroundSection from '@app/components/BackgroundSection/BackgroundSection';

const normalizeDate = (dateString: string) => {
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0); // Strip time
  return date;
};

const Live: FC = () => {
  const { data, isLoading } = useSWR<LiveEvent[] | null>('/api/liveEvents', fetcher);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Strip time from today

  const upcomingShows = data
    ?.filter((live) => normalizeDate(live.date) >= today)
    ?.sort((a, b) => normalizeDate(a.date).getTime() - normalizeDate(b.date).getTime());

  const pastShows = data
    ?.filter((live) => normalizeDate(live.date) < today)
    ?.sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime());

  if (data && data?.length === 0) return null;

  return (
    <BackgroundSection id="live" background="var(--mantine-color-grey-2)">
      <MaxwidthContainer id="live" size="lg">
        <VisuallyHidden component={'h2'}>Live Shows</VisuallyHidden>
        <Flex direction={'column'} style={{ width: '100%' }} gap="40px">
          {upcomingShows && upcomingShows?.length > 0 && (
            <LiveSection title="Upcoming shows" shows={upcomingShows} shownEventsNumber={3} />
          )}
          {pastShows && pastShows?.length > 0 && (
            <LiveSection title="Past shows" shows={pastShows} pastShows />
          )}
        </Flex>
      </MaxwidthContainer>
    </BackgroundSection>
  );
};

export default Live;
