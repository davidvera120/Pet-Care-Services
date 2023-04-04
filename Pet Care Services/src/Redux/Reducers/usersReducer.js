import { usersTypes } from "../Types/candidateTypes";

export const usersReducer = ( state = {}, action ) => {
    switch (action.type) {
        case usersTypes.add4:
            return action.payload;

        case usersTypes.read4:
            return {Users:action.payload}

        case usersTypes.delete4:
            return state.filter( date => date.email !== action.payload )

        case usersTypes.edit4:
           
            return  action.payload
            
        default:
            return state;
    }
}