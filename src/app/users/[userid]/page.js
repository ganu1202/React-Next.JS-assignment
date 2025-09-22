"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Page(){
    let router=useRouter()
    const [name, setName]= useState("")
    const [email, setEmail]=useState("")
    const [age, setAge]= useState("")

    let {userid}=useParams()


    const getUserDetails=async()=>{
        let response=await fetch("http://localhost:3000/api/users/"+userid)
        let data=await response.json()
        if(data.result){
            let user=data.result;
            setName(user.name)
            setEmail(user.email)
            setAge(user.age)
        }
    }

    useEffect(()=>{
        getUserDetails();
    },[])

    const updateUserDetails=async()=>{
        let response= await fetch("http://localhost:3000/api/users/"+userid,{
            method:"PUT",
            body:JSON.stringify({name,email,age})
        })
        let data=await response.json()
        if(data.result){
            alert("User Details has been updated"),
            router.push("/users")
        }
    }

    return(
        <div className="form-container">
            <h1>Update user details</h1>
            <input type="text"  value={name} placeholder="Enter Name" className="input" onChange={(e)=>setName(e.target.value)}></input>
            <input type="text"  value={email} placeholder="Enter Email" className="input" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="number"  value={age} placeholder="Enter Age" className="input" onChange={(e)=>setAge(e.target.value)}></input>
            <button onClick={updateUserDetails} disabled={!name || !email || !age}>Update Details</button>
        </div>
    )
}