import { connectionSTR } from "@/util/connection";
import { User } from "@/util/model";
import mongoose, { trusted } from "mongoose";
import { NextResponse } from "next/server";


export  async function PUT(request, content){
    let {userid}=await content.params;
    const payload=await request.json()

    await mongoose.connect(connectionSTR)
    const result= await User.findOneAndUpdate({_id:userid},payload, {new:true})
    return NextResponse.json({result,success:true})
}

export async function GET(request,content) {
    let {userid}= await content.params;

    await mongoose.connect(connectionSTR);
    const result= await User.findById(userid)
    return NextResponse.json({result,success:true});
}


export async function DELETE(request,content) {
    let {userid}=await content.params;
    await mongoose.connect(connectionSTR);

    let response=await User.deleteOne({_id:userid});
    return NextResponse.json({result:response,success:true})
}

