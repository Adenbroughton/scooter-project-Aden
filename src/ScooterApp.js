const User = require("./User")
const Scooter = require("./User")

class ScooterApp {
constructor () {
  this.station = {
    "Northwich": [],
    "Hartford": [],
    "Greenbank": []
  }
  this.registeredUsers = {}
}



  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("User already registered.");
    }
    if (age < 18) {
      throw new Error("User is too young to register.");
    }
    const user = new User(username, password, age);
    this.registeredUsers[username] = user;
    console.log(`${username} has been registered.`);
    return user;
}
  

  loginUser(username, password) {
      User.login(password)
      if (true) 
      console.log(`${username} user has been logged in.`);
    if (!User || User.password !== password) {
      throw new Error("Username or password is incorrect.");

}
  }

  logoutUser(username) {
User.logout()
console.log(`${username} user is logged out`);
if (!User.logout) {
  console.log(`${username} no such user is logged in`)
}
  }

  createScooter(station) {
let scooter = new Scooter()
this.station.push(scooter)
  }

//   This method is called by the Scooter company’s home office when new scooters are deployed.
// Create a new scooter, add it to the station’s scooter list, and set its station property. Log created new scooter to the console. Return the scooter.
// Throws no such station error if the station does not exist.

  dockScooter(scooter, station) {

  }

  rentScooter(scooter, user) {

  }

  print() {

  }




}

User
Scooter

module.exports = ScooterApp
