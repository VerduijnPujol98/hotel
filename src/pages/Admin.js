import React from 'react'
import { ContainedInputsCustomer } from '../componentsadmin/ContainedInputsCustomer';
import { CustomersSectionAdmin } from '../componentsadmin/CustomersSectionAdmin';
import { Roomavailability } from '../componentsadmin/RoomavailabilityAdmin';

const Admin = () => {
  return (
    <div>
        <CustomersSectionAdmin />
        <ContainedInputsCustomer />
        <Roomavailability />
    </div>
  );
}

export default Admin