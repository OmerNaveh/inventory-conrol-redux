import {  useSelector } from 'react-redux'
import AddItem from './AddItem'
import Item from './Item'

export default function InventoryForm() {
    const {inventoryReducer} = useSelector((state:ReduxTypes.RootState)=>state)

    const renderItems = ()=>{
        return inventoryReducer.map((item:ReduxTypes.stateInventory)=>{
            return (<Item key={item.name} name={item.name} quantity={item.fullQuantity} missing={item.missing || 0} added={item.added || false} />)
       })
    }
    
    return (
        <div>
           {renderItems()}
           <AddItem />
        </div>
    )
}
