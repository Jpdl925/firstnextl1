import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(request: NextRequest,{params}:{params:{id:number}}) {
    if(params.id > 3)
        return NextResponse.json({error:"Product not found, you have passed the Pickle"}, {status:404})
        return NextResponse.json({id:params.id, name:"Pickles", price:200},{status:200})
    
}

export async function PUT(request: NextRequest,{params}:{params:{id:number}}) { 
    const body = await request.json()
    const validation = schema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400})
    if(params.id>3)
        return NextResponse.json({error:"Product not found, you have passed the Pickle"}, {status:404})

    return NextResponse.json({id:1, name:body.name, price:body.price})

}

export function DELETE(request: NextRequest,{params}:{params:{id:number}}) {
    if(params.id > 3)
        return NextResponse.json({error:"Product not found, you have passed the Pickle"}, {status:404})
    
    return NextResponse.json({},{status:200})
}