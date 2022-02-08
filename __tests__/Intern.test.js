const Intern = require("../src/intern");

describe("Intern", () => {
    describe("initialization", () => {
        it("can get school via constructor", () => {
            const school = "The University of Sydney";
            const obj = new Intern('','','',school);

            expect(obj.school).toEqual(school);
        });
    });
    describe("getRole", () => {
        it("getRole() should return 'Intern'", () => {
            const obj = new Intern('','','','');

            expect(obj.getRole()).toEqual("Intern");
        });
    });
    describe("getSchool", () => {
        it("can get school via getSchool()", () => {
            const school = "The University of Sydney";
            const obj = new Intern('','','',school);

            expect(obj.getSchool()).toEqual(school);
        });
    });
})