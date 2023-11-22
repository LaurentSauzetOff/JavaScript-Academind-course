const movieList = document.getElementById('movie-list');

movieList.backgroundColor = 'red';
movieList.style.display = 'block';

const userChoosenKeyName = 'level';

let person = {
    'first name': 'Karo',
    age: 41,
    hobbies: ['Sports', 'Cooking'],
    [userChoosenKeyName]: '...',
    greet: function() {
        alert('Hi there!');
    },
    1.5: 'hello'
};

// person.age = 42;
// delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;
const keyName = 'first name';

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);
