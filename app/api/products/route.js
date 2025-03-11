import { NextResponse } from "next/server";

export async function POST( req){
   try {
    const productData = await req.json();
    
    console.log(productData);
     return NextResponse.json(productData)
   } catch (error) {
     console.log(error)
     return NextResponse.json({
        message: "Failed to create Product",
        error
     }, {status: 500})
   }
}