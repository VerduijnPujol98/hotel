import { createStyles, Container, Text, Button, Group, Grid, Skeleton, SimpleGrid, Card, Avatar } from '@mantine/core';
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
}));

export function CustomersSection() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size='md' className={classes.inner}>

      <Text size="lg" weight={500} className={classes.title} >
          What{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'green', to: '#3E7D45' }} inherit>
            our customers
          </Text>{' '}
          say
        </Text>
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <Card shadow="md" radius="md" className={classes.card} p="xl">
            <Group noWrap>
                <Avatar size={70} radius={120} mx="auto"/>
                 <div>
                    <Text size="lg" weight={500}>
                        Asuka Leen Verduijn
                    </Text>
                    <Text size="xs" weight={400} color="dimmed">
                        AirBnB
                    </Text>
                 </div>
            </Group>
            
            <Text size="md" sx={{ marginTop: 40 }} weight={400} >
            Awesome Service
            </Text>
            
            <Text size="md" sx={{ marginTop: 20 }} color="dimmed" weight={300} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

        </Card>

        <Card shadow="md" radius="md" className={classes.card} p="xl">
            <Group noWrap>
                <Avatar size={70} radius={120} mx="auto"/>
                 <div>
                    <Text size="lg" weight={500}>
                        Asuka Leen Verduijn
                    </Text>
                    <Text size="xs" weight={400} color="dimmed">
                        AirBnB
                    </Text>
                 </div>
            </Group>
            
            <Text size="md" sx={{ marginTop: 40 }} weight={400} >
            Awesome Service
            </Text>
            
            <Text size="md" sx={{ marginTop: 20 }} color="dimmed" weight={300} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

        </Card>


        <Card shadow="md" radius="md" className={classes.card} p="xl">
            <Group noWrap>
                <Avatar size={70} radius={120} mx="auto"/>
                 <div>
                    <Text size="lg" weight={500}>
                        Asuka Leen Verduijn
                    </Text>
                    <Text size="xs" weight={400} color="dimmed">
                        AirBnB
                    </Text>
                 </div>
            </Group>
            
            <Text size="md" sx={{ marginTop: 40 }} weight={400} >
            Awesome Service
            </Text>
            
            <Text size="md" sx={{ marginTop: 20 }} color="dimmed" weight={300} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

        </Card>
        </SimpleGrid>
      
      </Container>

    </div>
  );
}