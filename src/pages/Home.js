import React from 'react'
import { CustomersSection } from '../components/CustomersSection'
import { DatePickerThing } from '../components/DatePickerThing'
import { HeaderResponsive } from '../components/HeaderResponsive'
import { HeroContentLeft } from '../components/HeroContentLeft'
import { HeroTitle } from '../components/HeroTitle'
import { Roomavailability } from '../components/Roomavailability'
import {
  Image,
  Overlay,
} from '@mantine/core';
const Home = () => {
  return (
    <div>
          
        <HeaderResponsive />
        <HeroContentLeft />
        <DatePickerThing />
        <HeroTitle />
        <CustomersSection />
        <Roomavailability />

    </div>
  )
}

export default Home