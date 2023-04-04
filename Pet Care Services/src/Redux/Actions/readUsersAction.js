
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, getDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { candidateTypes, usersTypes, serviceTypes } from '../Types/candidateTypes'
import { petTypes } from '../Types/petTypes'

export const listaUsers = () =>{
    return async (dispatch)=>{
      
        
        const colRef=collection(db, "data")
         const data =await getDocs(colRef)
        console.log(data.docs)
        const users2=data.docs
        const info=users2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const users=info;
        console.log(users)
        dispatch(listaUsers1(users))
    }
}


export const listaUsers1 = (users2)=>{
    return{
        type: usersTypes.read4,
        payload: users2
    }
}