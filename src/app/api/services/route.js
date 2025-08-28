import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json();

    // Use the production collection (services)
    const serviceCollection = await dbConnect(collectionNamesObj.productionCollection);

    const result = await serviceCollection.insertOne(body);

    return new Response(JSON.stringify({ insertedId: result.insertedId }), {
      status: 201,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to add service" }), {
      status: 500,
    });
  }
}
