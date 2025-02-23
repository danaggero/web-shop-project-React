import {create} from 'zustand';

const useAuthStore = create((set)=>({
    isLoggedIn : false,
    currentUser : null,
    login : (user)=>set({isLoggedIn:true, currentUser:user}),
    logout : ()=>set({isLoggedIn:false, currentUser:null}),
}));

export default useAuthStore;
