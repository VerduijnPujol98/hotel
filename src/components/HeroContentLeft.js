import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://a0.muscache.com/im/pictures/286bb35c-fd1f-43f2-bcba-0b5963c08b95.jpg?im_w=960)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    marginTop: -120,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 75,
    fontWeight: 900,
    lineHeight: 1.4,
    width: '50vw',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 60,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 40,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 2,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(90deg, rgba(62, 124, 69, 100) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={0.4}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Making your Comfort is our happiness</Title>


        <Button size="xl" radius="xl" className={classes.control}>
          Learn More.
        </Button>
      </Container>
    </div>
  );
}