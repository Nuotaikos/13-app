const express = require('express')
const mongoose = require('mongoose')
// const path = require('path')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routs/todos')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main', //pagrindinis Išdėstymas puslapiams, kuris vadinsis main
  extname: 'hbs' // "hbs" pagal nutylejima tai "handlebars", sutrumpintas pavadinimas
})

app.engine('hbs', hbs.engine) //Uzregistruojam varikli renderit puslapius (engine - tai funkcija). PAvadinam kaip norim. Kaip reiksme perduodamas objektas hbs ir parametras engine, kurio neiskvieciam
app.set('view engine', 'hbs') //cia bus naudojamas. Raktas'view engine'pagal nutylejima naudoti handlebars
app.set('views', 'views') //registruojam papke, kur saugosime saito kazka(bidai). Raktas - 'views' ir pagal nutylejima jame yra eilute 'views'

// app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes) //registruojam routa su parametru todoRoutes

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://Nuotaikos:Java2033@cluster0.ls1rips.mongodb.net/todos', //galima isnesti i config
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) { //gaudo klaidas, jei conect nesuveikia
    console.log(e)
  }
}

start() //kad viskas veiktu, iskvieciam funkcija "start"