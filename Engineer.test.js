const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

//GitHub username
test("creates an Engineer github username", () => {
  const engineer = new Engineer("Cam", 1, "test@test.com", "Engineer", "github");

  expect(engineer.github).toBe("github");
});
// getGithub()
test("get github user name from getGithub()", () => {
  const engineer = new Engineer("Cam", 1, "test@test.com", "Engineer", "github");

  expect(engineer.getGithub()).toBe("github");
});
// getRole() // Overridden to return 'Engineer'
test("get engineer role from getRole()", () => {
  const engineer = new Engineer("Cam", 1, "test@test.com", "Engineer", "github");
  //expected to override to return 'Manager'
  expect(engineer.getRole()).toBe("Engineer");
});
