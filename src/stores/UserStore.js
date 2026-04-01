import { create } from "zustand";


const SaveUserData = create((set)=> ({
    userId: null,
    saveUserData: (userData) =>{
        try{
            localStorage.setItem("userId" , userData.userId)
            console.log("Successfully save data: ", userData.userId)
        } catch (error){
            console.log("failed save data: ",error)
        }
    },
    clearUserData: ()=>{
        localStorage.removeItem("userId")
        set({userId: null})
    }
}))

export default SaveUserData
