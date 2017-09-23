var inputs = process.argv.slice(2);
var result = inputs.map(inputs=>inputs.split('')[0]).reverse().reduce((inputs,newString)=>newString.concat(inputs));

console.log(`[${inputs}] becomes "${result}"`);

/*
* official solution
*var inputs = process.argv.slice(2);
*var result = inputs.map(s => s[0])
* .reduce((soFar, s) => soFar + s);

*console.log(`[${inputs}] becomes "${result}"`);
 */