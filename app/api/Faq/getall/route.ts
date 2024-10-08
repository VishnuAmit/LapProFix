// app/api/faq/getAll/route.ts
import { NextResponse } from 'next/server';
import connection from '@/db/config';
import Faq  from '@/models/FaqModels';

// Connect to the database
export async function GET() {
  await connection();
  try {
    const faqs = await Faq.find({}); 
    return NextResponse.json({ faqs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
