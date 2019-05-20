// 4
// Create a function called isEmpty which check if the parameter is empty.
//  If the parameter is empty, it returns true else it returns false.

// I have to create a function for checking the values not to be empty for question 1

const isEmpty = value => {
    return (
        value === null ||
        value === undefined ||
        (typeof value === 'string' && value.length === 0) ||
        (typeof value === 'object' && Object.keys(value).length === 0)
    )
}

// console.log(isEmpty(''));
// console.log(isEmpty(' '));
// console.log(isEmpty('Asabeneh'));
// console.log(isEmpty([]));
// console.log(isEmpty(['HTML', 'CSS', 'JS']));
// console.log(isEmpty({}));
// console.log(isEmpty({name:'Asabeneh', age:200}));


// 1
// Create a function which solve quadratic equation ax2 + bx + c = 0. A quadratic equation may have one, two or no solution. 
// The function should return a set of the solution/s.

const solvQuadEquation = (a, b, c) => {

    let x, x1 = 0, x2 = 0, valueUnderSquareRoot
    let solutionSet = new Set()

    // so the quadratic equation solution is x = (-b +- sqrt(b**2 - 4ac))/2a
    // lets consider the square root value to be valueofsquare root coz if the value inside square root is negative 
    // there is no solution, and value can be positive and 0


    if (isEmpty(a) || isEmpty(b) || isEmpty(c)) {
        solutionSet.add(0);
    } else {
        valueUnderSquareRoot = b ** 2 - (4 * a * c);
        if (valueUnderSquareRoot < 0) {
            solutionSet.add(0);
        }
        else if (valueUnderSquareRoot === 0) {
            x = -b / (2 * a);
            solutionSet.add(x);
        } else {
            // since there are two solutions
            x1 = (-b + Math.sqrt(valueUnderSquareRoot)) / (2 * a);
            x2 = (-b - Math.sqrt(valueUnderSquareRoot)) / (2 * a);
            solutionSet.add(x1);
            solutionSet.add(x2);
        }

    }

    return solutionSet;
}
// console.log(solvQuadEquation(1, 4, 4)); //Set(1) {-2}

// 2
// Create a function called isPrime which check if a number is prime or not.

const isPrime = (num) => {

    if (num <= 1) {
        return false;
    }
    else if (num === 2) {
        return true;
    } else {
        for (var x = 2; x < num; x++) {
            if (num % x === 0) {
                return false;
            }
        }
        return true;
    }
}


// 3 
// Write a function rangeOfPrimes. It takes two parameters, a starting number and an ending number . The function returns an object with properties primes and count. 
// The primes value is an array of prime numbers and count value is the number of prime numbers in the array. See example

const rangeOfPrimes = (starting, ending) => {

    let result = [];

    for (let i = starting; i < ending + 1; i++) {

        if (isPrime(i) === true) {
            result.push(i);
        }
    }
    return result;
}

// console.log(rangeOfPrimes(2, 11));


// 5 
//Create a function called isPalindrome which check if a parameter is a palindrome or not.
//Don't use the built in reverse method.

const isPalindrome = (input) => {

    const alphanumerics = /[\W_]+/g;
    let reversedInput = []

    if (isEmpty(input)) {
        return `Pass some input`;
    } else {

        // making sure that the input doesnot have impurities like numbers or special characters 
        let trimmedInput = input.toString().replace(alphanumerics, '').toLowerCase().trim().split('');
        for (let i = trimmedInput.length - 1; i > -1; i--) {
            reversedInput.push(trimmedInput[i])
        }
        let letsJoinAfterReversing = reversedInput.join('')
        return trimmedInput.join('') === letsJoinAfterReversing ? true : false;

    }

}



// 6
// Create a function called countPalindrowWords which counts the number of palindrome words in the palindoromeWords array or in any array.
const palindromeWords = [
    'Anna',
    'Asa',
    'Civic',
    'common',
    'Kayak',
    'Level',
    'Madam',
    'Mom',
    'Noon ',
    'Rotor',
    'Sagas ',
    'Solar',
    'Stats',
    'Tenet ',
    'Wow'
];

const countPalindromeWords = (arr) => {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            counter = counter + 1;
        }
    }
    return `there are ${counter} palindrome words`;
}

console.log(countPalindromeWords(palindromeWords));


// 7 
// Count the number of palindrome words in the following sentence.

const sentence = `He met his mom at noon and she was watching an epsoide of the begninging of her Solos. Her tenet helped her to level up her stats. After that he went to kayak driving Civic Honda.`

const countPalindromeWordsFromSentence = (input) => {

    let splittedSentence = input.split(' ');
    let counter = 0;

    console.log(splittedSentence);

    for (let i = 0; i < splittedSentence.length; i++) {
        if (isPalindrome(splittedSentence[i])) {
            counter = counter + 1;
        }
    }
    return `there are ${counter} palindrome words`;
}

console.log(countPalindromeWordsFromSentence(sentence))

