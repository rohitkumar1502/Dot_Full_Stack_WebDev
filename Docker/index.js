const express = require('express')
const app = express()
const port = 3000
app.get('/', (rea, res) =>{
    res.json({
        "Hey":"My name is Rohit"
    })

})


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})