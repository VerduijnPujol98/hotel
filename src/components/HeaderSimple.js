import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Button, Transition, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import { useLocation } from 'react-router-dom';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({

  
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
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
      display: 'block',
      lineHeight: 1,
      padding: '8px 12px',
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  },

}));



export function HeaderSimple() {

  const [opened, { toggle }] = useDisclosure(false);  
  const { classes, cx } = useStyles();
  let location = useLocation()


  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <MantineLogo size={28} />
        <Group spacing={5} className={classes.links}>
        <a
      href="/"
      className={location.pathname = "/" ? classes.linkActive : classes.link}>
        Home
    </a>
    <a
      href="/login"
      className={cx(classes.link)}>
        Rooms
    </a>
    <a
      href="/login"
      className={cx(classes.link)}>
        Contact
    </a>
    <Button>
      Book Room
    </Button>
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
                  <a
                    href="/login"
                    className={cx(classes.link)}>
                      Home
                  </a>
                  <a
                    href="/login"
                    className={cx(classes.link)}>
                      Rooms
                  </a>
                  <a
                    href="/login"
                    className={cx(classes.link)}>
                      Contact
                  </a>
                  <a
                    href="/login"
                    className={cx(classes.link)}>
                      Book a Room
                  </a>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}