import React, { FC, ReactNode, useEffect, useState } from 'react';
import styles from './Layout.module.scss';
import Logo from '@app/assets/logo.png';
import { Anchor, AppShell, Burger, Flex, Group, Image, SimpleGrid, Text } from '@mantine/core';
import { useDisclosure, useIntersection } from '@mantine/hooks';
import LinkContainer from '../LinkContainer/LinkContainer';
import Hero from '../sections/Hero/Hero';
import { animateScroll, Link } from 'react-scroll';
import Sidebar from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';

const navLinks = [
  { label: 'Live' },
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
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [scrolled, setScrolled] = useState<Boolean>(false);
  const { ref, entry } = useIntersection({
    root: null,
    threshold: 0.15,
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
        offset={item.label === 'Live' ? -100 : -50}
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
      header={{ height: 'max-content' }}
      bg={'grey.0'}
      padding="md"
      styles={{
        root: { '--app-shell-border-color': 'transparent' },
      }}
    >
      <AppShell.Header className={navbarClass}>
        <Group h="100%" px="xl" w="100%">
          <Flex
            align="center"
            style={{ flex: 1 }}
            direction={{ base: 'row', sm: 'column' }}
            justify={'space-between'}
            className={styles.navGroup}
          >
            <Group gap={2} visibleFrom="sm">
              {navLinkItems}
            </Group>
            <Image
              src={Logo.src}
              alt="FRAGO Logo"
              onClick={() => {
                animateScroll.scrollTo(0, { smooth: true, duration: 800 });
                router.pathname !== '/' && router.push('/');
              }}
              className={styles.logo}
            />
            <Group visibleFrom="sm">
              <LinkContainer size="small" />
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color="primary.9"
              aria-label="Toggle navigation menu"
            />
          </Flex>
        </Group>
      </AppShell.Header>
      <Sidebar open={opened} close={close} className={navbarClass}>
        <Image
          src={Logo.src}
          alt="G'emma Logo"
          style={{
            height: '45px',
            width: '52%',
            cursor: 'pointer',
            paddingLeft: '25px',
            paddingTop: '4px',
          }}
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
      <AppShell.Section
        component="footer"
        bg="primary.9"
        color="grey.0"
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
            <Text c={'grey.0'} fw={600} size="14px">
              |
            </Text>
            <Anchor href="/privacy-policy" className={styles.footerLink} size="14px">
              Privacy Policy
            </Anchor>
          </Flex>
          <Flex gap={8} align={'center'} direction={{ base: 'column', sm: 'row' }}>
            <Text c={'grey.0'} size="14px">
              © {currentYear} FRAGO.
            </Text>
            <Text c={'grey.0'} size="14px">
              Developed by{' '}
              <Anchor
                c={'grey.0'}
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