/////////////////// ############################# /////////////////////////////////// 
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '17/05/2019 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '17/05/2019 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '17/05/2019 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '17/05/2019 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '17/05/2019 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        Rating: [{ userId: 'fg12cy', rating: 5 }, { userId: 'zwf8md', rating: 4.5 }],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        Rating: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        Rating: [{ userId: 'fg12cy', rating: 5 }],
        likes: ['fg12cy']
    }
]

// 8
// a

const nextUser = {
    _id: 'ab12e',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '17/05/2019 9:00 AM',
    isLoggedIn: false
}

const signUp = (arr, newUser) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].email === newUser.email) {
            return 'User already exists';
        }
    }
    arr.push(newUser);
    return arr
}

console.log(signUp(users, nextUser))

// b
const signIn = (arr, newUser) => {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].email === newUser.email && arr[i].password === newUser.password) {
            return `Welcome ${arr[i].username}`
        }
    }

    return 'Invalid username or password'
}

console.log(signIn(users, nextUser));



// 9 
// a

let nextUserRating = {
    _id: 'aegfal',
    name: 'Laptop',
    rating: 4.5,
}

const rateProduct = (arr, newUserRating) => {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].name === newUserRating.name) {

            arr[i].Rating.push({ _id: newUserRating._id, rating: newUserRating.rating });
        }
    }
    return arr
}

console.log(rateProduct(products, nextUserRating))

const averageRating = (arr, product) => {
    let sumOfRating = 0;
    let averageRating = 0;
    let collectedRating = []
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].name === product) {

            collectedRating = arr[i].Rating.map((item) => { return item.rating });


        }
    }
    console.log(collectedRating)

    averageRating = collectedRating.reduce((element) => {

        return (sumOfRating += element)

    })

    return averageRating

}

console.log(averageRating(products, 'mobile phone'))


// 10 
// 

const likeProduct = (arr, likeOrDislike) => {

    found = false
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].likes.length !== 0) {
            arr[i].likes.pop()
            found = true

        } else {
            found = false
        }
        if (found === false) {
            arr[i].likes.push(likeOrDislike)
        }
    }
    return arr
}


console.log(likeProduct(products, 'fg12cy'))



// 5 a
// I am doing this question here because I have already done questions without using reverse method
// Also this reverse method is different 
const reverse = (input) => {

    let reversedInput = []
    for (let i = input.length - 1; i > -1; i--) {

        reversedInput.push(input.charAt(i));
    }

    return reversedInput.join('');
}

console.log(reverse('this'))


// 6
// get the positive integer out from the given string
// I love integrify since 2019 Jan 05.
// format the output as 2019-01-05
// number matra extract garne without using regex

const monthFormatter = (input) => {

    switch (input) {
        case 'Jan':
            return '01';
        case 'Feb':
            return '02';
        case 'Mar':
            return '03';
        case 'Apr':
            return '04';
        case 'May':
            return '05';
        case 'Jun':
            return '06';
        case 'Jul':
            return '07';
        case 'Aug':
            return '08';
        case 'Sep':
            return '09';
        case 'Oct':
            return '10';
        case 'Nov':
            return '11';
        case 'Dec':
            return '12';

        default:
            return 'not found'
    }
}

console.log(monthFormatter('Jan'));
const trainSentence = 'I love integrify since 2019 Jan 05.';

// const datePattern = trainSentence.match(/\d{4}/g).join('');
// const month = trainSentence.match(/[A-Z]{1}[a-z]{2}/g).join('');
// const day = trainSentence.match(/\s[0-9]{2}/g).join('');

// console.log(parseInt(datePattern))
// console.log(month)
// console.log(parseInt(day))

const pickDataFromString = (input) => {

    let year, month, date
    let pickThePattern = input.match(/(\d{4})\s([A-Z]{1}[a-z]{2})\s\d{2}/g).join('');
    let patternToArray = pickThePattern.split(' ');

    for (let i = 0; i < patternToArray.length; i++) {
        if (patternToArray[i].match(/\d{4}/g)) {
            year = patternToArray[i];
        }
        else if (patternToArray[i].match(/[A-Z]{1}[a-z]{2}/g)) {
            month = monthFormatter(patternToArray[i]);
        } else if (patternToArray[i].match(/\d{2}/)) {
            date = patternToArray[i];
        } else {
            console.log('not found');
        }
    }


    return `${year}-${month}-${date}`;

}

console.log(pickDataFromString(trainSentence));


const extractNumbers = (input) => {
    let formattedInput = input.split('')
    let parsedInput = formattedInput.map((item) => {
        return parseInt(item);
    })
    console.log(parsedInput);
    let passedItems = []
    for (let i = 0; i < parsedInput.length; i++) {
        if (Number.isInteger(parseInt(parsedInput[i]))) {
            passedItems.push(input[i])
        }
    }
    console.log(passedItems)
    return passedItems.join('');
}

console.log(extractNumbers(trainSentence));