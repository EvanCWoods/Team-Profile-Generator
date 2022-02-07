const Manager = require("../src/manager");

describe("Manager", () => {
    describe("initialization", () => {
        it("can set office number via constructor argument", () => {
            const office = 14
            const obj = new Manager('','','',office);

            expect(obj.office).toEqual(office);
        });
    });
    describe("getRole", () => {
        it("getRole() should return manager", () => {
            const obj = new Manager();

            expect(obj.getRole()).toEqual("Manager");
        });
    });
    describe("get office", () => {
        it("can get office number via getOffice()", () => {
            const office = 14;
            const obj = new Manager('','','',office);

            expect(obj.getOffice()).toEqual(office);
        });
    });
});