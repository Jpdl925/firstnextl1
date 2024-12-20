import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";


// GET getting data
// POST Creating data
// PUT Updating data
// DELETE deleting data
// CRUD

export async function GET(request: NextRequest){

    const products = await prisma.product.findMany();


    // return NextResponse.json([
    //     {id:1, name:'Ketchup', price:20},
    //     {id:2, name:'Mustard', price:30},
    //     {id:3, name:'Mayonaise', price:40},
    // ])

    return NextResponse.json(products);
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400})

    const product = await prisma.product.create({
        data:{
            name:body.name,
            price:body.price
        }
    })

    return NextResponse.json(product,{status:201});
}
