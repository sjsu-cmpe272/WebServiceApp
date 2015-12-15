// Calls for Libraries to be used
var _ = require('underscore')  // Javascript Helper Library

/* Routes to follow
 ======================*/
var indexfn = function(req, res) {

    // Render index.html
    res.render("index");
};

var fibonacci_toNumberfn = function(req, res){

    var value = 0, nextValue = 1, sum = 0;
    var upToNumber  = 1000  // Default Value up to fibonacci number 1000
    var counter = 3;  // counter starts at 3, since we are hard coding first 2 values in array
    var fibonacciArray = _.object(_.zip([1, 2], [0, 1]));  // Hard code first two values

    // Verify if user provided a parameter in the request
    if(req.params.toNumber) {
        if(!isNaN(req.params.toNumber) && (req.params.toNumber > 0)){
            upToNumber = req.params.toNumber;
            if(upToNumber < 2)  // Verify is user request is number 2 or less
                fibonacciArray = _.object(_.zip([1], [0]));  // Hard code first value
        } else {
            // Respond with error is number is zero or less or if not number provided
            res.status(400).json({ error: '400 Bad Request. A positive number is required.' });
            return;
        }
    }

    //  will loop through the provided parameter or (if not avail) through default value
    while((value+nextValue) <= upToNumber && upToNumber >=3){
        sum = value + nextValue;
        value = nextValue;
        nextValue = sum;

        // Add Fibonacci number to array
        fibonacciArray[counter] = sum;
        counter++;
    }
    res.send(fibonacciArray);
}

var ispalindromefn = function(req, res) {

    var word = req.params.word;
    var result = [];  // Array to store result of comparison

    // Remove "spaces" or special Characters
    word = word.toLowerCase().replace(/[^a-z0-9.]+/g,"");

    // compare word with inverse word
    if (word == word.split('').reverse().join(''))
        result = {"isPalindrome": true};
    else
        result = {"isPalindrome": false};

    res.send(result);
}

/* Map Routes
 ======================*/
var define_routes = function(dict) {
    var toroute = function(item) {
        return _.object(_.zip(['path', 'fn'], [item[0], item[1]]));
    };
    return _.map(_.pairs(dict), toroute);
};

/* Define Routes
 ======================*/
var routes = define_routes({
    '/': indexfn,
    '/fibonacci': fibonacci_toNumberfn,
    '/fibonacci/:toNumber': fibonacci_toNumberfn,
    '/ispalindrome/:word': ispalindromefn
});

module.exports = routes;