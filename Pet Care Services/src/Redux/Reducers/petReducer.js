import { petTypes } from "../Types/petTypes";

export const petReducer = ( state = {}, action ) => {
    switch (action.type) {
        case petTypes.add1:
            return action.payload;

        case petTypes.read1:
            return {Pet:action.payload}

        case petTypes.delete1:
            return state.filter( date => date.email !== action.payload )

        case petTypes.edit1:
           
            return  action.payload
            
        default:
            return state;
    }
}