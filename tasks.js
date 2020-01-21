import users from "./users.js";

const getUserNames = users => users.map(el => el.name)

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//---------------------------------------------------------

const getUsersWithEyeColor = (users, color) => users.filter(el => el.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//---------------------------------------------------------

const getUsersWithGender = (users, gender) => users.filter(el => el.gender === gender).map(el => el.name)

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//---------------------------------------------------------

const getInactiveUsers = users => users.filter(el => el.isActive === false)

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//---------------------------------------------------------

const getUserWithEmail = (users, email) => users.find(el => el.email === email)

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//---------------------------------------------------------

const getUsersWithAge = (users, min, max) => users.filter(el => el.age > min && el.age <= max)

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//---------------------------------------------------------

const calculateTotalBalance = users => users.reduce((acc, el) => acc + el.balance, 0)

console.log(calculateTotalBalance(users)); // 20916

//---------------------------------------------------------

const getUsersWithFriend = (users, friendName) => {
  const findFriend = users
    .filter(el => el.friends.includes(friendName))
    .map(el => el.name)
  return findFriend
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//---------------------------------------------------------

const getNamesSortedByFriendsCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(el => el.name)
  

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//---------------------------------------------------------

const getSortedUniqueSkills = users => {

  const arrAllSkills = users
  .reduce((acc, el) => {
    acc.push(...el.skills);
    return acc
  }, [])
  .sort()
  .reduce((acc, el) => acc.includes(el) ? acc : [...acc, el], []);
 
  return arrAllSkills
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]