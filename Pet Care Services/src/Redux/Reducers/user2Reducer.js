import { userTypes2 } from "../Types/candidateTypes";

export const user2Reducer = ( state = {}, action ) => {
    switch (action.type) {
        case userTypes2.add2:
            return action.payload;

        case userTypes2.read2:
            return action.payload;

        case userTypes2.delete2:
            return state.filter( date => date.email !== action.payload )

        case userTypes2.edit2:
           
            return  action.payload
            
        default:
            return state;
    }
}