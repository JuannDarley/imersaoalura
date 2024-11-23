import express from 'express'
import multer from 'multer'
import { listPost, nwPost, uploadImage } from '../controllers/postController.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {

  app.use(express.json())

  //Route to search posts
    app.get('/posts', listPost)

  //Route to create posts
    app.post('/posts', nwPost)

    app.post('/upload', upload.single('image'), uploadImage)
}
export default routes