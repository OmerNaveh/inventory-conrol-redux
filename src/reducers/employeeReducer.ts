
export const employeeReducer = (state:ReduxTypes.stateUser={},action:ReduxTypes.actionUser)=>{
    if(!action.payload) return state;
    switch (action.type) {
        case "Current_Worker":
            const {fullName, workPlace , date}= action.payload
            return {fullName, workPlace , date};
    
        default:
            return state;
    }
}