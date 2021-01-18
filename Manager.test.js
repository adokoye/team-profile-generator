const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// officeNumber
test("creates an Manager office number", () => {
  const manager = new Manager("Cam", 1, "test@test.com", "Manager", 100);

  expect(manager.officeNumber).toBe(100);
});

// getRole() // Overridden to return 'Manager'
test("get manager role from getRole()", () => {
  const manager = new Manager("Cam", 1, "test@test.com", "Manager", 100);
  //expected to override to return 'Manager'
  expect(manager.getRole()).toBe("Manager");
});
