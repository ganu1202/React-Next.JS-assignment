import { connectionSTR } from "@/util/connection"
import { User } from "@/util/model"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export  async function GET(){
    let data=[]
    try{
        await mongoose.connect(connectionSTR)
        data=await User.find()
        console.log(data)
    }catch(error){
        data={result:"error"}
    }
    return NextResponse.json({result:data},{success:true})
}

export async function POST(request) {
    await mongoose.connect(connectionSTR)
    let payload=await request.json()
    console.log(payload)
    // let user={
    //     name:"Ramesh",
    //     email:"Ramesh@gmail.com",
    //     age:29
    // }
    let user=await new User(payload);
    const result=await user.save();
    return NextResponse.json({result,success:true})
}







