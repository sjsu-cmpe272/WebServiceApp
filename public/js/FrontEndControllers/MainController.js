app.controller('MainController', ['$scope', function ($scope) {
    $scope.apps =
        [
            {
                title: "GET 'fibonacci/'",
                description: 'Returns collection of Fibonacci Numbers up to number 1000',
                URL: 'https://fpwebservice.herokuapp.com/fibonacci',
                response_format: 'JSON',
                parameters: 'NONE',
                example_req: 'https://fpwebservice.herokuapp.com/fibonacci',
                example_res: '{"1":0,"2":1,"3":1,"4":2,"5":3,"6":5,"7":8}'
            },
            {
                title: "GET 'fibonacci/:toNumber'",
                description: "Returns collection of Fibonacci Numbers up to number specified in ':toNumber'",
                URL: 'https://fpwebservice.herokuapp.com/fibonacci/:toNumber',
                response_format: 'JSON',
                parameters: 'toNumber',
                example_req: 'https://fpwebservice.herokuapp.com/fibonacci/20',
                example_res: '{"1":0,"2":1,"3":1,"4":2,"5":3,"6":5,"7":8,"8":13}'
            },
            {
                title: "GET 'ispalindrome/:word'",
                description: "Verifies if a word is a Palindrome and returns 'true' or 'false' accordingly",
                URL: 'https://fpwebservice.herokuapp.com/ispalindrome/:word',
                response_format: 'JSON',
                parameters: ':word',
                example_req: 'hhttps://fpwebservice.herokuapp.com/ispalindrome/Racecar',
                example_res: '{"isPalindrome":true}'
            }
        ]
}]);