"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function Page(){
    const router=useRouter()
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [age, setAge]=useState("")

    const addUser=async()=>{
        if(!name.trim()){
            alert("Name is required");
            return;
        }

        if(!email.trim() || !/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(email)){
            alert("Valid email is required");
            return;
        }

        const numericAge=Number(age)
        if(!numericAge || numericAge<1){
            alert("Age must be a number greater than 0");
            return;
        }

        let result=await fetch("http://localhost:3000/api/users",{
            method:"POST",
            body:JSON.stringify({name,email,age})
        });
        let response=await result.json()
        if(response.success){
            alert("New user added");
            setName("");
            setEmail("");
            setAge("");
            router.push("/users")
        }else{
            alert("Failed to add user");
        }
    }
    return(
        <div className="form-container">
            <h1>Add User</h1>
            <input type="text" value={name} placeholder="Enter Name" className="input" onChange={(e)=>setName(e.target.value)} required></input>
            <input type="text" value={email} placeholder="Enter Email" className="input" onChange={(e)=>setEmail(e.target.value)} required></input>
            <input type="number" value={age} placeholder="Enter Age" className="input" onChange={(e)=>setAge(e.target.value)} required min="1"></input>
            <button className="btn" onClick={addUser} disabled={!name || !email || !age}>Add user</button>
        </div>
    )
}