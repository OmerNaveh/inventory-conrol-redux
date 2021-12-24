declare namespace ReduxTypes{
    interface stateInventory{
        name: string,
        fullQuantity: number,
        missing?:number,
        added?:boolean
    }
    interface stateUser{
        fullName?:string,
        workPlace?:string,
        date?:Date
    }
    interface actionInventory{
        type:string
        payload?:{name:string, missing?:number,current?:number, fullQuantity:number}[],
        name?:string
        current?:number
    }
    interface actionUser{
        type:string
        payload?:{fullName:string, workPlace:string, date:date}
    }
    interface fullEquipmentList{
        name: string,
        fullQuantity: number,
    }
    type RootState = ReturnType<typeof rootReducer>
}