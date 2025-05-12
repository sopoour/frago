import { forwardRef } from 'react';
import styles from './Hero.module.scss';
import { GeneralContent } from '@app/services/graphql/types';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useSWR from 'swr';
import { IoIosArrowDown } from 'react-icons/io';
import { scroller } from 'react-scroll';
import ContentfulImage from '@app/lib/contentful-image';
import { VisuallyHidden } from '@mantine/core';
import HeroImage from '@app/assets/Titelbild.png';

const Hero = forwardRef<HTMLDivElement>((props, ref) => {
  /* const { data: generalContentData, isLoading } = useSWR<GeneralContent | null>(
    '/api/generalContent',
    fetcher,
    {},
  ); */

  return (
    <div
      className={styles.background}
      ref={ref}
      style={{
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <VisuallyHidden component={'h1'}>FRAGO Music</VisuallyHidden>
        <ContentfulImage
          src={
            /* !!generalContentData?.heroImage?.url && !isLoading
              ? generalContentData?.heroImage?.url
              :  */ HeroImage.src
          }
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
          alt={'Hero Background'}
        />

        <button
          className={styles.arrowButtonContainer}
          onClick={() => scroller.scrollTo('live', { smooth: true, duration: 800 })}
          title="Scroll down to see the latest live shows"
        >
          <IoIosArrowDown />
          <IoIosArrowDown className={styles.arrowFadeElement} />
          <IoIosArrowDown className={styles.arrowFadeElement} />
        </button>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';
export default Hero;
