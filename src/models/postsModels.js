import connectToBank from "../config/dbConfig.js"

// Conection with Database Mongo
const conection = await connectToBank(process.env.STRING_CONECTION)

// Function connection with table
export async function getAllPosts(){
  
  const db = conection.db('imersao-instabytes')
  const collection = db.collection('posts')
  return collection.find().toArray()

}