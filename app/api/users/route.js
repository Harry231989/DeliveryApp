import { NextResponse } from 'next/server';
import db from '@/lib/db'; // Ensure Prisma DB is imported
import bcrypt from 'bcrypt'

export async function POST(request) {
  try {
    // Get the details of the User
    const { name, email, password, role } = await request.json()



    // Check if the user Already exists in the db
    const existingUser = await db.user.findUnique({
      where:{
        email
      }
    })
    if(existingUser){
      return NextResponse.json({
         data:null,
         message:"User Already exists"
      }, {status:409})
    }
    // Encrypt the Password => bcrypt

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await db.user.create({
      data: {
        name,email,password: hashedPassword, role: role.toUpperCase()
      }
    })

    console.log(newUser)
    return NextResponse.json({
      data: newUser,
      message: "User Created Successfully"
    },
    { status: 201 }
  )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error,
        message: 'Server Error: Something went wrong',
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const users = await db.user.findMany({
      where: {
        role: { in: ['ADMIN', 'USER', 'CLIENT', 'MODERATOR'] }, // ✅ Only fetch valid roles
      },
      orderBy: {
        createdAt: 'desc', // ✅ Sort by newest first
      },
    });

    if (!users || users.length === 0) {
      return NextResponse.json(
        { message: 'No users found', users: [] },
        { status: 404 }
      );
    }

    console.log('✅ Fetched Users:', users);
    return NextResponse.json(
      { message: 'Users retrieved successfully!', users },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    return NextResponse.json(
      { message: 'Failed to fetch users', error: error.message },
      { status: 500 }
    );
  }
}

