const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];

const shortWords = arr => arr.filter(word => word.length < 5)
// console.log(shortWords(animals))

const noVowel = arr => arr.map(word => word.replace(/[aeiou]/gi, "x"))
// console.log(noVowel(animals))

const longToShort = arr => arr.sort((a, b) => b.length - a.length)
// console.log(longToShort(animals))

const onlyVowelA = arr => arr.filter(word => word.includes("a"))
// console.log(onlyVowelA(animals))

const pluralize = arr => arr.map(word => word + "s")
// console.log(pluralize(animals))

const longerThanSeven = arr => arr.some(word =>word.length > 7) 
// console.log(longerThanSeven(animals))

const oddLength = arr => arr.filter(word => word.length % 2 !== 0)
// console.log(oddLength(animals))

const allFour = arr => arr.every(word => word.length === 4)
// console.log(allFour(animals))

const sum = arr => arr.reduce((acc, currVal) => acc + currVal)
// console.log(sum(animals))

const longWords = arr => arr.filter(word => word.length > 3)
// console.log(longWords(animals))

const uppercase = arr => arr.map(word =>  word[0].toUpperCase() + word.substr(1))
// console.log(uppercase(animals))

const concatStrings = arr => arr.join(" ")
// console.log(concatStrings(animals))