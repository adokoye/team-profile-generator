const Employee = require("./Employee");

// officeNumber
class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    //add constructor from parent 'Employee' object
    super(name, id, email, role);

    this.officeNumber = officeNumber;
  }
}
module.exports = Manager;
