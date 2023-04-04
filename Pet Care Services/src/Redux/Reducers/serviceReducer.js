import { serviceTypes } from "../Types/candidateTypes";

export const serviceReducer = ( state = {}, action ) => {
    switch (action.type) {
        case serviceTypes.add3:
            return action.payload;

        case serviceTypes.read3:
            return {Service:action.payload}

        case serviceTypes.delete3:
            return state.filter( date => date.email !== action.payload )

        case serviceTypes.edit3:
           
            return  action.payload
            
        default:
            return state;
    }
}