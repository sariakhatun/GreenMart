import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";


export async function POST(req) {
  try {
    const body = await req.json();
    const productCollection = await dbConnect(collectionNamesObj.productCollection);

    const result = await productCollection.insertOne(body);

    return new Response(JSON.stringify({ insertedId: result.insertedId }), {
      status: 201,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to add product" }), {
      status: 500,
    });
  }
}
