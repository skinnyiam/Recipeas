import {createContext,useContext,useEffect} from 'react'
import {onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from '../config/firebase';
import { useState } from 'react';


const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function  AuthContextProvider({children}){
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
       useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(user)=>{ //this is the information about
        //everytime user will change
            if(user){
                setUser({
                   uid:user.uid,
                   email:user.email,
                   displayName:user.displayName,

                })
            }else{
                setUser(null);
            }
            setLoading(false);
       })

       return ()=> unsubscribe();
       },[]);

         const signup = (email,password) =>{
           return createUserWithEmailAndPassword(auth,email,password)
         }

         const login = (email,password) =>{
            return signInWithEmailAndPassword(auth,email,password)
          }

          const logout= async () =>{
              setUser(null)
              await signOut(auth)
          }


     return  (
     <AuthContext.Provider value={{user,signup,login,logout}}>
          {loading ? null : children}
     </AuthContext.Provider>
     )
}