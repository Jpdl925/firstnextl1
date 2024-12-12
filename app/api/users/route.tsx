import { NextRequest, NextResponse } from "next/server";

// GET getting data
// POST Creating data
// PUT Updating data
// DELETE deleting data
// CRUD

export function GET(request :NextRequest) {
    // Fetch users from a data base
    // hard code our data
    return NextResponse.json([
        {id: 1, name: 'Jose'},
        {id: 2, name: 'Jacob'},

    ]);
}

export async function POST(request: NextRequest){
    const body = await request.json();
    // Validate the data
    // Check if invalid, return 400
    // If no name is inserted then returns with 400 error
    if(!body.name)
        return NextResponse.json({error:"Name is required"},{status:400})
    // Else, return the data that was created
    return NextResponse.json({id:1, name:body.name},{status:201});
}

