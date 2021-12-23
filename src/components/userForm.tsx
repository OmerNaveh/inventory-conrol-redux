import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

export default function UserForm() {
    const dispatch = useDispatch()
    const fullNameInput = useRef<HTMLInputElement>(null)
    const workPlaceInput = useRef<HTMLInputElement>(null)
    const dateInput = useRef<HTMLInputElement>(null)

    const userIn = ()=>{
        if(!fullNameInput.current || !workPlaceInput.current || !dateInput.current) return
        const fullName = fullNameInput.current.value;
        const workPlace = workPlaceInput.current.value;
        const date = dateInput.current.value;
        dispatch({type:"Current_Worker", payload:{fullName, workPlace, date}})
    }
    
    return (
        <div>
            <p>
                Enter Full Name:
                <input ref={fullNameInput}></input>
            </p>
            <p>
                Enter WorkPlace:
                <input ref={workPlaceInput}></input>
            </p>
            <p>
                Enter Current Date:
                <input ref={dateInput} type="date"></input>
            </p>
            <p>
                <button onClick={()=>{userIn()}}>Continue</button>
            </p>
        </div>
    )
}
