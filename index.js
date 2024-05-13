function collectAnimals(...animals) {
    return animals.map(animal => animal)
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}


console.log(combineFruit(["apple", "pear"],
["cake", "pie"],
["carrot"]))



function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
 console.log( parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }));


  function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites([firstFav,secondFav, ,thirdFav]){
    /*your code here*/
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log(returnFavorites(favoriteActivities))



function combineAnimals(...animals) {
    return [].concat(...animals)
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]


function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce((acc, number) => {
      return acc * number;
    }, 1)
  }
  

  function unshift(...arr) {
    return [].concat(arr);
  }
 
  
  function populatePeople(names){
    return names.map((name) => {
       const [firstName, lastName] = name.split(" ");
        // your code
        return {
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]