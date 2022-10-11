
import { MantineProvider } from "@mantine/core";
import { CustomersSection } from "./components/CustomersSection";
import { DatePickerThing } from "./components/DatePickerThing";
import { HeaderSimple } from "./components/HeaderSimple";
import { HeroContentLeft } from "./components/HeroContentLeft";
import { HeroTitle } from "./components/HeroTitle";


function App() {
  return (
    <div className="App">
      <MantineProvider 
      theme={{
      colors: {
      brand: ['#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45','#3E7D45' ], },
      primaryColor: 'brand',
      }}>
        <HeaderSimple />
        <HeroContentLeft />
        <DatePickerThing />
        <HeroTitle />
        <CustomersSection />
      </MantineProvider>
    </div>
  );
}

export default App;
