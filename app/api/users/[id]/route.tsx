import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

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