import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card, Select, Stepper } from '@mantine/core'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import { DatePicker } from '@mantine/dates'
import dayjs from 'dayjs'

const Checkout = () => {

    const room = useSelector((state) => state.room.value)
    const [roomdata, setRoomData ] = useState("");
    
    

    const [getData, setGetData] = useState([])

    const DocQuery = async () => {
        const querySnapshot = await getDocs(collection(db, "rooms"));
        const tempdata = [];
        querySnapshot.forEach((doc) => {
            tempdata.push(doc.data())
            setGetData(tempdata)
        })
    }

    useEffect(() => {
        DocQuery()
        setRoomData(room)
        console.log(roomdata)
        console.log(room)
    }, [])

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current))
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))


  return (
    <div style={{display: 'flex', alignContent:'center', justifyContent: 'center'}}> 
    <Card shadow="sm" p="lg" radius="md" withBorder sx={{width: '50vw', margin: 100, overflow: 'visible',}}>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step label="First Step" description="Fill in basic information">
                <Select
                label="Pick your Room of Choice"
                placeholder='Pick a Room'
                value={roomdata.name}
                data={Object.values(getData).map((data, i) => {
                    return(
                            { value: data.name, label: data.name }  
                    )
                          
                })}
                onChange={(setRoomData)}
                >   
                </Select>

                <DatePicker 
                sx={{marginTop: 20}}
                minDate={dayjs(new Date()).add(1, 'days').toDate()} 
                placeholder="Pick date" 
                label="Check In" 
                excludeDate= {(date) => date.getTime() === new Date('2022-10-17T00:00').getTime()}
                />
            </Stepper.Step>
            <Stepper.Step label="Second Step" description="Fill in basic information">
                Step 2 Content
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