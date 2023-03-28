
const express = require("express")
const router = express.Router()

router.get("/admin",(req,res)=>{
    const str = [{
        "name": "Admin registered",
        "msg": "Time to make changes"
    }]

    res.end(JSON.stringify(str))
})

router.get("/",(req,res)=>{
    const str = [{
        "name": "Express User",
        "msg": "It's a great day"
    }]

    res.end(JSON.stringify(str))
})

module.exports = router