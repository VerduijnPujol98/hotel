import React from 'react'
import { ContainedInputsCustomer } from '../componentsadmin/ContainedInputsCustomer';
import { ContainedInputsRoom } from '../componentsadmin/ContainedInputsRoom';
import { CustomersSectionAdmin } from '../componentsadmin/CustomersSectionAdmin';
import { Roomavailability } from '../componentsadmin/RoomavailabilityAdmin';

const Admin = () => {
  return (
    <div>
        <CustomersSectionAdmin />
        <ContainedInputsCustomer />
        <Roomavailability />
        <ContainedInputsRoom />
    </div>
  );
}

export default Admin