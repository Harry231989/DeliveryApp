import { NextResponse } from 'next/server';
import db from '@/lib/db'; // Ensure Prisma DB is imported

export async function POST(request) {
  try {
    const {
      title,
      slug,
      imageUrl,
      communityId,
      description,
      isActive,
      content,
    } = await request.json();

    // 🔍 Check if all required fields are present
    if (
      !title ||
      !communityId ||
      !imageUrl ||
      !slug ||
      !description ||
      !content ||
      typeof isActive !== 'boolean'
    ) {
      return NextResponse.json(
        { message: 'Missing required fields. Please fill all fields.' },
        { status: 400 }
      );
    }

    const newCommunity = await db.community.create({
      data: {
        title,
        slug,
        imageUrl,
        communityId,
        description,
        isActive,
        content,
      },
    });

    console.log('✅ Community Created:', newCommunity);

    return NextResponse.json(
      { message: 'Community created successfully!', community: newCommunity },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Error creating community:', error);
    return NextResponse.json(
      { message: 'Failed to create community', error: error.message },
      { status: 500 }
    );
  }
}
