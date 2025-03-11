import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const {
     name,
     password,
     email,
     phone,
     physicalAddress,
     nin,
     dob,
     notes,
     code,
     isActive

    } = await req.json();
    const newStaff = {
      name,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      dob,
      notes,
      code,
      isActive,
    };
    console.log(newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Failed to create a new Staffs',
        error,
      },
      { status: 500 }
    );
  }
}
