import React, { FC, ReactNode, useEffect, useState } from 'react';
import styles from './Layout.module.scss';
import Logo from '@app/assets/logo.png';
import { Anchor, AppShell, Burger, Flex, Group, Image, SimpleGrid, Text } from '@mantine/core';
import { useDisclosure, useIntersection, useMediaQuery } from '@mantine/hooks';
import LinkContainer from '../LinkContainer/LinkContainer';
import Hero from '../sections/Hero/Hero';
import { animateScroll, Link } from 'react-scroll';
import Sidebar from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { GeneralContent } from '@app/services/graphql/types';
import { fetcher } from '@app/hooks/fetch/useFetch';
import ContentfulImage from '@app/lib/contentful-image';
import LinkNext from 'next/link';

const navLinks = [
  /*  { label: 'Live' }, */
  { label: 'About' },
  /* { label: 'Music' }, */
  { label: 'Videos' },
  { label: 'Contact' },
];

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const [opened, { toggle, close }] = useDisclosure();
  /* const { data } = useSWR<GeneralContent | null>('/api/generalContent', fetcher); */
  const isMobile = useMediaQuery(`(max-width: 48em)`);
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [scrolled, setScrolled] = useState<Boolean>(false);
  const { ref, entry } = useIntersection({
    root: null,
    threshold: 0.1,
  });
  const navbarClass = scrolled ? `${styles.navbarBg} ${styles.navbarScrolled}` : styles.navbarBg;

  const navLinkItems = navLinks.map((item, index) => {
    const itemHref = item.label.toLowerCase();

    return (
      <Link
        key={item.label + index}
        id={item.label}
        activeClass={styles.active}
        href={`#${itemHref}`}
        to={itemHref}
        className={styles.navLink}
        spy
        smooth
        offset={isMobile ? -50 : 0}
        duration={700}
        onClick={close}
      >
        {item.label}
      </Link>
    );
  });

  useEffect(() => {
    setScrolled(entry?.isIntersecting === false);
  }, [entry]);

  useEffect(() => {
    router.pathname === '/impressum' || router.pathname === '/privacy-policy'
      ? setScrolled(true)
      : null;
  }, [router]);

  return (
    <AppShell
      header={{ height: 64 }}
      bg={'g-dark.0'}
      padding="md"
      styles={{
        root: { '--app-shell-border-color': 'transparent' },
      }}
    >
      <AppShell.Header className={navbarClass}>
        <Group h="100%" px="xl" w="100%">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group gap={2} visibleFrom="md">
              {navLinkItems}
            </Group>
            <Image
              src={Logo.src}
              alt="FRAGO Logo"
              style={{ maxHeight: '45px', cursor: 'pointer' }}
              onClick={() => {
                animateScroll.scrollTo(0, { smooth: true, duration: 800 });
                router.pathname !== '/' && router.push('/');
              }}
            />
            <Group visibleFrom="md">
              <LinkContainer />
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              size="sm"
              color="g-dark.9"
              aria-label="Toggle navigation menu"
            />
          </Group>
        </Group>
      </AppShell.Header>
      <Sidebar open={opened} close={close} className={navbarClass}>
        <Image
          src={Logo.src}
          alt="G'emma Logo"
          style={{ height: '45px', width: '45%', cursor: 'pointer', paddingLeft: '20px' }}
          onClick={() => animateScroll.scrollTo(0, { smooth: true, duration: 800 })}
        />
        <Group
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingInline: 'var(--mantine-spacing-xl)',
            paddingBlock: 'var(--mantine-spacing-xl)',
            scrollBehavior: 'smooth',
          }}
        >
          {navLinkItems}
        </Group>
        <LinkContainer className={styles.linkContainerMobile} />
      </Sidebar>
      <AppShell.Main style={{ padding: '0' }}>
        {router.pathname !== '/impressum' && router.pathname !== '/privacy-policy' && (
          <Hero ref={ref} />
        )}
        {children}
      </AppShell.Main>
      {/* <AppShell.Section
        bg={'g-dark.4'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          gap: 32,
          padding: '12px 16px',
        }}
      >
        <Flex
          style={{
            width:
              data?.supportLogosCollection?.items && data?.supportLogosCollection?.items.length <= 1
                ? '100%'
                : '',
          }}
          align={'center'}
          justify={'center'}
          gap={{ base: 8, sm: 16 }}
        >
          {data?.supportLogosCollection?.items.map((item) => (
            <Flex
              className={styles.supportLogos}
              direction={{ base: 'column', sm: 'row' }}
              gap={{ base: 8, sm: 16 }}
              justify={'center'}
              align={'center'}
              key={item?.title}
            >
              {item?.url && (
                <ContentfulImage
                  src={item?.url}
                  width={(item?.width as number) / 20 || 100}
                  height={(item?.height as number) / 20 || 70}
                  alt={item.title}
                  sizes="(max-width: 768px) 100vw"
                  style={{ objectFit: 'cover' }}
                />
              )}
              <Text c={'g-dark.0'} size="12px" lh={1.5}>
                {item?.description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </AppShell.Section> */}
      <AppShell.Section
        component="footer"
        bg="g-dark.9"
        color="g-dark.0"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          gap: 32,
          padding: '12px 0',
        }}
      >
        <Flex direction="column" align={'center'} justify={'center'} gap={8}>
          <Flex gap={16} align={'center'}>
            <Anchor href="/impressum" className={styles.footerLink} size="14px">
              Impressum
            </Anchor>
            <Text c={'g-dark.0'} fw={600} size="14px">
              |
            </Text>
            <Anchor href="/privacy-policy" className={styles.footerLink} size="14px">
              Privacy Policy
            </Anchor>
          </Flex>
          <Flex gap={8} align={'center'} direction={{ base: 'column', sm: 'row' }}>
            <Text c={'g-dark.0'} size="14px">
              © {currentYear} FRAGO.
            </Text>
            <Text c={'g-dark.0'} size="14px">
              Developed by{' '}
              <Anchor
                c={'g-dark.0'}
                size="14px"
                href="https://www.sophiaauer.me/"
                target="_blank"
                className={styles.footerLink}
              >
                Fio Auer
              </Anchor>
              .
            </Text>
          </Flex>
        </Flex>
      </AppShell.Section>
    </AppShell>
  );
};

export default Layout;
