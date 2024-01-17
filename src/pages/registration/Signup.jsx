import React, { useContext, useState } from 'react';
import './sign.css';
import myContext from '../../context/data/myContext';
import {createUserWithEmailAndPassword,getAuth} from 'firebase/auth'
import {toast} from 'react-toastify';
import { addDoc, collection ,Timestamp} from 'firebase/firestore';
import { fireDB } from '../../components/firebase/firebase';
import Loader from '../loader/Loader';

const Signup = () => {
  let auth = getAuth();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const context = useContext(myContext);
  const {loading,setLoading} = context;

  const signUp = async ()=>{
    setLoading(true);
    if(name === "" || email ==="" || password === ""){
      return toast.error("All Field are required")
    }
    try{
     const users = await createUserWithEmailAndPassword(auth,email,password);
     console.log(users)
     const user = {
      name:name,
      uid:users.user.uid,
      email:users.user.email,
      time:Timestamp.now()
     }
     const userRef = collection(fireDB,"users")
     await addDoc(userRef,user)
     toast.success("signup succesfully ")
     setName("");
     setEmail("");
     setPassword("");
     setLoading(false);

    }catch(error){
       console.log(error)
       toast.error('signup failed')
       setLoading(false)
    }
  }


  return (
    <>
      <div className="box4">
        <div className="section1"><span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
         <div class="signin">
          {/* {loading && <Loader/>} */}
           <div class="content">
              <h2>Sign Up</h2>
               <div class="form">
               {loading && <Loader/>}
                 <div class="inputBox">
                 <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name='name' required /> <i>Username</i>
                  </div>
                  <div class="inputBox">
                 <input type="Email" value={email} onChange={(e)=>setEmail(e.target.value)} name='email' required /> <i>Email</i>
                  </div>
                  <div class="inputBox">
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name='password' required /> <i>Password</i>
                  </div>
                  <div class="inputBox">
                  <input type="submit" value="SignUp" onClick={signUp} />
                </div>
             </div>
          </div>
       </div>
    </div>
   </div>
    </>
  )
}

export default Signup