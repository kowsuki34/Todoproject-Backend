const express = require('express')
const router = express.Router()
const User = require('../Schema/Users')

router.get('/get', async function (req, res) {
    await User.find()
        .then(function (user) {
            res.send(user).status(200)
        })
        .catch(function (err) {
            res.send(err).status(400)
        })
})

router.post('/post', async function (req, res) {
    const { title, description } = req.body
    await User.create({
        Title: title,
        Description: description
    })
        .then(function (user) {
            res.send(user).status(200)
        })
        .catch(function (err) {
            res.send(err).status(400)
        })


})

router.get('/get/:id', async function (req, res) {
    await User.findById(req.params.id)
        .then((function (user) {
            res.send(user).status(200)

        }))
        .catch((function (err) {
            res.send(err).status(400)
        }))
})




router.put('/put/:id', async function (req, res) {
    const { title, description } = req.body
    await User.findByIdAndUpdate(
        req.params.id,
        {
            Title: title,
            Description: description,


        },
        { new: true }
    )
        .then((function (user) {
            res.send("Updated").status(200)

        }))
        .catch((function (err) {
            res.send(err).status(400)
        }))

})

router.delete('/delete/:id', async function (req, res) {
    await User.findByIdAndDelete(
        req.params.id
    )
        .then(function (user) {
            res.send(user).status(200)
        })
        .catch(function (err) {
            res.send(err).status(400)
        })
})

module.exports = router