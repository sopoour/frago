import { fetcher } from '@app/hooks/fetch/useFetch';
import ContentfulImage from '@app/lib/contentful-image';
import { GeneralContent } from '@app/services/graphql/types';
import { SimpleGrid, Text, VisuallyHidden } from '@mantine/core';
import { FC } from 'react';
import useSWR from 'swr';
import styles from './About.module.scss';
import MaxwidthContainer from '@app/components/MaxwidthContainer/MaxwidthContainer';
import BackgroundSection from '@app/components/BackgroundSection/BackgroundSection';
import AboutImage from '@app/assets/About.png';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';

const About: FC = () => {
  const { data, isLoading } = useSWR<GeneralContent | null>('/api/generalContent', fetcher);

  return (
    <BackgroundSection id="über-uns" background="black">
      <MaxwidthContainer id="über-uns">
        <VisuallyHidden component={'h2'}>About</VisuallyHidden>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={{ base: 32, sm: 64 }}
          style={{ height: '75%', alignItems: 'center' }}
        >
          <span style={{ position: 'relative' }}>
            <ContentfulImage
              src={data?.aboutImage?.url || AboutImage.src}
              fill
              className={styles.aboutImage}
              alt={'Emma Portrait'}
              sizes="(max-width: 768px) 100vw"
              style={{ objectFit: 'cover' }}
            />
          </span>
          <MarkdownConfig
            content={data?.aboutDescription as string}
            className={styles.aboutDescription}
          />
        </SimpleGrid>
      </MaxwidthContainer>
    </BackgroundSection>
  );
};

export default About;
