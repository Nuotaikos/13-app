const { Router } = require('express') // pajungiam router is express bibliotekos
const router = Router() //sukuriam kintamaji su funkcija Router

router.get('/', (req, res) => { //kreipiames i routeri ir, kad apdirbti uzklausas kvieciam get. Antras parametras callback (req, res)

  // const todos = await Todo.find({})

  res.render('index', {   //kad vartotojui kazka grazinti, kreipiames i response. Render is express, kas renderina psl index.hbs
    // title: 'Todos list',
    // isIndex: true,
    // todos
  })
})
router.get('/create', (req, res) => {
  res.render('create', {
    // title: 'Create todo',
    // isCreate: true
  })
})


module.exports = router