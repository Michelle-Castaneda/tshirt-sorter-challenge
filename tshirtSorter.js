// T-Shirt Sorter
// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls
// This string essentially represents a bunch of t-shirts in an unsorted pile. 
// Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.
// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml
// >>> tshirtSorter('smllms')
// // ssmmll

function tshirtSorter (string) {
let sortSmall = ''
let sortMedium = ''
let sortLarge = ''

    for(let i = 0; i <string.length; i++) {
        if(string[i] === 's') {
        sortSmall += "s";
        } if (string[i] === 'm') {
        sortMedium += "m";
        } if (string[i] === 'l') {
        sortLarge+= "l";
        } 

}
return sortSmall+sortMedium+sortLarge
}

console.log(tshirtSorter('smllms'))