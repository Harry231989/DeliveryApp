import { NextResponse } from 'next/server';
import db from '@/lib/db'; // Ensure Prisma DB is imported

export async function POST(request) {
  try {
    const { title, imageUrl, slug, description, isActive } = await request.json();

    // 🔍 Check if all required fields are present
    if (
      !title ||
      !description ||
      !imageUrl ||
      !slug ||
      typeof isActive !== 'boolean'
    ) {
      return NextResponse.json(
        { message: 'Missing required fields. Please fill all fields.' },
        { status: 400 }
      );
    }

    const existingCategory = await db.category.findUnique({
      where: {
        slug,
      }
    })
    if(existingCategory){
      return NextResponse.json({
        data: null,
        message: "Category already exists"
      }, {status: 409})
    }
    const newCategory = await db.category.create({
      data: {
        title,
        description,
        imageUrl,
        slug,
        isActive,
      },
    });

    console.log('✅ Banner Created:', newCategory);

    return NextResponse.json(
      { message: 'Category created successfully!', category: newCategory },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Error creating Category:', error);
    return NextResponse.json(
      { message: 'Failed to create Category', error: error.message },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: 'desc', // ✅ Sort by newest first
      },
    });

    if (!categories || categories.length === 0) {
      return NextResponse.json(
        { message: 'No categories found', categories: [] },
        { status: 404 }
      );
    }

    console.log('✅ Fetched Categories:', categories);
    return NextResponse.json(
      { message: 'Categories retrieved successfully!', categories },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    return NextResponse.json(
      { message: 'Failed to fetch categories', error: error.message },
      { status: 500 }
    );
  }
} 