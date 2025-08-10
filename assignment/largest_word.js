// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function largestWord(string)
{
    let words=string.split(' ');
    let largeWord=' ';
    for(const word of words)
    {
        if(word.length > largeWord.length)
        {
            largeWord=word;
        }
    }
    return largeWord;
}
const string=' I am learning Programming to become a programmer';
const largeWord=largestWord(string);
console.log(largeWord);
