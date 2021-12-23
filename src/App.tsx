import React from 'react';
import { useSelector } from 'react-redux'
import InventoryForm from './components/inventoryForm';
import UserForm from './components/userForm';


function App() {
  const {employeeReducer} = useSelector((state:ReduxTypes.RootState)=>state)

  if(!employeeReducer.fullName){
  return (
    <div>
     <UserForm/>
    </div>
  )
  }
  return(
    <div>
      <InventoryForm/>
    </div>
  )
}

export default App;
