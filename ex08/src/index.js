// Lodash
const _ = require("lodash");

// only change code below this line
// users nested array with four objects
var users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female",
  },
  {
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male",
  },
  {
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female",
  },
];
// users nested array with four objects end here

// getUsers functions - list of users starts here
function getUsers() {
  var output = "";
  for (let i = 0; i < users.length; i++) {
    console.log(
      users[i].firstName +
        " " +
        users[i].lastName +
        " is " +
        users[i].age +
        ", " +
        users[i].gender
    );
  }
  return output;
}
// get usrers function - list of users ends here

// findUsers(lastName, gender) function starts here
function findUser(lastName, gender) {
  try {
    // add appropriate code here
    var user = _.find(users, { lastName, gender });
    var iFindUser =
      user.firstName +
      " " +
      user.lastName +
      " is " +
      user.age +
      ", " +
      user.gender;
    return iFindUser;
  } catch (error) {
    console.log("Cannot read property 'firstName' of undefined"); // Change this line
    return "Cannot read property 'firstName' of undefined"; // Change this line
  }
}

// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
findUser("Carrey", "male"); // Change this line

module.exports = findUser;
