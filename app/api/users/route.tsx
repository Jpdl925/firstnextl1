import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// GET getting data
// POST Creating data
// PUT Updating data
// DELETE deleting data
// CRUD

export async function GET(request :NextRequest) {
    // Fetch users from a data base
    const users = await prisma.user.findMany()

    // hard code our data
    // return NextResponse.json([
    //     {id: 1, name: 'Jose'},
    //     {id: 2, name: 'Jacob'},

    // ]);

    // Returning our new users array with our data fetched
    return NextResponse.json(users);
}

export async function POST(request: NextRequest){
    const body = await request.json();
    // Validate the data
    // Check if invalid, return 400
    // If no name is inserted then returns with 400 error
    const validation = schema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400})
    // New variable holding the single user that is going to be created, using prisma creation
        const user = await prisma.user.create({
            data:{
                name:body.name,
                email:body.email,
            }
        })
    // Else, return the data that was created
    return NextResponse.json(user,{status:201});
}

