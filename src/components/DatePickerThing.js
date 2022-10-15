import { Text, Progress, Card, createStyles, Center, Select, Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useState } from 'react';
import dayjs from 'dayjs';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: 'white',
    width: '80vw',
    top: -50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    overflow:'visible',
    [theme.fn.smallerThan('sm')]: {
      top: 0,
      marginTop: 30,
      width :'80vw',
    },
  },

  stat: {
    paddingLeft: theme.spacing.xl,
    marginLeft: theme.spacing.xl,
    borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,
  },

  div: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center'
  },


}));



export function DatePickerThing() {

  const [checkinvalue, checkinonChange] = useState(new Date());
  const [checkoutvalue, checkoutonChange] = useState(new Date());
  const [numberofpeople, setNumberofpeople] = useState("");
  const { classes } = useStyles();

  return (
  <div className={classes.div}>
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <DatePicker minDate={dayjs(new Date()).add(1, 'days').toDate()} 
                  value={checkinvalue} 
                  onChange={checkinonChange} 
                  placeholder="Pick date" 
                  label="Check In" 
                  excludeDate= {(date) => date.getTime() === new Date('2022-10-17T00:00').getTime()
                  
                }
                  />

      <DatePicker minDate={dayjs(new Date(checkinvalue)).add(1, 'days').toDate()} 
                  value={checkoutvalue} 
                  onChange={checkoutonChange} 
                  className={classes.stat} 
                  placeholder="Pick date" 
                  label="Check Out"  />

    <Select data={['1', '2']}
            placeholder="Pick one"
            label="Number of people"
            className={classes.stat}
            onChange={setNumberofpeople}/>

    <Button className={classes.stat} sx={{
      width: 150
    }}
    
    onClick={() => {
      console.log(checkinvalue)
    }}>
      Book
    </Button>
    </Card>
  </div>
  );
}