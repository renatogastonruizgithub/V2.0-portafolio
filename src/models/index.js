
const express =require('express')
const indexDb=express()

indexDb.use(require('./Projects'))
indexDb.use(require('./Skills')) 
indexDb.use(require('./About'))
/* indexDb.use(require('./Projects_Skills')) */
indexDb.use(require('./details_project'))
indexDb.use(require('./portafolio'))
indexDb.use(require('./certificated'))
indexDb.use(require('./home'))




module.exports={indexDb}