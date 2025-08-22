import dbConnect from './dbConnect.js';

async function test() {
  const collection = await dbConnect('testCollection');
  console.log('Connected to collection:', collection.collectionName);
}

test();
