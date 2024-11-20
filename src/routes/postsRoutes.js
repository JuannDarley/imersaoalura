import express from 'express'
import { listPost } from '../controllers/postController.js'

const routes = (app) => {

  app.use(express.json())

  //Route to search for posts
    app.get('/posts',listPost)
}
export default routes