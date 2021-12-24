import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

export default function AddItem() {
    const dispatch = useDispatch()
    const nameInput = useRef<HTMLInputElement>(null)
    const fullInput = useRef<HTMLInputElement>(null)
    const currentInput = useRef<HTMLInputElement>(null)

    const addItem = ()=>{
        const name = nameInput.current?.value;
        const fullQuantity = fullInput.current?.value;
        const current = currentInput.current?.value;
        if(!name || !fullQuantity || !current ||!nameInput.current ||!fullInput.current || !currentInput.current ) return 
        dispatch({type:"ADD_Product", payload:[{name,fullQuantity, current}]})
        nameInput.current.value= ''
        fullInput.current.value= ''
        currentInput.current.value= ''
    }
    return (
        <div>
            <p>Add Item:</p>
            <p>Item Name:<input ref={nameInput}></input></p>
            <p>Item Full Quantity:<input type="number" ref={fullInput}></input></p>
            <p>Item Current Quantity:<input type="number" ref={currentInput}></input></p>
            <button onClick={()=>{addItem()}}>Submit</button>
        </div>
    )
}
