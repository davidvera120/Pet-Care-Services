
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, getDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { candidateTypes, userTypes2, serviceTypes } from '../Types/candidateTypes'
import { petTypes } from '../Types/petTypes'

// Leer datos usuario subcoleccion
export const listaUser = (uid) =>{
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
        dispatch(listaUser1(user))
    }
}
export const listaUser1 = (users2)=>{
        return{
            type: candidateTypes.read,
            payload: users2
        }
}





// Leer datos usuario subcoleccion
export const listaPet = (uid) =>{
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
        dispatch(listaPet1(pet1))
    }
}
export const listaPet1 = (pet2)=>{
        return{
            type: petTypes.read1,
            payload: pet2
        }
}



// Leer datos usuario subcoleccion
export const listaService = () =>{
    return async (dispatch)=>{
      
        const docRef=collection(db, "agenda1")
         const data =await getDocs(docRef)
        console.log(data.docs)
        const agenda2=data.docs
        const info=agenda2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const agenda1=info;
        console.log(agenda1)
        dispatch(listaService1(agenda1))
    }
}
export const listaService1 = (agenda2)=>{
        return{
            type: serviceTypes.read3,
            payload: agenda2
        }
}


// Leer datos usuario subcoleccion
export const listaUser3 = (uid) =>{
    return async (dispatch)=>{
        const docuRef=doc(db,"data",uid)
        const data=await getDoc(docuRef)
        console.log(data.data())
        const data2=data.data();
      
        dispatch(listaUser4(data2))
    }
}
export const listaUser4 = (data1)=>{
        return{
            type: userTypes2.read2,
            payload: data1
        }
}