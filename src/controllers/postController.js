import { getAllPosts, createPost} from "../models/postsModels.js"
import fs from 'fs'
export async function listPost (req, res) {

  const posts = await getAllPosts()
    res.status(200).json(posts)

 }

 export async function nwPost(req, res) {
  
  const newPost = req.body

  try {

    const postCreated = await createPost (newPost)
    res.status(200).json(postCreated)
  
  } catch(error){

    console.error(error.message)
    res.status(500).json({'Erro':'Falha na requisição'})
  
  }
 }

 export async function uploadImage(req, res) {
  
  const newPost = {

    description: '',
    imgUrl: req.file.originalname,
    alt: ''
  }

  try {

    const postCreated = await createPost (newPost)

    const updatedImage = `uploads/${postCreated.insertedId}.png`

    fs.renameSync(req.file.path, updatedImage)

    res.status(200).json(postCreated)
  
  } catch(error){

    console.error(error.message)
    res.status(500).json({'Erro':'Falha na requisição'})
  
  }
 }