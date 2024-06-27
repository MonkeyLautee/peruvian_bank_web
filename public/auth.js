import {initializeApp} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js"
import {getAuth,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,reauthenticateWithPopup} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
const firebaseConfig={apiKey:"AIzaSyA8az79YztNdpDVnypxSvVXlsSj80xk0p8",authDomain:"yosyrick-business.firebaseapp.com",projectId:"yosyrick-business",storageBucket:"yosyrick-business.appspot.com",messagingSenderId:"487688553467",appId:"1:487688553467:web:364b994b91d7cabac4c15e"}
const app=initializeApp(firebaseConfig)
const authentication=getAuth(app)
const getUser=()=>authentication.currentUser
const logOut=async()=>{if(authentication.currentUser==null){return}await signOut(authentication)}
const onAuthChanged=(cb)=>onAuthStateChanged(authentication,cb)
const deleteTheUser=async(uCred)=>await uCred.user.delete()
const signInWithGoogle=async()=>{const provider=new GoogleAuthProvider();const result=await signInWithPopup(authentication,provider);return result}
const getAuthProvider=()=>{for(let provider of authentication.currentUser.providerData){if(provider.providerId==='google.com'){return 'google'}if(provider.providerId==='password'){return 'email'}}}
const reauthenticateWithGoogle=async()=>{let provider=new GoogleAuthProvider();return await reauthenticateWithPopup(getUser(),provider)}
const auth={getUser,logOut,deleteTheUser,onAuthChanged,signInWithGoogle,getAuthProvider,reauthenticateWithGoogle}
export {auth}