const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e  => {
    e.preventDefault();
    //console.log(username.value);
    console.log(form.username.value); // é a mesma coisa da linha 2 e 6
});

//---------------- REGULAR EXPRESSIONS --------------------

// testing RegEx

const username = 'guilherme';
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);

// if(result) {
//     console.log('regex test passed :)');
// } else {
//     console.log('regex test failed :(');
// }

// let result = username.search(pattern);
// console.log(result);


// Metacharacters 

// \d match any digit character (same as [0-9])

// \w match any word character (a-z, A-Z, 0-9 and _'s)

// \s match a whitespace character (spaces, tabs etc)

// \t match a tab character only

// d -- matches the literal character, 'd'
// \d -- matches any digit character

//--------------------------------------------------------

// Special Characters

// '+' the one-or-more quantifier

// '\' the escape character

// '[]' the character set

// '[^]' the negate symbol in a character set

// '?' The zero-or-one quantifier (makes a preceding char optional)

// '.' any character whatsover (expect the newline character)

// '*' the 0-or-more quantifier (a bit like +)