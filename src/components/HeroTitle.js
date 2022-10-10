import { createStyles, Container, Text, Button, Group, Grid, Skeleton, SimpleGrid } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    display: 'flex',
    paddingTop: 150,
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

  description: {
    maxWidth: 600,
    margin: 'auto',
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
}));

export function HeroTitle() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size='md' className={classes.inner}>

      <Text size="lg" weight={500} className={classes.title} >
          In{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'green', to: '#3E7D45' }} inherit>
            the heart
          </Text>{' '}
          of Saigon
        </Text>

      <SimpleGrid cols={2} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
      <Container>
        <Text color="dimmed" className={classes.description}  mt="md">
        G9 Homestay is located in an alley in central District 1 with just about a 10-15 minutes walk away from Backpackers street (Bui Vien). 
        Although Bui Vien street is known for attracting lots of tourists and locals this neighborhood is very quiet. We provide a fully furnished 
        studio and 24/7 security and service.</Text>

        <Text></Text>{' '}

        <Text color="dimmed" className={classes.description}  mt="md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Container>


      <Container>
        <Skeleton>
        <Text color="dimmed" className={classes.description}  mt="md">
        G9 Homestay is located in an alley in central District 1 with just about a 10-15 minutes walk away from Backpackers street (Bui Vien). 
        Although Bui Vien street is known for attracting lots of tourists and locals this neighborhood is very quiet. We provide a fully furnished 
        studio and 24/7 security and service.</Text>

        <Text></Text>{' '}

        <Text color="dimmed" className={classes.description}  mt="md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Text color="dimmed" className={classes.description}  mt="md">
        G9 Homestay is located in an alley in central District 1 with just about a 10-15 minutes walk away from Backpackers street (Bui Vien). 
        Although Bui Vien street is known </Text>

        </Skeleton>
      </Container>

      </SimpleGrid>
      </Container>

    </div>
  );
}