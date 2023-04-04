
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, getDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { petTypes2 } from '../Types/candidateTypes'

export const listaPet2 = (uid) =>{
    return async (dispatch)=>{
      
        const docRef=doc(db, "data", uid)
        const colRef=collection(docRef, "pet")
         const data =await getDocs(colRef)
        console.log(data.docs)
        const pet2=data.docs
        const info=pet2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const pet1=info;
        console.log(pet1)
        dispatch(listaPet3(pet1))
    }
}
export const listaPet3 = (pet2)=>{
        return{
            type: petTypes2.read5,
            payload: pet2
        }
}