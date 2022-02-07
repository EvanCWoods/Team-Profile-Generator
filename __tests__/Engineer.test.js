const Engineer = require("../src/engineer");

describe("Engineer", () => {
    describe("initialization", () => {
        it("can set github account via constructor", () => {
            const obj = new Engineer('','','',"EvanCWoods");

            expect(obj.github).toEqual("EvanCWoods");
        });
    });
    describe("getRole", () => {
        it("getRole() should return Engineer", () => {
            const obj = new Engineer();

            expect(obj.getRole()).toEqual("Engineer");
        });
    });
    describe("getGithub", () => {
        it("can get githubh username via getGithub()", () => {
            const github = "EvanCWoods";
            const obj = new Engineer('','','',github);

            expect(obj.getGithub()).toEqual(github)
        }); 
    });
})