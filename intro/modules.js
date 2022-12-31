const xyz = require('./people')

console.log(xyz)
console.log(xyz.people, xyz.ages)

const {people, ages} = require('./people')
console.log(people, ages)

const os = require('os')
console.log(os.platform(), os.homedir())