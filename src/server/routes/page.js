const express = require('express')
const fetch = require('node-fetch')
const ReactDOMServer = require('react-dom/server')
const router = express.Router()
const { DEFAULT_PAGE_SIZE, filterData } = require('../utils/helpers')
const App = require('../../components/App')

// with default page size (10)
router.get('/:page', (req, res) => {
  const { page } = req.params

  // TODO: check validity of page & size
  //

  const html = ReactDOMServer.renderToString(<App />)
  res.send(`<!doctype html><div id="app">${html}</div>`)

  // fetch('http://open-api.myhelsinki.fi/v1/places/')
  //   .then((res) => res.json())
  //   .then((json) => filterData(json.data, DEFAULT_PAGE_SIZE, page))
  //   .then((result) => {
  //     // TODO: Render properly here
  //     res.send(JSON.stringify(result))
  //   })
  //   .catch((err) => console.log(`error while fetching data: ${err}`))
})

router.get('/:page/:size', (req, res) => {
  const { page, size } = req.params

  // TODO: check validity of page & size
  //

  fetch('http://open-api.myhelsinki.fi/v1/places/')
    .then((res) => res.json())
    .then((json) => {
      // console.log(`meta: ${json.meta}`)
      // console.log(`data count: ${json.data.length}`)
      // console.log(`tags count: ${Object.keys(json.tags).length}`)
      return filterData(json.data, size, page)
    })
    .then((result) => {
      // TODO: Render properly here
      res.send(JSON.stringify(result))
    })
    .catch((err) => console.log(`error while fetching data: ${err}`))
})

module.exports = router
