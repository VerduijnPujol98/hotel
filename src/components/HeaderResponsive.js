import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import { useLocation } from 'react-router-dom';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.white,
      display: 'block',
      lineHeight: 1,
      padding: '8px 12px',
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
    },
  },
}));



export function HeaderResponsive() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const location = useLocation()

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <MantineLogo size={28} />
        <Group spacing={5} className={classes.links}>
        <a
        href="/"
        className={location.pathname === "/" ? classes.linkActive : classes.link}
        >
        Home
        </a>
        <a
        href="/rooms"
        className={location.pathname === "/rooms" ? classes.linkActive : classes.link}
        >
        Rooms
        </a>
        <a
        href="/contact"
        className={location.pathname === "/contact" ? classes.linkActive : classes.link}
        >
        Contact
        </a>
        <a
        href="/work"
        className={location.pathname === "/work" ? classes.linkActive : classes.link}
        >
        Work with G9
        </a>
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
                        <a
        href="/"
        className={location.pathname === "/" ? classes.linkActive : classes.link}
        >
        Home
        </a>
        <a
        href="/rooms"
        className={location.pathname === "/rooms" ? classes.linkActive : classes.link}
        >
        Rooms
        </a>
        <a
        href="/contact"
        className={location.pathname === "/contact" ? classes.linkActive : classes.link}
        >
        Contact
        </a>
        <a
        href="/work"
        className={location.pathname === "/work" ? classes.linkActive : classes.link}
        >
        Work with G9
        </a>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}