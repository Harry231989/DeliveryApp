import { NextResponse } from 'next/server';
import db from '@/lib/db'; // Ensure Prisma DB is imported

export async function POST(request) {
  try {
    const { title, link, imageUrl, slug, isActive } = await request.json();

    // 🔍 Check if all required fields are present
    if (
      !title ||
      !link ||
      !imageUrl ||
      !slug ||
      typeof isActive !== 'boolean'
    ) {
      return NextResponse.json(
        { message: 'Missing required fields. Please fill all fields.' },
        { status: 400 }
      );
    }

    const newBanner = await db.banner.create({
      data: {
        title,
        link,
        imageUrl,
        slug,
        isActive,
      },
    });

    console.log('✅ Banner Created:', newBanner);

    return NextResponse.json(
      { message: 'Banner created successfully!', banner: newBanner },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Error creating banner:', error);
    return NextResponse.json(
      { message: 'Failed to create banner', error: error.message },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const banners = await db.banner.findMany({
      orderBy: {
        createdAt: 'desc', // ✅ Sort by newest first
      },
    });

    if (!banners || banners.length === 0) {
      return NextResponse.json(
        { message: 'No coupons found', banners: [] },
        { status: 404 }
      );
    }

    console.log('✅ Fetched Banners:', banners);
    return NextResponse.json(
      { message: 'Banners retrieved successfully!', banners },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error fetching banners:', error);
    return NextResponse.json(
      { message: 'Failed to fetch banners', error },
      { status: 500 }
    );
  }
}

