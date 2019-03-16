let string = "hello world";
let upperCaseString = "HELLO WORLD";

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase();
}


function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string, upperCaseString) {
  if (string.toLowerCase) {
    return "I can't hear you!";
  } else if (upperCaseString.toUpperCase) {
    return "YES INDEED!"
  }
}


/*
console.log(shout());
console.log(whisper());
*/