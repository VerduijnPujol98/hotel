import React from 'react'
import { CustomersSection } from '../components/CustomersSection'
import { DatePickerThing } from '../components/DatePickerThing'
import { HeaderSimple } from '../components/HeaderSimple'
import { HeroContentLeft } from '../components/HeroContentLeft'
import { HeroTitle } from '../components/HeroTitle'
import { Roomavailability } from '../components/Roomavailability'

const Home = () => {
  return (
    <div>
        <HeaderSimple />
        <HeroContentLeft />
        <DatePickerThing />
        <HeroTitle />
        <CustomersSection />
        <Roomavailability />
    </div>
  )
}

export default Home