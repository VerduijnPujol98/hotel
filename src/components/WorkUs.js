import {
    createStyles,
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    Container,
    Card,
    Box,
    BackgroundImage,
    Image,
    Overlay,
  } from '@mantine/core';
  import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: theme.black,
      lineHeight: 1,
    },
    


    title2: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 62,
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: 100,
        padding: 0,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        justifySelf: 'center',
        alignSelf:'center',
      },
  
    description: {
      color: theme.black,
      maxWidth: 300,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },

    social: {
      color: theme.black,
  
      '&:hover': {
        color: theme.colors[theme.primaryColor][1],
      },
    },
  

  
    control: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },
  }));
  
  const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  
  export function WorkUs() {
    const { classes } = useStyles();
  
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
        <Icon size={22} stroke={1.5} />
      </ActionIcon>
    ));
  
    return (
      <div>
        <Container sx={{display: 'flex', flexDirection:'column'}}>
            <Box sx={{display: 'flex', textAlign: 'center'}}>
            <Text size="lg" weight={500} className={classes.title2} >
            Are
            {' '}
            <Text component="span" variant="gradient" gradient={{ from: 'green', to: '#3E7D45' }} inherit>
                You
            </Text>
            {' '}
            Our Next Team Member?
            </Text>
            </Box>
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <div>
            <Title className={classes.title}>Be part of the team.</Title>
            <Text className={classes.description} mt="sm" mb={30}>
            G9 is always looking to grow the team. Fill in the form to join the family!
            </Text>
  
            <Group mt="xl">{icons}</Group>
          </div>
          <Card withBorder shadow="sm" radius="md">
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
            />
            <Textarea
              required
              label="Your message"
              placeholder="I would like to apply because..."
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            
            <Group position="right" mt="md">
              <Button className={classes.control}>Send message</Button>
            </Group>
          </Card>
        </SimpleGrid>

        </Container>
         
        <Container mt={200} sx={{display: 'flex', flexDirection:'column'}}>
            <Box sx={{display: 'flex', textAlign: 'center'}}>
            <Text size="lg" weight={500} className={classes.title2} >
            Interested In
            {' '}
            <Text component="span" variant="gradient" gradient={{ from: 'green', to: '#3E7D45' }} inherit>
            Collaborating
            </Text>
            {' '}
            With Us?
            </Text>
            </Box>
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Card withBorder shadow="sm" radius="md">
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
            />
            <Textarea
              required
              label="Your message"
              placeholder="I would like to apply because..."
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            
            <Group position="right" mt="md">
              <Button className={classes.control}>Send message</Button>
            </Group>
          </Card>
          <div>
            <Title className={classes.title}>Join the empire.</Title>
            <Text className={classes.description} mt="sm" mb={30}>
            G9 offers complete or partual managements of your accomodation supplier. Fill in the form and we will contact you for further information
            </Text>
  
            <Group mt="xl">{icons}</Group>
          </div>
        </SimpleGrid>

        </Container>
    </div>
    
    );
  }