import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { userReducer } from "../Reducers/userReducer.js";
import thunk from "redux-thunk";
import { candidateReducer } from "../Reducers/workReducer";
import { petReducer } from "../Reducers/petReducer";
import { user2Reducer } from "../Reducers/user2Reducer.js";
import { serviceReducer } from "../Reducers/serviceReducer.js";
import { usersReducer } from "../Reducers/usersReducer.js";
import { readpetReducer } from "../Reducers/readpetReducer.js";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: userReducer,
    add: candidateReducer,
    read:candidateReducer,
    edit:candidateReducer,
    add1:petReducer,
    read1:petReducer,
    edit1:petReducer,
    add2:user2Reducer,
    read2:user2Reducer,
    edit2:user2Reducer,
    add3:serviceReducer,
    read3:serviceReducer,
    edit3:serviceReducer,
    add4:usersReducer,
    read4:usersReducer,
    edit4:usersReducer,
     read5:readpetReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)