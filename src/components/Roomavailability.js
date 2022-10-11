import { Carousel } from '@mantine/carousel';
import { createStyles, Container, Text, Button, Group, Grid, Skeleton, SimpleGrid, Card, Avatar, Image } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import { IconStar } from '@tabler/icons';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    display: 'flex',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    display: 'flex',
    paddingTop: 120,
    paddingBottom: 120,
    flexDirection:'column',

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    justifySelf: 'center',
    alignSelf:'center',

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },


  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },
  
  carouselControls: {
    ref: getRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: 4,
    height: 4,
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: 16,
    },
  },
}));

export function Roomavailability() {
  const { classes } = useStyles();


  const images = [
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  ];

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size='md' className={classes.inner}>

      <Text size="lg" weight={500} className={classes.title} >
          Our{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'green', to: '#3E7D45' }} inherit>
            Available
          </Text>{' '}
          Rooms
        </Text>

        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <Card shadow="md" radius="md" className={classes.card} p="xl">
        <Card.Section>
          <Carousel
            withIndicators
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {slides}
          </Carousel>
        </Card.Section>

        <Group position="apart" mt="lg">
          <Text weight={500} size="lg">
            Forde, Norway
          </Text>

          <Group spacing={5}>
            <IconStar size={16} />
            <Text size="xs" weight={500}>
              4.78
            </Text>
          </Group>
        </Group>

        <Text size="sm" color="dimmed" mt="sm">
          Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in
          ultimate comfort. Enjoy the view of the epic mountain range of Blegja and the Førdefjord.
        </Text>

        <Group position="apart" mt="md">
          <div>
            <Text size="xl" span weight={500} className={classes.price}>
              397$
            </Text>
            <Text span size="sm" color="dimmed">
              {' '}
              / night
            </Text>
          </div>

          <Button radius="md">Book now</Button>
        </Group>
      </Card>
      </SimpleGrid>
      </Container>

    </div>
  );
}