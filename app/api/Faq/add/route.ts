// app/api/faq/add/route.ts
import { NextResponse } from 'next/server';
import connection from '@/db/config';
import Faq from '@/models/FaqModels'; // Ensure this is the correct path

// Connect to the database before any operations

export async function POST(request: Request) {
    await connection();
  try {
    const faqs = await request.json(); // Expecting an array of FAQs

    if (!Array.isArray(faqs) || faqs.length === 0) {
      return NextResponse.json({ error: 'FAQs array is required' }, { status: 400 });
    }

    const addedFaqs = await Faq.insertMany(faqs); // Insert all FAQs at once

    return NextResponse.json({ message: 'FAQs added successfully', faqs: addedFaqs }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
