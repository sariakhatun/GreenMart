'use server'
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect'

export const registerUser = async (payload) => {
  console.log(payload)
    const userCollection = await dbConnect(collectionNamesObj.userCollection);

  //validation
  let {name,email,password}=payload
  if(!email || !password) return {success : false}
  let user = await userCollection.findOne({email: payload.email})
  if(!user){
    let result = await userCollection.insertOne(payload)
    // let {_id, acknowledged, insertedId} = result
    //   return{_id, acknowledged, insertedId}
    const { acknowledged, insertedId } = result

return {
  acknowledged,
  insertedId: insertedId.toString(), // convert ObjectId to string
} 


  }
  return {success : false}
  
}
