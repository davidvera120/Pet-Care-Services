import { petTypes2 } from "../Types/candidateTypes";

export const readpetReducer = ( state = {}, action ) => {
    switch (action.type) {
       
        case petTypes2.add5:
            return action.payload;

        case petTypes2.read5:
            return {Pet2:action.payload}

        
            
        default:
            return state;
    }
}