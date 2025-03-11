import db from '@/lib/db';
import { NextResponse } from 'next/server';


export async function GET(request,{ params: { id } }) {
  try {
    const user = await db.user.findUnique({
      where: {
        id
       
      },
    });

    if (!user || user.length === 0) {
      return NextResponse.json(
        { message: 'No client found', user: [] },
        { status: 404 }
      );
    }

    console.log('✅ Fetched User:', user);
    return NextResponse.json(
      { message: 'User retrieved successfully!', user },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error fetching user:', error);
    return NextResponse.json(
      { message: 'Failed to fetch user', error: error.message },
      { status: 500 }
    );
  }
}
