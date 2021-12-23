import {fullEquipmentList} from '../assets/DB'
const initialState = fullEquipmentList;


export const inventoryReducer = (state:ReduxTypes.stateInventory[]=initialState,action:ReduxTypes.actionInventory)=>{
    if(!action.payload) return state
    switch (action.type) {
        case "Inventory_Check":
            const editedState =action.payload.map(item=>{
                return {...item , missing:item.fullQuantity-item.current}
            })
            return editedState;
        case "ADD_Product":
           
            const {name, fullQuantity, current} = action.payload[0];
            return [...state,{name, fullQuantity, missing:fullQuantity-current}];

        case "Remove_Product":
            const item = action.payload[0];
            return state.filter(({name,added})=> !added && name === item.name)
    
        default:
            return state;
    }
}