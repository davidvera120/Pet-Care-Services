
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, getDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { candidateTypes, userTypes2, serviceTypes } from '../Types/candidateTypes'
import { petTypes } from '../Types/petTypes'

// Leer datos usuario subcoleccion
export const listaUserEdit = (uid) =>{
    return async (dispatch)=>{
      
        const docRef=doc(db, "data", uid)
        const colRef=collection(docRef, "user")
         const data =await getDocs(colRef)
        console.log(data.docs)
        const user2=data.docs
        const info=user2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const user=info;
        console.log(user)
        dispatch(listaUserEdit1(user))
    }
}
export const listaUserEdit1 = (users2)=>{
        return{
            type: candidateTypes.read,
            payload: users2
        }
}