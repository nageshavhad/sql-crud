const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    pool.query(`insert into user 
        (id,name,age) 
        values
        (${req.body.id},"${req.body.name}",${req.body.age}) `, (err, result) => {
        console.log(err, result)
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.send(result)
        }
    })
})

router.get('/', (req, res) => {
    pool.query(`select * from user`, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(result)
        }
    })
})

router.get('/:id', (req, res) => {
    pool.query(`select * from user where id=${req.params.id}`, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(result)

        }
    })
})

router.put('/:id', (req, res) => {
    pool.query(`update user set name="${req.body.name}" where id=${req.params.id}`, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(result)
        }
    })
})

router.delete('/:id', (req, res) => {
    pool.query(`delete from user where id=${req.params.id}`, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(result)
        }
    })

})
module.exports = router