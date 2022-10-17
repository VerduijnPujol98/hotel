import { Box, Button, Card, Select, Stepper, Text, TextInput } from '@mantine/core';
import { IconBed, IconShieldCheck, IconUserCheck } from '@tabler/icons';
import { addDoc, collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseconfig';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';

const Checkout = () => {

    const [active, setActive] = useState(0)
    const [ bookeddate, setbookeddate] = useState('2022-10-19T00:00')
    const [ pushdoc, setPushDoc ] = useState("")
    const [ pushcheckin, setPushcheckin ] = useState([])
    const [ pushcheckout, setPushcheckout ] = useState([])


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

    const unsubscribe = async (data) => {
        const q = query(collection(db, "rooms"), where("name", "==", data))
        const querySnapshot = await getDocs(q)
        let tempdata = []
        let tempdata2 = []
        querySnapshot.forEach((doc) => {
            
        })
    }

    const addtestdoc = async () => {
        const snapRef2 = collection(db, "/rooms/Studio 1 /users")
        onSnapshot(snapRef2, (snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.data());
            })
        })
    }



    function getDatesInRange(startDate, endDate) {
        return  setbookeddate(eachDayOfInterval({
            start: new Date(startDate),
            end: new Date(endDate)
        }))
    }
    


    useEffect(() => {
        console.log(bookeddate)
        getDocument()
    }, [])



    
  return (
    <div style={{display: 'flex', justifyContent: 'center',}}>
        <Card shadow="sm" p="lg" radius="md" withBorder sx={{width: '50vw', marginTop: 50}}>
        <Stepper active={active} onStepClick={setActive}>
            <Stepper.Step icon={<IconUserCheck size={18}/>}>
                <Box sx={{display:'flex', marginTop: 20}}>
                    <Text color="dimmed" size='sm'>Your registration will be verified prior to your arrival.</Text>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between', marginTop:20, flexDirection:'column'}}>
                    <Select sx={{width:'47vw'}} 
                                placeholder="Select a Room" 
                                label="Select Room"
                                onChange={(data) => {unsubscribe(data);}}
                                data={Object.values(pushdoc).map((data) =>{
                                    return data
                                })
                            }
                                ></Select>
                </Box>
                <Box sx={{display:'flex' , flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                <TextInput sx={{width:'23vw'}} placeholder={pushcheckin} label="First Name"></TextInput>
                    <TextInput sx={{width:'23vw'}} placeholder="Your Last Name" label="Last Name"></TextInput>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between', marginTop:20, flexDirection:'column'}}>
                    <Button onClick={() => {addtestdoc()}}>Add DB</Button>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between', marginTop:20, flexDirection:'column'}}>
                    <Button onClick={() => {console.log(bookeddate)}}>Test</Button>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between', marginTop:20, flexDirection:'column'}}>
                    <Button onClick={nextStep}>Next</Button>
                </Box>
            </Stepper.Step>
            <Stepper.Step icon={<IconBed size={18}/>}>
                <Box sx={{display:'flex', marginTop: 20}}>
                    <Text color="dimmed" size='sm'>Your registration will be verified prior to your arrival.</Text>
                </Box>
                <Box sx={{display:'flex' , flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                    <TextInput sx={{width:'23vw'}} placeholder="Your First Name" label="First Name"></TextInput>
                    <TextInput sx={{width:'23vw'}} placeholder="Your Last Name" label="Last Name"></TextInput>
                </Box>
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
            </Stepper.Step>
            <Stepper.Step icon={<IconShieldCheck size={18}/>}>

            </Stepper.Step>
        </Stepper>
        </Card>
    </div>
  )
}

export default Checkout