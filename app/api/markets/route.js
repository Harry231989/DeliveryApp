import { NextResponse } from 'next/server';
import db from '@/lib/db'; // Ensure Prisma DB is imported

export async function POST(request) {
  try {
    const { title, logoUrl, description ,slug, isActive } = await request.json();

    // 🔍 Check if all required fields are present
    if (
      !title ||
      !logoUrl ||
      !slug ||
      !description ||
      typeof isActive !== 'boolean'
    ) {
      return NextResponse.json(
        { message: 'Missing required fields. Please fill all fields.' },
        { status: 400 }
      );
    }

    const newMarket = await db.market.create({
      data: {
        title,
        logoUrl,
        slug,
        description,
        isActive,
      },
    });

    console.log('✅ Market Created:', newMarket);

    return NextResponse.json(
      { message: 'Banner created successfully!', market: newMarket },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Error creating market:', error);
    return NextResponse.json(
      { message: 'Failed to create market', error: error.message },
      { status: 500 }
    );
  }
}
