let string = "hello world";

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
  if (string.toLowerCase) {
    return "I can't hear you!";
  } else if (string.toUpperCase) {
    return "YES INDEED!"
  }
}


/*
console.log(shout());
console.log(whisper());
*/