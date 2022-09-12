// const { Router } = require('express')
// const Todo = require('../models/Todo')
// const router = Router()

// router.get('/', async (req, res) => {
//   const todos = await Todo.find({})

//   res.render('index', {
//     title: 'Todos list',
//     isIndex: true,
//     todos
//   })
// })

// router.get('/create', (req, res) => {
//   res.render('create', {
//     title: 'Create todo',
//     isCreate: true
//   })
// })

// router.post('/create', async (req, res) => {
//   const todo = new Todo({
//     title: req.body.title
//   })

//   await todo.save()
//   res.redirect('/')
// })

// router.post('/complete', async (req, res) => {
//   const todo = await Todo.findById(req.body.id)

//   todo.completed = !!req.body.completed
//   await todo.save()

//   res.redirect('/')
// })

// module.exports = router

const { Router } = require('express') // pajungiam router is express bibliotekos
// const { create } = require('../models/Todo')
const Todo = require('../models/Todo')
const router = Router() //sukuriam kintamaji su funkcija Router

router.get('/', async (req, res) => { //kreipiames i routeri ir, kad apdirbti uzklausas kvieciam get. Antras parametras callback (req, res). Asinhronine funkcija, nes darysime uzklausa DB-je

  const todos = await Todo.find({}).lean() //Butina gauti visus Todo, kurie yra. Masyvas, perduodam tuscia objekta er find.

  res.render('index', {   //kad vartotojui kazka grazinti, kreipiames i response. Render is express, kas renderina psl index.hbs
    title: 'Todos list',
    isIndex: true,
    todos
  })
})
router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true
  })
})

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title
  })

  await todo.save()
  res.redirect('/')
})
router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title // title atitinka pavadinima esanti create.hbs name="title". Tam, kad veiktu t.y. parsintu body, prirasom logikos index.js (pridedam midlewear)
  })

  await todo.save() //issaugom su palaukimu
  res.redirect('/') //nurodom kelia, kur persiusti t.y. i pagr. psl.
})

router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id) //laukiam kol Todo modelis ivykdys metoda findById

  todo.completed = !!req.body.completed   //!!paverciam i booleana
  await todo.save()

  res.redirect('/') //atnaujinam psl i pagr puslapi
})
module.exports = router