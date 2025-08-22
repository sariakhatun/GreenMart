'use server'
import dbConnect from '@/lib/dbConnect'

export const registerUser = async (payload) => {
  const result = await dbConnect('test_user').insertOne(payload)
  return {
    acknowledged: result.acknowledged,
    insertedId: result.insertedId.toString() // convert ObjectId to string
  }
}
