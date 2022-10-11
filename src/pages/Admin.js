import React from 'react'
import { Roomavailability } from '../components/Roomavailability';
import { ContainedInputsRoom } from '../componentsadmin/ContainedInputsRoom';
import { RoomavailabilityAdmin } from '../componentsadmin/RoomavailabilityAdmin';

const Admin = () => {
  return (
    <div>
        <RoomavailabilityAdmin />
        <ContainedInputsRoom />
    </div>
  );
}

export default Admin