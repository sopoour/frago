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
    <BackgroundSection id="live" background="black">
      <MaxwidthContainer id="live" size="md">
        <VisuallyHidden component={'h2'}>Live Shows</VisuallyHidden>
        <Flex
          direction={'column'}
          style={{ width: '100%', padding: '32px 0' }}
          gap={{ base: '24px', sm: '40px' }}
        >
          {upcomingShows && upcomingShows?.length > 0 && (
            <LiveSection title="Kommende Shows" shows={upcomingShows} shownEventsNumber={3} />
          )}
          {pastShows && pastShows?.length > 0 && (
            <LiveSection title="Vergangende Shows" shows={pastShows} pastShows />
          )}
        </Flex>
      </MaxwidthContainer>
    </BackgroundSection>
  );
};

export default Live;
