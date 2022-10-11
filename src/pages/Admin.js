import React from 'react'
import { ContainedInputsRoom } from '../componentsadmin/ContainedInputsRoom';
import { CustomersSectionAdmin } from '../componentsadmin/CustomersSectionAdmin';

const Admin = () => {
  return (
    <div>
        <CustomersSectionAdmin />
        <ContainedInputsRoom />
    </div>
  );
}

export default Admin