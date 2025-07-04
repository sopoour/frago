import { fetcher } from '@app/hooks/fetch/useFetch';
import { Video } from '@app/services/graphql/types';
import { FC, useEffect } from 'react';
import useSWR from 'swr';
import styles from './Videos.module.scss';
import { Flex, Text, VisuallyHidden } from '@mantine/core';
import MaxwidthContainer from '@app/components/MaxwidthContainer/MaxwidthContainer';

const Videos: FC = () => {
  const { data, isLoading } = useSWR<Video[] | null>('/api/video', fetcher);

  useEffect(() => {
    if (data) {
      const section = document.getElementById('videos');
      if (section) {
        const containers = section.getElementsByClassName('Videos_videoContainer__BD4kk');
        if (containers.length === 1) {
          section.classList.add('hasOneVideo');
        }
      }
    }
  }, [data]);

  if (data && data?.length === 0) return null;

  return (
    <MaxwidthContainer
      id="videos"
      className={`${styles.videoSection} ${styles.hasOneVideo}`}
      component={'section'}
    >
      <VisuallyHidden component={'h2'}>Videos</VisuallyHidden>
      {data?.map((video) => (
        <Flex
          key={video.title}
          direction={'column'}
          justify={'center'}
          gap={{ base: 38, sm: 68 }}
          className={styles.videoContainer}
        >
          <Text c={'white'} size="24px" fw={600} ff="Oswald" component="h3">
            {video.title}
          </Text>
          <iframe
            src={video.videoLink || ''}
            title={video.title || ''}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className={styles.video}
          />
        </Flex>
      ))}
    </MaxwidthContainer>
  );
};

export default Videos;
