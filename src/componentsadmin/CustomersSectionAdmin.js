
import { async } from '@firebase/util';
import { Carousel } from '@mantine/carousel';
import { createStyles, Container, Text, Button, Group, Grid, Skeleton, SimpleGrid, Card, Avatar, CloseButton } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseconfig';
const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
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

  title2: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 28,
    fontWeight: 300,
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

export function CustomersSectionAdmin() {

  const [ getdata, setGetdata ] = useState("")

  const printData = async() => {
      const querySnapshot = await getDocs(collection(db, "comments"));
      let setData = [];
      querySnapshot.forEach((doc) => {
      setData.push(doc.data())
      setGetdata(setData)
    });
      }


  useEffect(() => {
    printData()
  }, [])

  

  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size='md' className={classes.inner}>
      
      <Text size="lg" weight={500} className={classes.title2} >
          !!! Everything shown on this page is a representation of how it would look like on the site. !!!
        </Text>

      <Text size="lg" weight={500} className={classes.title} >
      What{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'green', to: '#3E7D45' }} inherit>
            our customers
          </Text>{' '}
          say
        </Text>

        <Carousel
          withIndicators
          height={400}
          slideSize="33.33333%  "
          slideGap="md"
          slidesToScroll={1}
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
          ]}
          align="start"
          sx={{marginTop:120}}>

        {Object.values(getdata).map((data, i ) => {
        return(
          <Carousel.Slide sx={{marginLeft: 20}}>
          <Card shadow="md" radius="md" className={classes.card} p="xl">
            <Group>
            <CloseButton style={{marginLeft: 'auto'}} aria-label="Close modal" 
            onClick={async() => {
              
              const q = query(collection(db, "comments"), where("name", "==", data.name), 
                                                          where("commentTitle", "==", data.commentTitle), 
                                                          where("site", "==", data.site));

                                                          const querySnapshot = await getDocs(q);
                                                          querySnapshot.forEach((doc) =>{
                                                            deleteDoc(doc.ref)
                                                            .then(() => {
                                                              console.log("Doc Deleted")
                                                            })
                                                          })
            }}
            />
            </Group>
            <Group spacing='xs'>
                <Avatar size={70} radius={120} />
                 <div style={{marginRight: 'auto'}}>
                    <Text size="lg" weight={500}>
                        {data.name}
                    </Text>
                    <Text size="xs" weight={400} color="dimmed">
                        {data.site}
                    </Text>
                 </div>
                 
            </Group>
            
            <Text size="md" sx={{ marginTop: 40 }} weight={400} >
            {data.commentTitle}
            </Text>
            
            <Text size="md" sx={{ marginTop: 20 }} color="dimmed" weight={300} >
            {data.commentDescription}
            </Text>
           
        </Card>
        </Carousel.Slide>
        )
      })}
      </Carousel>


       
      </Container>

    </div>
  );
}