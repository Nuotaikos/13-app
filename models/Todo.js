const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Todo', schema)


// const { Schema, model } = require('mongoose') //pajungiamas objektas Schema ir model is paketo mogoose is DB paketo

// const schema = new Schema({  //const vadiname kaip norim, apibreziama per konstruktoriu klase Schema. Toliau perduodam konfiguracija busimam modeliui. Id susikuria pagal nutylejima, atskirai kurti prie title ir compleated nereikia
//   title: { //parametrai
//     type: String,
//     required: true //jei neperduodam title tai duotas modelis negali buti sukurtas
//   },
//   completed: {
//     type: Boolean,
//     default: false //jei sukureme koki nors todo, tai jis dar neuzbaigtas
//   }
// })

// module.exports = model('Todo', schema) //funkcija model. registruojam modeli Todo, antru parametru perduodam schema, kuri butina, kad sukurti TODO