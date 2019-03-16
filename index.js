let string = "hello world";
//let string = "HELLO WORLD";

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

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
}


/*
console.log(shout());
console.log(whisper());
*/