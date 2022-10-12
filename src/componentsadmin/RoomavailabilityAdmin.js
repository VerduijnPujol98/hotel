import { Carousel } from '@mantine/carousel';
import { createStyles, Container, Text, Button, Group, Grid, Skeleton, SimpleGrid, Card, Avatar, Image } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import { IconStar } from '@tabler/icons';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseconfig';

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





  const [ getdata, setGetdata ] = useState("")

  const printData = async() => {
      const querySnapshot = await getDocs(collection(db, "rooms"));
      let setData = [];
      querySnapshot.forEach((doc) => {
      setData.push(doc.data())
      setGetdata(setData)
    });
      }


  useEffect(() => {
    printData()
  }, [])

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

        {Object.values(getdata).map((data, i) => {
          const images = [data.url]
          const slides = images.map((image) => (
            <Carousel.Slide key={image}>
              <Image src={image} height={220} />
            </Carousel.Slide>
          ));
        return(
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                <Card shadow="md" radius="md" className={classes.card} p="xl" key={i}>
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
                    {data.name}
                  </Text>

                  <Group spacing={5}>
                    <IconStar size={16} />
                    <Text size="xs" weight={500}>
                      {data.rating}
                    </Text>
                  </Group>
                </Group>

                <Text size="sm" color="dimmed" mt="sm">
                  {data.roomDescription}
                </Text>

                <Group position="apart" mt="md">
                  <div>
                    <Text size="xl" span weight={500} className={classes.price}>
                      {data.roomprice} VND
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
                )
              })}

        
      </Container>

    </div>
  );
}