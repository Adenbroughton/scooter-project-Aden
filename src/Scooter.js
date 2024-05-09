const User = require("./User")

class Scooter {
  constructor (station) {
    this.station = station
    this.user = null
    this.serial = Scooter.nextSerial++
    this.charge = 100
    this.isBroken = false
  }

  static nextSerial = 1

  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      this.user = user
      this.station = null
    } else  {
      if (this.charge <= 20) {
        throw new Error ("Scooter needs to charge")
      } else if (this.isBroken) {
        throw new Error ("Scooter needs repair")
      }
    }
  }

  dock(station) {
    this.user = null
    this.station = station

  }
}

  recharge() {
 const timer = setInterval() {
    if (this.charge < 100) {
      this.charge + 10 
    }
    else if (this.charge >= 100) {
  clearTimeout(timer)
  }
}
  
  }



class User{
  constructor (person){
    this.person = person
  }
}

const scooter1 = new Scooter(london)
console.log (scooter1)





module.exports = Scooter
