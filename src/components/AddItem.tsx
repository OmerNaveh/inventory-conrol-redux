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
        <div className='addItem'>
            <h3>Add Item:</h3>
            <div className='Inputs'>
                <div className='addFlex'>
                    <p>Item Name:</p>
                    <input className='input' ref={nameInput}></input>
                </div>
                <div className='addFlex'>
                    <p>Item Full Quantity:</p>
                    <input className='input' type="number" ref={fullInput}></input>
                </div>
                <div className='addFlex'>
                    <p>Item Current Quantity:</p>
                    <input className='input' type="number" ref={currentInput}></input>
                </div>
            </div>
            <button  onClick={()=>{addItem()}}>Submit</button>
        </div>
    )
}
