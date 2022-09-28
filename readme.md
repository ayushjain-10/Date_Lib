![GitHub repo size](https://img.shields.io/github/repo-size/ayushjain-10/Date_Lib?style=for-the-badge)
![npm](https://img.shields.io/npm/v/@ayush_10/date_lib?style=for-the-badge)

# Date Library

The goal of this library is to create a JavaScript Library of Date functions.

**NPM Package** 

https://www.npmjs.com/package/@ayush_10/date_lib

**Description e** 

Dates are super important. You'll use them often. The goal of this assignment is to create a library that handles date operations in a better and more intuitive way than the built in Date Object. 


**Challenge 1** 

The Date Object can be instantiated with a date string, with a list of parameter for: year, month, date, hours, mins, secs, or with another Date object. 

This should work with any number of arguments. 

**Challenge 2**

Your class should provide human readable values for year, month, date, hour, mins, secs. 

The built in Date provides the month and day of the week starting with 0, and it doesn't provide a string for the day of the week or month which is inconvenient. 

**Challenge 3**

You need a format method that takes a "mask" string. The mask will contain formatting characters which displays various date elements, other characters are displayed unchanged. 

The built in Date object has some limited formatting options. You're library will offer a more flexible solution. 

List of formatting characters: 

- `'Y'` -> `2019` (Year full)
- `'y'` -> `19` (Year short)
- `'M'` -> `July` (Month full)
- `'m'` -> `Jul` (Month short)
- `'D'` -> `01` (date padded)
- `'d'` -> `1` (date)
- `'#'` -> `1st` (date with ordinal suffix: st, nd, rd or th)
- `'H'` -> `05` (Hours padded)
- `'h'` -> `5` (Hours)
- `'I'` -> `08` (Minutes padded)
- `'i'` -> `8` (Minutes)
- `'S'` -> `04` (Seconds padded)
- `'s'` -> `4` (Seconds)

The `format()` method should provide an acceptable default formatted date with no parameters. 

Stretch goal - It would be good if we could support more features here. Formatting dates is a very common task. There are a few things missing from the list above.

Each of the things below need a character to represent them.

- day of the week
	- day of week full - Monday, Tuesday, Wednesday...
	- day of the week short - Mon, Tue, Wed...
- The ordinal suffix. This is the st, th that follows a number. For example, 1st, 2nd, 3rd, 4th, 5th 6th, 7th, 8th 9th etc. 

**Challenge 4**

Make a `when()` this should return a human readble description of 'when' a date will occur. 

This is a common way to display relative dates you see this is apps you use every daye. 

This method should compare the date owned by your class instance with the current date. 

```JS 
const d = new D(2019, 0, 2, 3, 4, 5)
console.log(d.when()) // 6 months ago
const d = new D(2019, 9, 2, 3, 4, 5)
console.log(d.when()) // 3 months from now
const d = new D(2024, 9, 2, 3, 4, 5)
console.log(d.when()) // 5 years from now
const d = new D(2019, 6, 30, 3, 4, 5)
console.log(d.when()) // 3 days from now
const d = new D()
console.log(d.when()) // today
```

Take a look at how moment.js handles this: 

- https://momentjs.com/docs/#/displaying/fromnow/

**Stretch Challenge**

Look for edge cases in the `when()` method. When does it not work? 

- Decribe the edge case, the problem, and what casues it
- Solve the problem in code

**Stretch Challenge**

Make `when()` work for time hours minutes, seconds.

- 1 hour from now
- 3 hours ago
- 23 mins from now
- 11 mins ago
- 23 seconds from now
- 52 seconds ago

**Stretch Challenge**

Take the challenge above one step further by including both date and time. This is an open ended challenge you can make it as detailed as you care to take it. Feel free to interprept the challenge and make your best judgement as to how it can be implemented.

Here is some sample output: 

- 2 days three hours from now
- 3 years 5 months 2 days from now
- 1 year 4 months 23 days ago
- 3 hours and 24 minutes from now
- etc.

**Challenge 5**

Document your date lib. Do this by writing JS Doc string comments describing each method. 

Output the documentation to your repo or write it to your readme.md file. 

Use: https://documentation.js.org

JS Docs is a format for writing documentation in comments along side your code. Using this format your comments can be turned into web pages automatically. 

JS Docs follow the format: 

```JS
/** 
 * hello
 * @param {String} input string
 * @returns {String} 'Hello' and the input string
 */

function hello(name) {
	return `Hello ${name}`
}
```

Take a look at the JSDocs cheatsheet: https://devhints.io/jsdoc 

**Challenge 6**

Write unit tests for your date library. Test all of the properties and methods. 

**Challenge 7**

Publish your date lib to npm. Include the following badges in your readme.md:

- npm version
- license
- size
- GitHub Issues

**Stretch Challenge**

Use `.toPrimitive()` to allow your Data object to return a String or Number depending on context. 

https://javascript.info/object-toprimitive
