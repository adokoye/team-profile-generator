const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

// school
test("creates an Intern school name", () => {
  const intern = new Intern("Cam", 1, "test@test.com", "Intern", "schoolName");

  expect(intern.school).toBe("schoolName");
});
// getSchool()
test("get school name from getSchool()", () => {
  const intern = new Intern("Cam", 1, "test@test.com", "Intern", "schoolName");

  expect(intern.getSchool()).toBe("schoolName");
});

// getRole() // Overridden to return 'Intern'
test("get intern role from getRole()", () => {
  const intern = new Intern("Cam", 1, "test@test.com", "Intern", "schoolName");
  //expected to override to return 'Manager'
  expect(intern.getRole()).toBe("Intern");
});
