import React from 'react'
import { useRef } from 'react';
import { useDispatch , useSelector } from 'react-redux';


export default function Item(props:{name:string, quantity:number, missing:number, added:boolean}) {
    const currentInput = useRef<HTMLInputElement>(null)
    const {inventoryReducer} = useSelector((state:ReduxTypes.RootState)=>state)
    const dispatch = useDispatch();

    const changeMissing=()=>{
        if(!currentInput.current) return
        console.log(currentInput.current)
        dispatch({type:"Inventory_Check", payload:[...inventoryReducer],name:props.name, current:Number(currentInput.current?.value)})
    }
    const removeItem =()=>{
        dispatch({type:"Remove_Product", payload:[{name:props.name, added:props.added}]})
    }
        return (
        <div>
            {props.name}
            {props.quantity}
           <input type="number" ref={currentInput} onChange={()=>{changeMissing()}}/> 
           {props.missing || 0}
           {props.added? <button onClick={()=>{removeItem()}}>Remove Item</button> : null}
        </div>
    )
}
