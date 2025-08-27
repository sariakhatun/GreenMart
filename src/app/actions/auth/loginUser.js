"use server";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { compare } from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = await dbConnect(collectionNamesObj.userCollection);
  
  const user = await userCollection.findOne({ email });
    console.log("found user:", user); // 👈 debug

  if (!user) return null;

 const isPasswordOk = password === user.password; // direct comparison
  console.log("password match:", isPasswordOk); // debug

  if (!isPasswordOk) return null;

  // Only return plain object for NextAuth
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
  };
};
