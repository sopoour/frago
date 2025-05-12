import BackgroundSection from '@app/components/BackgroundSection/BackgroundSection';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { GeneralContent } from '@app/services/graphql/types';
import { Container, Skeleton, Stack } from '@mantine/core';
import { FC } from 'react';
import useSWR from 'swr';

const PrivacyPolicy: FC = () => {
  const { data: generalContentData, isLoading } = useSWR<GeneralContent | null>(
    '/api/generalContent',
    fetcher,
    {},
  );

  if (isLoading) {
    return (
      <section style={{ background: 'linear-gradient(220deg, #BDD3E8 0%, #F4F6FB 80%)' }}>
        <Container size="md" py="150px">
          <Stack gap={'40px'}>
            <Skeleton height={40} width="60%" radius="sm" mt={32} /> {/* Title */}
            <Skeleton height={20} width="80%" />
            <Skeleton height={20} width="70%" />
            <Skeleton height={20} width="50%" />
            <Skeleton height={20} width="90%" />
            <Skeleton height={20} width="65%" />
            <Skeleton height={20} width="75%" />
            <Skeleton height={20} width="60%" />
            <Skeleton height={20} width="85%" />
          </Stack>
        </Container>
      </section>
    );
  }
  return (
    <BackgroundSection
      id="privacy-policy"
      background="linear-gradient(220deg, #BDD3E8 0%, #F4F6FB 80%)"
    >
      <Container size="md" py={{ base: '80px', sm: '150px' }}>
        <MarkdownConfig content={generalContentData?.privacyPolicy as string} />
      </Container>
    </BackgroundSection>
  );
};

export default PrivacyPolicy;
