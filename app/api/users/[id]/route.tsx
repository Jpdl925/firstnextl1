import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";


// interface Props{
//     params: {id:number};
// }
                        // In-line interface for one single prop vvv
export function GET(request: NextRequest,{params}:{params:{id:number}}) {


    // If id goes past 10, then show Error, otherwise show jose
    if(params.id>10)
        return NextResponse.json({error:"User not found"}, {status:404})
        return NextResponse.json({id:1, name:'jose'})
}

export async function PUT(request: NextRequest,{params}:{params:{id:number}}){
    // Validate the request of the body
    const body = await request.json()
    // if invalid, return 400
    // Using new validation variable from schema.ts (layout of user), safeParse determining if it fits the criteria 
    const validation = schema.safeParse(body);
    // If validation if not successful (doesn't match), will throw error from schema, Zod
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400});
    // if doesn't exist 404
    if(params.id > 10)
        return NextResponse.json({error:"User not found"},{status:404})
    // Fetch the user with the given id
    //Update the User if exist
    return NextResponse.json({id:1, name:body.name})
    // return the updated user

}

export function DELETE(request: NextRequest,{params}:{params:{id:number}}) {
    // Fetched user from db
    // if not found, 404
    if(params.id > 10)
        return NextResponse.json({error:"User not found"},{status:404})
    // Delete the user if found
    return NextResponse.json({},{status:200});
    // return 200 response
}