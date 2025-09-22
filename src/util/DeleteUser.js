'use client'
import { useRouter } from "next/navigation";
export default function DeleteUser({id}){
    const router=useRouter()
    const deleteUser=async()=>{
        let response=await fetch("http://localhost:3000/api/users/"+id,{
            method:"delete"
        });

        response=await response.json();
        if(response.success){
            alert("user deleted")
            router.push("/users")
        }
    }
    return(
        <div>
            <button onClick={deleteUser}>Delete User</button>
        </div>
    )
}   