const express = require('express')
const request = require('superagent')

const router = express.Router()

// don't really need this because this is used for posting data
router.use(express.json())

const swapiUrl = 'https://swapi.co/api'

router.get('/:id', (req, res) => {
  // don't need to convert id to a number because were going to stick it right into a string anyway
  const url = `${swapiUrl}/people/${req.params.id}`
    request 
    .get(url)
      .then(swapires => {
      res.json(swapires.body)

    })
      .catch(err) => {
      res.status(500).send('GETTING API FAILED')
      console.error(err)
    }
  })


module.exports = router
