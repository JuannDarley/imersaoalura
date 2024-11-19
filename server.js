import express from 'express'

// Variable data base 
const posts = [

    { id: 1,
      descricao: 'Uma foto teste', 
      imagem: 'https://placecats.com/millie/300/150' },

    { id: 2,
      descricao: 'Paisagem incrível', 
      imagem: 'https://source.unsplash.com/random' },

    { id: 3,
      descricao: 'Gato brincando com um novelo de lã',
       imagem: 'https://placekitten.com/400/300' },

    { id: 4,
      descricao: 'Cachorro fazendo uma pose fofa',
      imagem: 'https://placepuppy.com/200/300' },

    { id: 5,
      descricao: 'Comida deliciosa',
       imagem: 'https://unsplash.com/photos/food' },

    { id: 6,
      descricao: 'Cidade à noite',
      imagem: 'https://source.unsplash.com/city' },

    { id: 7,
      descricao: "Um pôr do sol espetacular", 
      imagem: 'https://unsplash.com/nature/sunset' }
]


const app = express()

app.use(express.json())

app.listen(3000, () =>{

  console.log('Servidor escutando!')
  
})

app.get('/posts', (req, res) =>
  {
  res.status(200).json(posts)
})

function buscarPostPorId(id){

  return posts.findIndex((post) => {

    return post.id === Number(id)
  })
}

app.get('/posts/:id', (req, res) => {

  const index = buscarPostPorId(req.params.id)

  res.status(200).json(posts[index])

})