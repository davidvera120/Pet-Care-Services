
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { candidateTypes, userTypes2, serviceTypes } from '../Types/candidateTypes'
import {petTypes} from '../Types/petTypes'
import { useSelector } from 'react-redux'



//Metodo set (el id lo especifico yo)
export const addCandidate = ( user,  uid ) => {
    return async (dispatch) => {
        const docRef=doc(db, "data", uid)
        const colRef=collection(docRef, "user")
        await addDoc(colRef, user);
       
            dispatch( addDateSync( user ) )
            
       
    }
}

const addDateSync = ( user ) => {
    return{
    type: candidateTypes.add,
    payload: user
}}



export const registerUser = (user, uid) => {
    return( dispatch) => { 
        
        setDoc(doc(db, "data", uid), user)
        .then(resp => {
            dispatch(registerUser1(user))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const registerUser1 = (user) => {
     return{
         type: userTypes2.add2,
         payload: user
     }
 
 }

//  export const registerService = ( service ) => {
//     return (dispatch) => {
//         addDoc(collection(db, "agenda1"), service)
//         .then( (resp) => {
//             dispatch( registerService1( service ) )
//         })
//     }
// }

export const registerService1 = ( service ) => {
    return async (dispatch) => {
        await addDoc(collection(db, "agenda1"), service)
        
            dispatch( registerService2( service ) )
        }
    }


const registerService2  = ( service ) => ({
    type: serviceTypes.add3,
    payload: service
})





//Metodo set (el id lo especifico yo)
export const addPet = ( pet,  uid ) => {
    return async (dispatch) => {
        const docRef=doc(db, "data", uid)
        const colRef=collection(docRef, "pet")
        await addDoc(colRef, pet);
       
            dispatch( addPetSync( pet ) )
            
       
    }
}

const addPetSync = ( pet ) => {
    return{
    type: petTypes.add1,
    payload: pet
}}

//Metodo set (el id lo especifico yo)
export const addAgenda = ( agenda,  uid ) => {
    return async (dispatch) => {
        const docRef=doc(db, "data", uid)
        const colRef=collection(docRef, "agenda")
        await addDoc(colRef, agenda);
       
            dispatch( addServiceSync( agenda ) )
            
       
    }
}

const addServiceSync = ( agenda ) => {
    return{
    type: petTypes.add1,
    payload: agenda
}}









// Leer datos db general ejercicios
export const listaWorkouts = () =>{
    return async (dispatch)=>{
        const ejerciciosCollection = collection(db, "ejercicios")
        const data =await getDocs(ejerciciosCollection)
        console.log(data.docs)
        const ejercicios2=data.docs
    
        const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const ejercicios=info;
        console.log(ejercicios)
        dispatch(listaWorksSync(ejercicios))
    }
}
export const listaWorksSync = (Work)=>{
        return{
            type: candidateTypes.read,
            payload: Work
        }
}

// Leer datos usuario subcoleccion
export const listaUser = (uid) =>{
    return async (dispatch)=>{
      
        const docRef=doc(db, "data", uid)
        const colRef=collection(docRef, "candidates")
         const data =await getDocs(colRef)
        console.log(data.docs)
        const candidatos2=data.docs
        const info=candidatos2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const candidatos=info;
        console.log(candidatos)
        dispatch(listaUser1(candidatos))
    }
}
export const listaUser1 = (users2)=>{
        return{
            type: candidateTypes.read,
            payload: users2
        }
}


// // Leer datos usuario 
// export const DatosUser = () =>{
//     return async (dispatch)=>{
//         const { uid } = useSelector( state => state.login )
//         const colRef=collection(db, "users")
//          const data =await getDocs(colRef)
//         console.log(data.docs)
//         const ejercicios2=data.docs
//         const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
//         console.log(info)
//          const ejercicios=info;
//         console.log(ejercicios)
//         const filtrado = ejercicios.filter(elemento => elemento.id === uid);
//         dispatch(dataUser(filtrado))
//     }
// }
// export const dataUser = (Work2)=>{
//         return{
//             type: workTypes.read2,
//             payload: Work2
//         }
// }



