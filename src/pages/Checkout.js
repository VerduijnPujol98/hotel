import { Box, Button, Card, MediaQuery, Select, Stepper, Text, TextInput } from '@mantine/core';
import { IconBed, IconShieldCheck, IconUserCheck } from '@tabler/icons';
import { addDoc, collection, collectionGroup, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import React, { forwardRef, useEffect, useState } from 'react'
import { db } from '../firebaseconfig';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const Checkout = () => {

    const [active, setActive] = useState(0)
    const [ pushdoc, setPushDoc ] = useState("")
    const [ pushdate, setPushdate ] = useState("")
    const [ select, setSelect ] = useState("")
    const [ selectcheckinDate, setSelectcheckinDate ] = useState(new Date())
    const [ selectcheckoutDate, setSelectcheckoutDate ] = useState(new Date())



    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


    const getDocument = async () => {
        const querySnapshot = await getDocs(collection(db, "rooms"))
        let tempdata = []
        querySnapshot.forEach((doc) => {
        tempdata.push(doc.data().name)
        setPushDoc(tempdata)
        })
        
    }

    const getDateFunction = async (data) => {
        const snapref2 = collection(db,`rooms/${data}/users`)
        const querySnapshot = await getDocs(snapref2);
        let tempdata = []
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            tempdata.push(data)
            console.log(doc.id, ' => ', data);
            setPushdate(tempdata)

        });
    }


    const CheckinInput = forwardRef(({ value, onClick }, ref) => (
        <TextInput 
        ref={ref}
        placeholder={value}
        label = "Check In Date"
        onClick={onClick}
        >
        </TextInput>
      ));

      const CheckoutInput = forwardRef(({ value, onClick }, ref) => (
        <TextInput 
        ref={ref}
        placeholder={value}
        label = "Check Out Date"
        onClick={onClick}
        >
        </TextInput>
      ));



    useEffect(() => {
        getDocument()
        console.log(pushdoc)
        getDateFunction()
    }, [])



    
  return (
    <div style={{display: 'flex', justifyContent: 'center',}}>
        <MediaQuery smallerThan="sm" styles={{ width: '80vw'}}>
        <Card shadow="sm" p="lg" radius="md" withBorder sx={{width: '50vw', marginTop: 50, overflow:'visible'}}>
        <Stepper active={active} onStepClick={setActive}>
            <Stepper.Step icon={<IconBed size={18}/>}>
                <Box sx={{display:'flex', marginTop: 20}}>


                    <Text color="dimmed" size='sm'>Your registration will be verified prior to your arrival.</Text>
                </Box>
                <Box sx={{display:'flex', marginTop:20}}>
                    <Select sx={{width:'47vw'}} 
                                placeholder="Select a Room" 
                                label="Select Room"
                                value={select}
                                onChange={(data) => {getDateFunction(data); setSelect()}}
                                data={Object.values(pushdoc).map((data) =>{
                                    return data
                                })
                            }
                                ></Select>
                </Box>
                <Box sx={{display:'flex' , flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                <ReactDatePicker 
                minDate={new Date()}
                startDate={selectcheckinDate}
                endDate={selectcheckoutDate}
                selectsStart
                selected={selectcheckinDate}
                onChange={(date) => setSelectcheckinDate(date)}
                customInput={<CheckinInput />}
                excludeDateIntervals={Object.values(pushdate).map((data) => {
                                        return {start: (new Date(data.checkindate)), end: (new Date(data.checkoutdate))}
                                     })}

                ></ReactDatePicker>

                <ReactDatePicker 
                startDate={selectcheckinDate}
                endDate={selectcheckoutDate}
                selectsEnd
                selected={selectcheckoutDate}
                onChange={(date) => setSelectcheckoutDate(date)}
                customInput={<CheckoutInput />}
                excludeDateIntervals={Object.values(pushdate).map((data) => {
                                        return {start: (new Date(data.checkindate)), end: (new Date(data.checkoutdate))}
                                     })}

                ></ReactDatePicker>

                </Box>

                <Box sx={{display:'flex', marginTop:40, flexDirection:'column'}}>
                    <Button onClick={nextStep}>Next</Button>
                </Box>
            </Stepper.Step>
            <Stepper.Step icon={<IconUserCheck size={18}/>}>
                <Box sx={{display:'flex', marginTop: 20}}>
                    <Text color="dimmed" size='sm'>Your registration will be verified prior to your arrival.</Text>
                </Box>
                <MediaQuery smallerThan="sm" styles={{ display:'block', width: '30vw'}}>
                <Box sx={{display:'flex' , flexDirection:'row', marginTop:20}}>
                    <TextInput sx={{width:'23vw'}} placeholder="Your First Name" label="First Name"></TextInput>
                    <TextInput sx={{width:'23vw'}} placeholder="Your Last Name" label="Last Name"></TextInput>
                </Box>
                </MediaQuery>
                <Box sx={{display:'flex', justifyContent:'space-between', marginTop:40, flexDirection:'column'}}>
                    <TextInput sx={{width:'47vw'}} placeholder="Street Address" label="Address"></TextInput>
                    <TextInput sx={{width:'47vw', marginTop:20}} placeholder="Street Address Line 2"></TextInput>
                </Box>
                <Box sx={{display:'flex' , flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                    <TextInput sx={{width:'23vw'}} placeholder="City" ></TextInput>
                    <TextInput sx={{width:'23vw'}} placeholder="State/Province"></TextInput>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between', marginTop:20, flexDirection:'column'}}>
                    <TextInput sx={{width:'47vw'}} placeholder="Zip/Postal Code"></TextInput>
                </Box>
                <Box sx={{display:'flex', marginTop:40, flexDirection:'column'}}>
                    <Button onClick={nextStep}>Next</Button>
                </Box>
            </Stepper.Step>
            <Stepper.Step icon={<IconShieldCheck size={18}/>}>

            </Stepper.Step>
        </Stepper>
        </Card>
        </MediaQuery>
    </div>
  )
}

export default Checkout