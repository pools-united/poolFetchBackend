const router = require('express').Router();
const axios = require('axios');


//POOL IDs
const eraID = "13375a4a5470b564246a3251ea0ccfef046ee5bcaf3ed6de6315abc7"
const venusID = "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253"
const udpID = "9f38b462566102fe9bc1061131f298164d51ea54464ad984d486ce87"
const minesID = "3e5fcbaf750c0291cecb72384091724a1c2d35da10a71473e16c926f"

//FETCH ALL POOLS
router.get("/all", (req, res, next) => {
  axios.all([
    axios.get(`https://js.adapools.org/pools/${eraID}/summary.json`),
    axios.get(`https://js.adapools.org/pools/${venusID}/summary.json`),
    axios.get(`https://js.adapools.org/pools/${udpID}/summary.json`),
    axios.get(`https://js.adapools.org/pools/${minesID}/summary.json`)
  ])
  .then(axios.spread((era, venus, udp, mines) => {
    res.json({era:era.data, venus:venus.data, udp:udp.data, mines:mines.data})
  }))
  .catch(err => {
    res.status(500).json({
      message: err.message
    });
})})

//FETCH SINGE POOL
router.get("/:id", (req, res, next) => {
  axios.get(`https://js.adapools.org/pools/${req.params.id}/summary.json`)
  .then(response => {
    res.json(response.data)
  })
  .catch(err => {
    res.status(500).json({
      message: err.message
    })
})})

module.exports = router;