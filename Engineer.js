const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    //add constructor from parent 'Employee' object
    super(name, id, email, role);

    this.github = github;
  }
  // getGithub()
  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;
