import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, getDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { candidateTypes, userTypes2 } from '../Types/candidateTypes'
import { petTypes } from '../Types/petTypes'


// Leer datos usuario subcoleccion
export const listaUser2 = (uid) =>{
    return async (dispatch)=>{
        const docuRef=doc(db,"data",uid)
        const data=await getDoc(docuRef)
        console.log(data.data())
        const data2=data.data();
      
        dispatch(listaUser5(data2))
    }
}
export const listaUser5 = (data1)=>{
        return{
            type: userTypes2.read2,
            payload: data1
        }
}