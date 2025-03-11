import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
   try {
    const { title, couponCode, expiryDate, isActive } = await request.json();

     if (!title || !couponCode || !expiryDate || !isActive) {
       return NextResponse.json(
         { message: 'Missing required fields' },
         { status: 400 }
       );
     }

    const newCoupon = await db.coupon.create({
      data: {
        title,
        couponCode,
        expiryDate: new Date(expiryDate),
        isActive,
      },
    });
   console.log('✅ Coupon created:', newCoupon);
     return NextResponse.json(
       { message: 'Coupon created successfully!', coupon: newCoupon },
       { status: 201 }
     );
   } catch (error) {
     console.log(error)
     return NextResponse.json({
        message: "Failed to create Coupon",
        error
     }, {status: 500})
   }
}


export async function GET() {
  try {
    const coupons = await db.coupon.findMany({
      orderBy: {
        createdAt: 'desc', // ✅ Sort by newest first
      },
    });

    if (!coupons || coupons.length === 0) {
      return NextResponse.json(
        { message: 'No coupons found', coupons: [] },
        { status: 404 }
      );
    }

    console.log('✅ Fetched Coupons:', coupons);
    return NextResponse.json(
      { message: 'Coupons retrieved successfully!', coupons },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error fetching coupons:', error);
    return NextResponse.json(
      { message: 'Failed to fetch coupons', error },
      { status: 500 }
    );
  }
}
