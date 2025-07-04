import { forwardRef } from 'react';
import styles from './Hero.module.scss';
import { GeneralContent } from '@app/services/graphql/types';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useSWR from 'swr';
import { IoIosArrowDown } from 'react-icons/io';
import { scroller } from 'react-scroll';
import ContentfulImage from '@app/lib/contentful-image';
import { VisuallyHidden } from '@mantine/core';
import HeroImage from '@app/assets/Titelbild.jpg';
import { useMediaQuery } from '@mantine/hooks';

const Hero = forwardRef<HTMLDivElement>((props, ref) => {
  const { data: generalContentData, isLoading } = useSWR<GeneralContent | null>(
    '/api/generalContent',
    fetcher,
    {},
  );

  const isMobile = useMediaQuery(`(max-width: 48em)`);

  return (
    <div
      className={styles.background}
      ref={ref}
      style={{
        position: 'relative',
      }}
    >
      <VisuallyHidden component={'h1'}>FRAGO Music</VisuallyHidden>
      <ContentfulImage
        src={
          !!generalContentData?.heroImage?.url && !isLoading
            ? generalContentData?.heroImage?.url
            : HeroImage.src
        }
        fill
        style={{ objectFit: 'cover', objectPosition: '60% 20%' }}
        priority
        alt={'Hero Background'}
      />

      <button
        className={styles.arrowButtonContainer}
        onClick={() =>
          scroller.scrollTo('live', { smooth: true, duration: 800, offset: isMobile ? 0 : -100 })
        }
        title="Scroll down to see live"
      >
        <IoIosArrowDown />
        <IoIosArrowDown className={styles.arrowFadeElement} />
        <IoIosArrowDown className={styles.arrowFadeElement} />
      </button>
    </div>
  );
});

Hero.displayName = 'Hero';
export default Hero;
