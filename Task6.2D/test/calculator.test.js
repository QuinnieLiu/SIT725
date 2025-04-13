const expect = require("chai").expect;
const request = require("request");

describe("Sum Calculator API", function () {
    const baseUrl = "http://localhost:3000";
    it("returns status 200 to check if api works", function (done) {
        request(baseUrl, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });
    it("should return correct sum for valid numbers", function (done) {
        request.get(`${baseUrl}/add?num1=10&num2=5`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.include("15"); // Response contains the sum in plain text or HTML
            done();
        });
    });
    it("should handle missing parameters", function (done) {
        request.get(`${baseUrl}/add?num1=10`, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200); // Expect error
            done();
        });
    });
    it("should return error for non-numeric input", function (done) {
        request.get(`${baseUrl}/add?num1=hello&num2=world`, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200);
            done();
        });
    });
});