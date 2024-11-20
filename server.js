import express from 'express'
import connectToBank from './src/config/dbConfig.js'

// Conection with Database Mongo
const conection = await connectToBank(process.env.STRING_CONECTION)

// Variable data base 
const posts = [

    { id: 1,
      description: 'A test photo', 
      image: 'https://placecats.com/millie/300/150' },

    { id: 2,
      description: 'Incredible landscape', 
      image: 'https://source.unsplash.com/random' },

    { id: 3,
      description:'Cat playing with a ball of yarn',
      image: 'https://placekitten.com/400/300' },

    { id: 4,
      description: 'Dog doing a cute pose' ,
      image: 'https://placepuppy.com/200/300' },

    { id: 5,
      description: 'Delicious food',
      image: 'https://unsplash.com/photos/food' },

    { id: 6,
      description: 'City at night',
      image: 'https://source.unsplash.com/city' },

    { id: 7,
      description: 'A spectacular sunset', 
      image: 'https://unsplash.com/nature/sunset' }
]

// Create conection Server
const app = express()

app.use(express.json())

app.listen(3000, () =>{

  console.log('Server listening')
  
})

// Function connection with table
async function getAllPosts(){
  
  const db = conection.db('imersao-instabytes')
  const colection = db.collection('posts')
  return colection.find().toArray()

}

//Route for server
app.get('/posts', async (req, res) => {

  const posts = await getAllPosts()
  res.status(200).json(posts)

})

function searchPostById(id){

  return posts.findIndex((post) => {

    return post.id === Number(id)
  })
}

app.get('/posts/:id', (req, res) => {

  const index = searchPostById(req.params.id)

  res.status(200).json(posts[index])

})