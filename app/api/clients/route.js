import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req) {
  try {
    const clientData = await req.json();

    // 🔍 Extracting fields to avoid undefined errors
    const {
      code,
      name,
      phone,
      email,
      physicalAddress,
      contactPerson,
      contactPersonPhone,
      profileImageUrl,
      terms,
      notes,
      isActive = true, // ✅ Default to true if not provided
      companyTask = '', // ✅ Default to empty string if undefined
      products = [], // ✅ Default to empty array if undefined
      userId,
    } = clientData;

    // 🔍 Validate required fields
    if (!name || !phone || !email || !physicalAddress || !contactPerson) {
      return NextResponse.json(
        { message: 'Missing required fields. Please fill all fields.' },
        { status: 400 }
      );
    }

    // ✅ Create new client in MongoDB
    const newClient = await db.client.create({
      data: {
        code,
        name,
        phone,
        email,
        physicalAddress,
        contactPerson,
        contactPersonPhone,
        profileImageUrl,
        terms,
        notes,
        isActive,
        companyTask,
        products,
        userId,
      },
    });

    console.log('✅ Client Created:', newClient);
    return NextResponse.json(
      { message: 'Client created successfully!', client: newClient },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Error creating client:', error);
    return NextResponse.json(
      { message: 'Failed to create client', error: error.message },
      { status: 500 }
    );
  }
}
 
export async function GET() {
  try {
    const clients = await db.client.findMany({
      orderBy: {
        createdAt: 'desc', // ✅ Sort by newest first
      },
    });

    if (!clients || clients.length === 0) {
      return NextResponse.json(
        { message: 'No clients found', clients: [] },
        { status: 404 }
      );
    }

    console.log('✅ Fetched Clients:', clients);
    return NextResponse.json(
      { message: 'Clients retrieved successfully!', clients },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error fetching clients:', error);
    return NextResponse.json(
      { message: 'Failed to fetch clients', error },
      { status: 500 }
    );
  }
}
