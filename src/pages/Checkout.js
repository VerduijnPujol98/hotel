import React, { forwardRef, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Card, Select, Stepper, Text } from '@mantine/core'
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'
import { ref } from 'firebase/storage'

const Checkout = () => {

    const room = useSelector((state) => state.room.value)
    const [roomdata, setRoomData ] = useState([]);
    const [getData, setGetData] = useState([])
    const [startdate, setStartDate ] = useState(new Date())


    const DocQuery = async () => {
        const querySnapshot = await getDocs(collection(db, "rooms"));
        const tempdata = [];
        querySnapshot.forEach((doc) => {
            tempdata.push(doc.data())
            setGetData(tempdata)
        })
    }

    const map = Object.values(getData).map((data) => {
        return(
            {value: data.name, label:data.name}
        )

    })

    
        const [realtimedata, setrealtimedata] = useState([]);
        const roomRef = collection(db, "rooms")
        const q = query(roomRef, where("name", "==", roomdata))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const snapshot = []
            querySnapshot.forEach((doc) => {
                snapshot.push(doc.data())
                setrealtimedata(snapshot)
            })
            
        })



    useEffect(() => {
        DocQuery()
        console.log(getData)
        

        

    }, [])

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current))
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

    


        const listDate = [];
        const startDate = '2022-10-18T00:00';
        const endDate = '2022-10-20T00:00';
        const dateMove = new Date(startDate);
        let strDate = startDate;

        while (strDate < endDate) {
        strDate = dateMove.toISOString().slice(0, 10);
        listDate.push(strDate);
        dateMove.setDate(dateMove.getDate() + 1);
        };




    //(date) => date.getTime() === new Date('2022-10-20T00:00').getTime()

  return (
    <div style={{display: 'flex', alignContent:'center', justifyContent: 'center'}}> 
    <Card shadow="sm" p="lg" radius="md" withBorder sx={{width: '50vw', margin: 100, overflow: 'visible',}}>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm" >
            <Stepper.Step label="First Step" description="Select Room and amount of People">
                <Select
                label="Pick your Room of Choice"
                placeholder='Pick a Room'
                data={map}
                value={roomdata.name}
                onChange={(event) => {setRoomData(event); }}
                >   
                </Select>

                <Button sx={{marginTop: 20}} onClick={() => {console.log(console.log(realtimedata))}}>Test</Button>

            </Stepper.Step>
            
            <Stepper.Step label="Second Step" description="Fill in basic information">
            <Card sx={{display: 'flex', flexDirection:'row'}}>
                    <ReactDatePicker  excludeDates={listDate.map((data) => 
                                    {return new Date(data);})}  
                                    onChange={(date) => setStartDate(date)} 
                                    selected={startdate}
                                    inline
                                    >
                                    
                    </ReactDatePicker> 
            </Card>
            </Stepper.Step>
            <Stepper.Step label="Last Step" description="Fill in basic information">
            Step 2 Content
        </Stepper.Step>
        </Stepper>
    </Card>
    </div>
  )
}

export default Checkout