import Link from "next/link"
import DeleteUser from "@/util/DeleteUser"


async function getUsers() {
    let response=await fetch("http://localhost:3000/api/users",{cache:"no-cache"})
    response=await response.json()

    if(response){
        return response.result
    }else{
        return {success:false}
    }
}

export default async function Page(){
    let users=await getUsers()
    // console.log(result[0])
    return(
        <div className="table-container">
            <h1>Users List</h1>
            {users.length===0 ? (
                <h4>No users found, click here to <Link href="/addUser">add user</Link></h4>
            ):
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>   
                    </tr>
                </thead>
                <tbody>
                    {
                       users.map((user)=>(
                        <tr key={user._id}>
                            <td>
                                <Link href={"users/"+user._id}>{user.name}</Link>
                             </td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td><DeleteUser id={user._id}/></td>
                        </tr>
                       ))
                    }
                </tbody>
            </table>}
            <br/>
            <Link href="/">Go to Home</Link>
        </div>
    )
}