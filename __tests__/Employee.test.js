const Employee = require("../src/employee.js")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee object", () => {
            const obj = new Employee();

            expect(obj instanceof Employee);
        });
        it("should set a name via construvtor arguments", () => {
            const name = "Evan";
            const obj = new Employee(name);

            expect(obj.name).toEqual(name,'','');
        });
        it("Should set an employee id via constructor arguments", () => {
            const id = 1;
            const obj = new Employee('',id,'');

            expect(obj.id).toEqual(id);
        });
        it("should set email via constructor arguments", () => {
            const email = "evan.woods.dev@gmail.com";
            const obj = new Employee('','',email);

            expect(obj.email).toEqual(email);
        });
    });
    describe("GetName", () => {
        it("should get the mane via getName()", () => {
            const name = "Evan";
            const obj = new Employee(name,'','');

            expect(obj.getName()).toEqual(name);
        });
    });
    describe("GetId", () => {
        it("should get the id via getId()", () => {
            const id = 1;
            const obj = new Employee('',1,'');

            expect(obj.getId()).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should get the email via getEmail()", () => {
            const email = "evan.woods.dev@gmail.com";
            const obj = new Employee('','',email);

            expect(obj.getEmail()).toEqual(email);
        });
    });
    describe("getRole", () => {
        it("getRole() should return 'Employee'", () => {
            const obj = new Employee();

            expect(obj.getRole()).toEqual("Employee");
        })
    })
})