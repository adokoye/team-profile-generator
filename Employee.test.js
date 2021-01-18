const Employee = require("../lib/Employee");
//name, id and email
test("creates an employee object", () => {
  const employee = new Employee("Cam", 1, "test@test.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name.length).toBeGreaterThan(2);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining("@"));
});
// getName()
test("get name from getName()", () => {
  const employee = new Employee("Cam");

  expect(employee.getName()).toEqual(expect.any(String));
});
// getId()
test("get ID from getID()", () => {
  const employee = new Employee("Cam", 1);

  expect(employee.getId()).toBe(1);
});

// getEmail()
test("get ID from getID()", () => {
  const employee = new Employee("Cam", 1, "test@test.com");

  expect(employee.getEmail()).toBe("test@test.com");
});

// getRole() // Returns 'Employee'
test("get role from getRole()", () => {
  const employee = new Employee("Cam", 1, "test@test.com", "Employee");
  //expected to return 'Employee'
  expect(employee.getRole()).toBe("Employee");
});
// The other three classes will extend Employee.
