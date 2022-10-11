import { Avatar, Button, Card, Container, createStyles, Group, Image, Select, SimpleGrid, Text, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { db, storage } from '../firebaseconfig';
import { addDoc, collection,  } from 'firebase/firestore';
import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));


export function ContainedInputsRoom() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  const [ roomname, setRoomname ] = useState("")
  const [ rating, setRating ] = useState("")
  const [ roomdescription, setRoomDescription] = useState("")
  const [ price, setPrice] = useState("")
  const [ photo, setPhoto] = useState()
  const [ url, setUrl ] = useState("")

  const promiseTimeout = new Promise((resolve) => (setTimeout(() => resolve(false),  5000)))



  const addData = async() => {
    
  
  const storageRef = ref(storage, `files/${photo.name}`);
  uploadBytes(storageRef, photo).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    getDownloadURL(storageRef)
    .then((url) => {
      setUrl(url)
      console.log(url)
    })
  });

  const response = await Promise.race([promiseTimeout])
  if(!response){
    await addDoc(collection(db, "rooms", roomname), {
      name: roomname,
      rating: rating,
      roomDescription: roomdescription,
      roomprice: price,
      url: url,
    },);  
    console.log("DB ADDED")
  }
    
  }


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
    <div>
            <Container size='md' className={classes.inner}>

            <Text size="lg" weight={500} className={classes.title} >
                Layout Example
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
                    Room Name
                </Text>

                <Group spacing={5}>
                    <IconStar size={16} />
                    <Text size="xs" weight={500}>
                    (number of ratings)
                    </Text>
                </Group>
                </Group>

                <Text size="sm" color="dimmed" mt="sm">
                Room Description
                </Text>

                <Group position="apart" mt="md">
                <div>
                    <Text size="xl" span weight={500} className={classes.price}>
                    Room Price$
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



      <Container>


        <TextInput style={{ marginTop: 20, zIndex: 2 }} 
        label="Room price" 
        placeholder="Price of room" 
        classNames={classes} 
        onChange={(event) => setPrice(event.target.value)}
        />

        <TextInput 
        style={{ marginTop: 20, zIndex: 2 }} 
        label="Room Name" 
        placeholder="Room's name" 
        classNames={classes} 
        onChange={(event) => setRoomname(event.target.value)}
        />

        <TextInput 
        style={{ marginTop: 20, zIndex: 2 }} 
        label="Room Description" placeholder="Description of Room" 
        classNames={classes} 
        onChange={(event) => setRoomDescription(event.target.value)}
        />

        <TextInput 
        style={{ marginTop: 20, zIndex: 2 }} 
        label="Rating" placeholder="Rating from 1-5" 
        classNames={classes} 
        onChange={(event) => setRating(event.target.value)}
        />

          <Dropzone
            style={{ marginTop: 20, zIndex: 2 }}
            onDrop={(e) => setPhoto(e[0])}
            accept={IMAGE_MIME_TYPE}
            sx={(theme) => ({
              minHeight: 120,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 0,
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

              '&[data-accept]': {
                color: theme.white,
                backgroundColor: theme.colors.blue[6],
              },

              '&[data-reject]': {
                color: theme.white,
                backgroundColor: theme.colors.red[6],
              },
            })}
          >
            <Text align="center">Drop images here</Text>
          </Dropzone>

        <Button 
        style={{ marginTop: 20, zIndex: 2 }} 
        width='100vw'
        onClick={addData}
        >
          
          Submit</Button>
      </Container>
    </div>
  );
}