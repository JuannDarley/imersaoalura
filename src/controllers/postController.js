import { getAllPosts } from "../models/postsModels.js"

export async function listPost (req, res) {

  const posts = await getAllPosts()
    res.status(200).json(posts)

 }