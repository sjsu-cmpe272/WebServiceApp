var request = require('request');
var base_url = "http://localhost:8080";

describe("Handle routes request base url", function () {

    it("returns index.html rendered and must contain text:'API Documentation'", function(done) {
        request.get(base_url, function(error, response, body) {
            expect(body).toContain("API Documentation");
            done();
        });
    });
});

describe("Handle routes request for Fibonacci Numbers", function () {

    it("returns fibonacci numbers up to 1000'", function(done) {
        request.get(base_url + 'fibonacci/', function(error, response, body) {
            expect(body).toEqual(JSON.stringify({"1":0,"2":1,"3":1,"4":2,"5":3,"6":5,"7":8,"8":13,"9":21,"10":34,"11":55,"12":89,"13":144,"14":233,"15":377,"16":610,"17":987}));
            done();
        });
    });

    it("returns error if negative number'", function(done) {
        request.get(base_url + 'fibonacci/-50', function(error, response, body) {
            expect(body).toEqual(JSON.stringify({"error":"400 Bad Request. A positive number is required."}));
            done();
        });
    });

    it("returns error if number is zero'", function(done) {
        request.get(base_url + 'fibonacci/0', function(error, response, body) {
            expect(body).toEqual(JSON.stringify({"error":"400 Bad Request. A positive number is required."}));
            done();
        });
    });

    it("returns correct fibonacci if number 1 is provided'", function(done) {
        request.get(base_url + 'fibonacci/1', function(error, response, body) {
            expect(body).toEqual(JSON.stringify({"1":0}));
            done();
        });
    });

    it("returns correct fibonacci if number 2 is provided'", function(done) {
        request.get(base_url + 'fibonacci/2', function(error, response, body) {
            expect(body).toEqual(JSON.stringify({"1":0,"2":1}));
            done();
        });
    });

    it("returns correct fibonacci if number 3 is provided'", function(done) {
        request.get(base_url + 'fibonacci/3', function(error, response, body) {
            expect(body).toEqual(JSON.stringify({"1":0,"2":1,"3":1,"4":2,"5":3}));
            done();
        });
    });

});

describe("Handle routes request for Palindrome strings", function () {

    it("return error code 404 when no parameters are provided", function(done) {
        request.get(base_url + 'ispalindrome/', function(error, response, body) {
            expect(response.statusCode).toBe(404);
            done();
        });
    });

    it("returns 'true' if 'Racecar' is provided", function(done) {
        request.get(base_url + 'ispalindrome/Racecar', function(error, response, body) {
            expect(body).toEqual(JSON.stringify({"isPalindrome":true}));
            done();
        });
    });

    it("returns 'false' if 'Racecars'", function(done) {
        request.get(base_url + 'ispalindrome/Racecars', function(error, response, body) {
            expect(body).toEqual(JSON.stringify({"isPalindrome":false}));
            done();
        });
    });

    it("returns 'true' if 'rac.car'", function(done) {
        request.get(base_url + 'ispalindrome/rac.car', function(error, response, body) {
            expect(body).toEqual(JSON.stringify({"isPalindrome":true}));
            done();
        });
    });

});
