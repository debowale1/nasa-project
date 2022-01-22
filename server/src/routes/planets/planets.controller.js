const {planets} = require('../../models/planets.model')

console.log('Planets are: ' +planets);
function getAllPlanets(req, res){
  return res.status(200).json(planets)
}

module.exports = {
  getAllPlanets,
}