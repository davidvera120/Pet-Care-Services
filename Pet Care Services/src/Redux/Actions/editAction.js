
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { candidateTypes, userTypes2 } from '../Types/candidateTypes'
import {petTypes } from '../Types/petTypes'




export const editCandidates = (edituser, id1, id2) => {
    return( dispatch) => {
        
         const editUser=edituser;  
         const docRef=doc(db, "data", id1)
        const colRef=collection(docRef, "user")     
        const workDoc = doc(colRef, id2)
        setDoc(workDoc, editUser)
        .then(resp => {
            dispatch(editCandidate(editUser))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const editCandidate = (editUser) => {
     return{
         type: candidateTypes.edit,
         payload: editUser
     }
 
 }

 export const editPet = (editpet, id1, id2) => {
    return( dispatch) => {
        
        //    const editPet=editpet
         const docRef=doc(db, "data", id1)
        const colRef=collection(docRef, "pet")     
        const workDoc = doc(colRef, id2)
        setDoc(workDoc, editpet)
        .then(resp => {
            dispatch(editpet1(editpet))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const editpet1 = (editPet) => {
     return{
         type: petTypes.edit1,
         payload: editPet
     }
 
 }

 

 export const editUser = (edituser, id1) => {
    return( dispatch) => {
        
         const editUser=edituser;  
         const docRef=doc(db, "data", id1)    
        setDoc(docRef, editUser)
        .then(resp => {
            dispatch(editUser1(editUser))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const editUser1 = (editUser) => {
     return{
         type: userTypes2.edit2,
         payload: editUser
     }
 
 }


//  //Metodo set (el id lo especifico yo)
// export const editCandidate = ( user,  uid ) => {
//     return async (dispatch) => {
//         const docRef=doc(db, "data", id)
//         const colRef=collection(docRef, "candidatos")     
//         const workDoc = doc(colRef, id2)
//         const docRef=doc(db, "data", uid)
//         const colRef=collection(docRef, "candidatos")
//         await addDoc(colRef, user);
       
//             dispatch( addDateSync( user ) )
            
       
//     }
// }

// const addDateSync = ( user ) => {
//     return{
//     type: candidateTypes.add,
//     payload: user
// }}