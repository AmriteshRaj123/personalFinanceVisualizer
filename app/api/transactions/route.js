import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const transactions = await db.collection('transactions').find({}).toArray();
    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const data = await request.json();
    const result = await db.collection('transactions').insertOne({
      ...data,
      amount: Number(data.amount),
      date: new Date(data.date).toISOString(),
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const data = await request.json();
    const { _id, ...updateData } = data;
    
    const result = await db.collection('transactions').updateOne(
      { _id: new ObjectId(_id) },
      { 
        $set: {
          ...updateData,
          amount: Number(updateData.amount),
          date: new Date(updateData.date).toISOString(),
        }
      }
    );
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const { id } = await request.json();
    const result = await db.collection('transactions').deleteOne({ 
      _id: new ObjectId(id) 
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}