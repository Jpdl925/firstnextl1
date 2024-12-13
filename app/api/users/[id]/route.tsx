import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";



// interface Props{
//     params: {id:number};
// }
                        // In-line interface for one single prop vvv
export async function GET(request: NextRequest,{params}:{params:{id:string}}) {

    // Fetch the data from the db
    const user = await prisma.user.findUnique({
        where:{id: parseInt(params.id)}
    })
    


    // If id goes past 10, then show Error, otherwise show jose
    if(!user)
        return NextResponse.json({error:"User not found"}, {status:404})
        return NextResponse.json(user);
}
        // Changed from number to string cause url is always string vvv
export async function PUT(request: NextRequest,{params}:{params:{id:string}}){
    // Validate the request of the body
    const body = await request.json()
    // if invalid, return 400
    // Using new validation variable from schema.ts (layout of user), safeParse determining if it fits the criteria 
    const validation = schema.safeParse(body);
    // If validation if not successful (doesn't match), will throw error from schema, Zod
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400});

    // Search for singular user through our db using prisma where id matches, and save into user variable
    const user = await prisma.user.findUnique({
        where:{
            // Have to parseint because params.id which is url is string, converting to number with parseInt
            id:parseInt(params.id)
        }
    });

    // if doesn't exist 404
    if(!user)
        return NextResponse.json({error:"User not found"},{status:404})
    // Fetch the user with the given id, update it using this variable with new name and email
    const updatedUser = await prisma.user.update({
        where:{id: user!.id},
        data: {
            name: body.name,
            email:body.email
        }
    })
    //Update the User if exist
    return NextResponse.json(updatedUser)
    // return the updated user

}

export async function DELETE(request: NextRequest,{params}:{params:{id:string}}) {
    // Fetched user from db
    // if not found, 404

    const user = await prisma.user.findUnique({
        where:{
            // Have to parseint because params.id which is url is string, converting to number with parseInt
            id:parseInt(params.id)
        }
    });

    if(!user)
        return NextResponse.json({error:"User not found"},{status:404})
    // Delete the user if found
    await prisma.user.delete({
        where:{id:user.id}
    })
    return NextResponse.json({},{status:200});
    // return 200 response
}