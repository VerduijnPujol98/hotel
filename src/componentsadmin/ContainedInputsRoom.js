import { Avatar, Button, Card, Container, createStyles, Group, Select, SimpleGrid, Text, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { db } from '../firebaseconfig';
import { addDoc, collection,  } from 'firebase/firestore';
import { useState } from 'react';

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

  const [ username, setUserName ] = useState("")
  const [ sitename, setSitename ] = useState("")
  const [ commenttitle, setCommentTitle] = useState("")
  const [ commentdescription, setCommentDescription] = useState("")

  const addData = async() => {

    await addDoc(collection(db, "comments"), {
    
      name: username,
      site: sitename,
      commentTitle: commenttitle,
      commentDescription: commentdescription,
    },
    setUserName(""),
    setSitename(""),
    setCommentTitle(""),
    setCommentDescription(""),
    console.log("hello world")
    );

    
  }

  return (
    <div>
            <Container size='md' className={classes.inner}>

            <Text size="lg" weight={500} className={classes.title} >
                Layout Example
              </Text>
              <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              <Card shadow="md" radius="md" className={classes.card} p="xl">
                  <Group noWrap>
                      <Avatar size={70} radius={120} mx="auto"/>
                      <div>
                          <Text size="lg" weight={500}>
                              Name of User
                          </Text>
                          <Text size="xs" weight={400} color="dimmed">
                              Where User's comment is from
                          </Text>
                      </div>
                  </Group>
                  
                  <Text size="md" sx={{ marginTop: 40 }} weight={400} >
                  Comment Title
                  </Text>
                  
                  <Text size="md" sx={{ marginTop: 20 }} color="dimmed" weight={300} >
                  Comment Description
                  </Text>

              </Card>
              </SimpleGrid>
              </Container>



      <Container>

        <Select
          style={{ marginTop: 20, zIndex: 2, overflow:"visible" }}
          data={[
            { value: 'AirBnb', label: 'Airbnb' },
            { value: 'Booking', label: 'Booking' },
            { value: 'Agoda', label: 'Agoda' },
          ]}
          dropdownPosition="top"
          placeholder="Pick one"
          label="Where User's comment is from"
          classNames={classes}
          onChange={(event) => setSitename(event.toString())}
         
        />

        <TextInput style={{ marginTop: 20, zIndex: 2 }} 
        label="User" 
        placeholder="Name of User" 
        classNames={classes} 
        onChange={(event) => setUserName(event.target.value)}
        value={username}
        />

        <TextInput 
        style={{ marginTop: 20, zIndex: 2 }} 
        label="Comment Title" 
        placeholder="User's comment Title" 
        classNames={classes} 
        onChange={(event) => setCommentTitle(event.target.value)}
        />

        <TextInput 
        style={{ marginTop: 20, zIndex: 2 }} 
        label="Comment Description" placeholder="What the user wrote" 
        classNames={classes} 
        onChange={(event) => setCommentDescription(event.target.value)}
        />

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