const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//function for each word's first letter to be capitalize + rest of word added back in (slice from index 1 to the end)
const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1)

//new array called wordsArray where sentences of tutorial are split by white space (to separate each word)
//loop through each word using map in wordsArray to execute upperFirst on it then have it join back by adding space

function titleCasedOne(tutorial) {
  let wordsArray = tutorial.split(' ')
  return tutorial = wordsArray.map(upperFirst).join(' ')
}

//loop through tutorial array and execute titleCasedOne functon on each array
const titleCased = () => tutorials.map(titleCasedOne)





// function firstLetter(splitTutorials) {
//   return splitTutorials.filter(function(splitTutorials) {return splitTutorials.charAt(0)})
// }
// const eachWord = (firstLetter(splitTutorials));
// // ['What', 'is', 'the', 'Constructor', 'OO', 'pattern?']

// const capitalEachWord = eachWord.map(function(item) {
//    return item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
//  })
//  //['What', 'Is', 'The', 'Constructor', 'Oo', 'Pattern?']

// console.log(capitalEachWord.join(' '));
// //What Is The Constructor Oo Pattern?